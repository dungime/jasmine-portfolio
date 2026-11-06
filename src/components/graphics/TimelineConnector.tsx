import type { SVGProps } from "react";

export function TimelineConnector(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 40 100" preserveAspectRatio="none" aria-hidden="true" {...props}>
      <path d="M20 0 C 38 30, 2 70, 20 100" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}
