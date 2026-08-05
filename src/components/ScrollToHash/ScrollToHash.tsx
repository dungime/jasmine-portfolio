"use client";

import { useEffect } from "react";

export function ScrollToHash() {
  useEffect(() => {
    if (!window.location.hash) return;

    const scrollToTarget = () => {
      document.querySelector(window.location.hash)?.scrollIntoView({ behavior: "auto" });
    };

    scrollToTarget();
    document.fonts?.ready.then(scrollToTarget);
    window.addEventListener("load", scrollToTarget);

    return () => window.removeEventListener("load", scrollToTarget);
  }, []);

  return null;
}
