import { streamText } from 'ai';
import { readFileSync } from 'node:fs';

const PROFILE = readFileSync(
  new URL('../profile.json', import.meta.url),
  'utf8',
);

const SYSTEM = `You are Jasmine's portfolio assistant. Answer recruiters' questions about
Jasmine using ONLY the profile below. If the answer isn't there, say you don't know and
suggest contacting her. Reply in the user's language (English or Vietnamese), in 2–4
short spoken-style sentences, no markdown.

${PROFILE}`;

const ALLOWED_ORIGINS = ['https://dungime.github.io', 'http://localhost:3000'];

function corsHeaders(request: Request) {
  const origin = request.headers.get('Origin') ?? '';
  return {
    'Access-Control-Allow-Origin': ALLOWED_ORIGINS.includes(origin)
      ? origin
      : ALLOWED_ORIGINS[0],
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}

// Error codes the portfolio's chat button turns into a specific message.
type ErrorCode = 'bad_request' | 'rate_limited' | 'quota_exceeded' | 'unavailable';

const ERROR_STATUS: Record<ErrorCode, number> = {
  bad_request: 400,
  rate_limited: 429,
  quota_exceeded: 402,
  unavailable: 502,
};

function errorResponse(request: Request, code: ErrorCode) {
  return Response.json(
    { error: code },
    { status: ERROR_STATUS[code], headers: corsHeaders(request) },
  );
}

// AI Gateway reports the free-credit limits with different statuses (402, 403
// and 500 have all been seen), so the message is checked as well.
function classifyError(error: unknown): ErrorCode {
  const { statusCode, message = '' } = (error ?? {}) as {
    statusCode?: number;
    message?: string;
  };
  if (statusCode === 429 || /rate limit/i.test(message)) return 'rate_limited';
  if (
    statusCode === 402 ||
    /credit|free tier|top-up|insufficient|budget/i.test(message)
  ) {
    return 'quota_exceeded';
  }
  return 'unavailable';
}

export function OPTIONS(request: Request) {
  return new Response(null, { headers: corsHeaders(request) });
}

export async function POST(request: Request) {
  const { messages } = await request.json().catch(() => ({}));
  if (!Array.isArray(messages) || messages.length === 0 || messages.length > 20) {
    return errorResponse(request, 'bad_request');
  }

  const result = streamText({
    model: process.env.AI_GATEWAY_MODEL ?? 'anthropic/claude-haiku-5.5',
    system: SYSTEM,
    messages: messages.slice(-10), // giữ ngữ cảnh ngắn để rẻ hơn
    maxOutputTokens: 400,
  });

  // streamText doesn't throw: a failed model call arrives as an 'error' part.
  // Wait for the first text before answering, so a failure becomes an error
  // status the client can explain instead of an empty 200 stream.
  const parts = result.stream[Symbol.asyncIterator]();
  let firstText = '';
  while (!firstText) {
    const { done, value: part } = await parts.next();
    if (done) return errorResponse(request, 'unavailable');
    if (part.type === 'error') {
      console.error(part.error);
      return errorResponse(request, classifyError(part.error));
    }
    if (part.type === 'text-delta') firstText = part.text;
  }

  const encoder = new TextEncoder();
  const body = new ReadableStream<Uint8Array>({
    async start(controller) {
      controller.enqueue(encoder.encode(firstText));
      for (let next = await parts.next(); !next.done; next = await parts.next()) {
        const part = next.value;
        if (part.type === 'text-delta') controller.enqueue(encoder.encode(part.text));
        // A failure after the answer started can only end the stream early.
        if (part.type === 'error') console.error(part.error);
      }
      controller.close();
    },
  });

  return new Response(body, {
    headers: {
      ...corsHeaders(request),
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
