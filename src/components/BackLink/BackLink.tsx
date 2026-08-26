"use client";

import { useRouter } from "next/navigation";
import type { MouseEvent, ReactNode } from "react";

export function BackLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  const router = useRouter();

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    const cameFromSameSite =
      typeof document !== "undefined" &&
      document.referrer.startsWith(window.location.origin);

    if (cameFromSameSite) {
      event.preventDefault();
      router.back();
    }
  }

  return (
    <a href={href} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}
