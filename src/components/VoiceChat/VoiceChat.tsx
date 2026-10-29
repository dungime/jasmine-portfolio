"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { useLocale, useTranslations } from "next-intl";
import { icons } from "@/components/icons";
import styles from "./VoiceChat.module.scss";

// The chat API is a separate Vercel project (see chat-api/). Without its URL
// the button is not rendered, so the static site still builds and works.
const CHAT_API_URL = process.env.NEXT_PUBLIC_CHAT_API_URL;

type Message = { role: "user" | "assistant"; content: string; failed?: boolean };

// Each kind has its own message under voiceChat.errors.
type ErrorKind = "badRequest" | "rateLimited" | "quotaExceeded" | "unavailable" | "network";

// Statuses the chat API uses for failures it can name (see chat-api/api/chat.ts).
const ERROR_KIND_BY_STATUS: Record<number, ErrorKind> = {
  400: "badRequest",
  402: "quotaExceeded",
  429: "rateLimited",
};

class ChatError extends Error {
  constructor(readonly kind: ErrorKind) {
    super(`Chat request failed: ${kind}`);
  }
}

// The API keeps only the last 10 messages and rejects more than 20.
const HISTORY_LIMIT = 10;

// The Web Speech recognition API isn't in TypeScript's DOM types, and Chrome
// and Safari still ship it under the webkit prefix.
type RecognitionResultList = ArrayLike<ArrayLike<{ transcript: string }>>;
type Recognition = {
  lang: string;
  interimResults: boolean;
  onresult: ((event: { results: RecognitionResultList }) => void) | null;
  onend: (() => void) | null;
  onerror: (() => void) | null;
  start(): void;
  stop(): void;
  abort(): void;
};
type RecognitionConstructor = new () => Recognition;

function getRecognitionConstructor(): RecognitionConstructor | undefined {
  const speechWindow = window as unknown as {
    SpeechRecognition?: RecognitionConstructor;
    webkitSpeechRecognition?: RecognitionConstructor;
  };
  return speechWindow.SpeechRecognition ?? speechWindow.webkitSpeechRecognition;
}

// Text up to and including the first sentence end that is followed by
// whitespace, so a decimal like "9.5" or a half-streamed "e.g" isn't cut.
const SENTENCE_PATTERN = /^[\s\S]*?[.!?…](?=\s)/;

export function VoiceChat() {
  const t = useTranslations("voiceChat");
  const [open, setOpen] = useState(false);

  if (!CHAT_API_URL) return null;

  return (
    <>
      {open && <ChatPanel apiUrl={CHAT_API_URL} onClose={() => setOpen(false)} />}
      <button
        type="button"
        className={`${styles.launcher} ${open ? styles.launcherOpen : ""}`}
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? t("close") : t("open")}
        aria-expanded={open}
      >
        {open ? icons.close : icons.mic}
      </button>
    </>
  );
}

