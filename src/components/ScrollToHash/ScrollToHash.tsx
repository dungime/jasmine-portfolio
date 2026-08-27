"use client";

import { useEffect } from "react";
import { NAV_OFFSET } from "@/lib/nav-offset";

export function ScrollToHash() {
  useEffect(() => {
    if (!window.location.hash) return;

    const scrollToTarget = () => {
      const target = document.querySelector(window.location.hash);
      if (!target) return;

      const top = target.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
      window.scrollTo({ top, behavior: "auto" });
    };

    scrollToTarget();
    document.fonts?.ready.then(scrollToTarget);
    window.addEventListener("load", scrollToTarget);

    return () => window.removeEventListener("load", scrollToTarget);
  }, []);

  return null;
}
