"use client";

import { useEffect } from "react";

export function ScrollToHash() {
  useEffect(() => {
    if (!window.location.hash) return;

    document.querySelector(window.location.hash)?.scrollIntoView({ behavior: "auto" });
  }, []);

  return null;
}