// Only rendered once opened, so it can read browser APIs during render.
function ChatPanel({ apiUrl, onClose }: { apiUrl: string; onClose: () => void }) {
  const t = useTranslations("voiceChat");
  const locale = useLocale();
  const speechLang = locale === "vi" ? "vi-VN" : "en-US";

  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [listening, setListening] = useState(false);
  const [speakAnswers, setSpeakAnswers] = useState(true);

  const [RecognitionCtor] = useState(getRecognitionConstructor);
  const canSpeak = typeof window !== "undefined" && "speechSynthesis" in window;

  const recognitionRef = useRef<Recognition | null>(null);
  const abortRef = useRef<AbortController | null>(null);
  const speakAnswersRef = useRef(speakAnswers);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    speakAnswersRef.current = speakAnswers;
    if (!speakAnswers && canSpeak) window.speechSynthesis.cancel();
  }, [speakAnswers, canSpeak]);

  // Stop any request, recognition, or speech still running when the panel closes.
  useEffect(() => {
    return () => {
      abortRef.current?.abort();
      recognitionRef.current?.abort();
      if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    };
  }, []);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight });
  }, [messages]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  function speak(text: string) {
    if (!canSpeak || !speakAnswersRef.current || !text.trim()) return;
    const utterance = new SpeechSynthesisUtterance(text.trim());
    utterance.lang = speechLang;
    window.speechSynthesis.speak(utterance);
  }

  function replaceLastAnswer(content: string, failed = false) {
    setMessages((current) => [...current.slice(0, -1), { role: "assistant", content, failed }]);
  }

  async function ask(text: string) {
    const question = text.trim();
    if (!question || busy) return;

    if (canSpeak) window.speechSynthesis.cancel();
    const history: Message[] = [
      ...messages.filter((message) => !message.failed),
      { role: "user", content: question },
    ];
    setMessages([...history, { role: "assistant", content: "" }]);
    setInput("");
    setBusy(true);

    const controller = new AbortController();
    abortRef.current = controller;

    try {
      // fetch only rejects when the API can't be reached at all (offline,
      // blocked by CORS); any answer from the API resolves with a status.
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: history.slice(-HISTORY_LIMIT).map(({ role, content }) => ({ role, content })),
        }),
        signal: controller.signal,
      }).catch(() => {
        throw new ChatError("network");
      });
      if (!response.ok || !response.body) {
        throw new ChatError(ERROR_KIND_BY_STATUS[response.status] ?? "unavailable");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let answer = "";
      // Streamed text not spoken yet; each complete sentence is read aloud
      // as soon as it arrives instead of waiting for the whole answer.
      let unspoken = "";

      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        answer += chunk;
        unspoken += chunk;
        replaceLastAnswer(answer);

        let sentence = unspoken.match(SENTENCE_PATTERN);
        while (sentence) {
          speak(sentence[0]);
          unspoken = unspoken.slice(sentence[0].length);
          sentence = unspoken.match(SENTENCE_PATTERN);
        }
      }
      // The API answers 200 with an empty stream when the model call fails.
      if (!answer.trim()) throw new ChatError("unavailable");
      speak(unspoken);
    } catch (error) {
      if (controller.signal.aborted) return;
      // Anything else (e.g. the connection dropping mid-answer) is a network failure.
      const kind = error instanceof ChatError ? error.kind : "network";
      replaceLastAnswer(t(`errors.${kind}`), true);
    } finally {
      if (abortRef.current === controller) setBusy(false);
    }
  }

  function toggleListening() {
    if (!RecognitionCtor) return;
    if (listening) {
      recognitionRef.current?.stop();
      return;
    }

    if (canSpeak) window.speechSynthesis.cancel();
    const recognition = new RecognitionCtor();
    recognition.lang = speechLang;
    recognition.interimResults = true;

    let transcript = "";
    recognition.onresult = (event) => {
      transcript = Array.from(event.results, (result) => result[0].transcript).join("");
      setInput(transcript);
    };
    recognition.onerror = () => setListening(false);
    // Recognition ends on its own after a pause; send what was heard.
    recognition.onend = () => {
      setListening(false);
      recognitionRef.current = null;
      void ask(transcript);
    };

    recognitionRef.current = recognition;
    setListening(true);
    recognition.start();
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    void ask(input);
  }

  const lastMessage = messages[messages.length - 1];

  return (
    <section className={styles.panel} aria-label={t("title")}>
      <header className={styles.header}>
        <div>
          <h2 className={styles.title}>{t("title")}</h2>
          <p className={styles.subtitle}>{t("subtitle")}</p>
        </div>
        {canSpeak && (
          <button
            type="button"
            className={styles.iconButton}
            onClick={() => setSpeakAnswers((value) => !value)}
            aria-label={speakAnswers ? t("muteVoice") : t("unmuteVoice")}
            aria-pressed={speakAnswers}
            title={speakAnswers ? t("muteVoice") : t("unmuteVoice")}
          >
            {speakAnswers ? icons.volume : icons.volumeOff}
          </button>
        )}
      </header>

      <div className={styles.messages} ref={listRef} aria-live="polite">
        <p className={`${styles.bubble} ${styles.assistant}`}>{t("greeting")}</p>

        {messages.length === 0 && (
          <div className={styles.suggestions}>
            {(t.raw("suggestions") as string[]).map((suggestion) => (
              <button
                key={suggestion}
                type="button"
                className={styles.suggestion}
                onClick={() => void ask(suggestion)}
              >
                {suggestion}
              </button>
            ))}
          </div>
        )}

        {messages.map((message, index) =>
          message.content ? (
            <p
              key={index}
              className={`${styles.bubble} ${styles[message.role]} ${message.failed ? styles.failed : ""}`}
            >
              {message.content}
            </p>
          ) : null,
        )}

        {busy && lastMessage?.content === "" && (
          <p className={`${styles.bubble} ${styles.assistant} ${styles.typing}`} aria-hidden>
            <span />
            <span />
            <span />
          </p>
        )}
      </div>

      <form className={styles.composer} onSubmit={handleSubmit}>
        {RecognitionCtor && (
          <button
            type="button"
            className={`${styles.micButton} ${listening ? styles.listening : ""}`}
            onClick={toggleListening}
            disabled={busy}
            aria-label={listening ? t("stopListening") : t("startListening")}
            aria-pressed={listening}
          >
            {icons.mic}
          </button>
        )}
        <input
          className={styles.input}
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder={listening ? t("listening") : t("placeholder")}
          aria-label={t("placeholder")}
          disabled={listening}
          maxLength={500}
        />
        <button
          type="submit"
          className={styles.sendButton}
          disabled={busy || listening || !input.trim()}
          aria-label={t("send")}
        >
          {icons.send}
        </button>
      </form>
      <p className={styles.disclaimer}>{t("disclaimer")}</p>
    </section>
  );
}
