import type { SVGProps } from "react";

const common: SVGProps<SVGSVGElement> = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function ArrowUpRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="black"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export function PhoneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M4.5 3.5h4l2 5-2.5 1.5a11 11 0 0 0 5 5l1.5-2.5 5 2v4a2 2 0 0 1-2 2A16.5 16.5 0 0 1 2.5 5.5a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

export const techLogos: Record<string, string> = {
  react: "https://cdn.simpleicons.org/react/61DAFB",
  javascript: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/960px-JavaScript-logo.png",
  "javascript (es5)": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/960px-JavaScript-logo.png",
  "javascript (es5 + es6)": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/960px-JavaScript-logo.png",
  html: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/960px-HTML5_logo_and_wordmark.svg.png",
  html5: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/HTML5_logo_resized.svg/250px-HTML5_logo_resized.svg.png",
  css: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/500px-CSS3_logo_and_wordmark.svg.png",
  css3: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/500px-CSS3_logo_and_wordmark.svg.png",
  typescript: "https://cdn.simpleicons.org/typescript/3178C6",
  "next.js": "https://nextjs.org/favicon.ico",
  angular: "https://angularjs.org/favicon.ico",
  "angularjs 2": "https://angularjs.org/favicon.ico",
  jquery: "https://jquery.com/wp-content/themes/jquery.com/i/favicon.ico",
  bootstrap: "https://icons.getbootstrap.com/assets/img/favicons/apple-touch-icon.png",
  git: "https://github.githubassets.com/favicons/favicon.svg",
  shopify: "https://images.seeklogo.com/logo-png/27/1/shopify-logo-png_seeklogo-273895.png",
  vite: "https://vite.dev/logo-without-border.svg",
  turborepo: "https://turborepo.dev/favicon.ico",
  "ant design": "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
  "material ui": "https://mui.com/static/favicon.svg",
  "tailwind css": "https://tailwindcss.com/favicons/favicon.ico?v=4",
  swr: "https://images.seeklogo.com/logo-png/42/1/swr-logo-png_seeklogo-426744.png",
  "react query": "https://images.seeklogo.com/logo-png/43/1/react-query-logo-png_seeklogo-435661.png",
  jotai: "https://jotai.org/favicon.svg",
};

export const icons = {
  layout: (
    <svg {...common}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M3 9h18M9 21V9" />
    </svg>
  ),
  code: (
    <svg {...common}>
      <path d="m8 6-5 6 5 6M16 6l5 6-5 6" />
    </svg>
  ),
  server: (
    <svg {...common}>
      <rect x="3" y="4" width="18" height="7" rx="2" />
      <rect x="3" y="13" width="18" height="7" rx="2" />
      <path d="M7 7.5h.01M7 16.5h.01" />
    </svg>
  ),
  rocket: (
    <svg {...common}>
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  ),
  palette: (
    <svg {...common}>
      <path d="M12 2a10 10 0 1 0 0 20c1.1 0 2-.9 2-2 0-.5-.2-1-.5-1.3-.3-.4-.5-.8-.5-1.2 0-.9.7-1.5 1.5-1.5H16a4 4 0 0 0 4-4c0-5.5-4.5-10-8-10z" />
      <circle cx="7.5" cy="10.5" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="11" cy="7" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="15.5" cy="9" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  ),
  database: (
    <svg {...common}>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
      <path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
    </svg>
  ),
  graduationCap: (
    <svg {...common}>
      <path d="M2 9.5 12 5l10 4.5-10 4.5-10-4.5Z" />
      <path d="M6 11.5V16c0 1.66 2.69 3 6 3s6-1.34 6-3v-4.5" />
      <path d="M22 9.5v6" />
    </svg>
  ),
  ticket: (
    <svg {...common}>
      <path d="M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 0 0-4V8Z" />
      <path d="M13 6v2M13 11v2M13 16v2" />
    </svg>
  ),
  people: (
    <svg {...common}>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <path d="M16.5 5.2A3.2 3.2 0 0 1 17 11.5" />
      <path d="M15 14.2c2.9.6 5 2.9 5 5.8" />
    </svg>
  ),
  clock: (
    <svg {...common}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  ),
  check: (
    <svg {...common}>
      <path d="M5 13l4 4L19 7" />
    </svg>
  ),
  shield: (
    <svg {...common}>
      <path d="M12 2 4 5v6c0 5 3.5 9 8 11 4.5-2 8-6 8-11V5l-8-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  chart: (
    <svg {...common}>
      <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
    </svg>
  ),
  clipboard: (
    <svg {...common}>
      <rect x="6" y="4" width="12" height="17" rx="2" />
      <path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1" />
      <path d="M9 11h6M9 15h6" />
    </svg>
  ),
} as const;

export type IconName = keyof typeof icons;

// Fallback SVG icons for tech-stack tags that don't have a real brand logo
// (generic concepts like "REST APIs" rather than a specific product).
export const techIcons: Record<string, IconName> = {
  "rest apis": "server",
  "real-time data": "chart",
};
