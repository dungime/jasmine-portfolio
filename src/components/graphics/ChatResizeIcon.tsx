import type { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement> & { expanded: boolean };

export function ChatResizeIcon({ expanded, ...props }: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d={expanded
        ? "M4 9h5V4M9 9 3 3M20 15h-5v5M15 15l6 6"
        : "M15 3h6v6M21 3l-7 7M9 21H3v-6M3 21l7-7"} />
    </svg>
  );
}
