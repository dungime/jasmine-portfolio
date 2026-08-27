"use client";

import { useEffect } from "react";
import { scrollToSection } from "@/lib/scroll-to-section";

export function ScrollToHash() {
  useEffect(() => {
    if (!window.location.hash) return;

    scrollToSection(window.location.hash.slice(1), "auto");
  }, []);

  return null;
}
