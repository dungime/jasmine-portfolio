"use client";

import { useEffect, useState } from "react";
import { ArrowUpIcon } from "@/components/graphics/ArrowUpIcon";
import styles from "./BackToTop.module.scss";

const SHOW_AFTER_PX = 480;

function handleClick() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER_PX);
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`${styles.button} ${visible ? styles.visible : ""}`}
      aria-label="Back to top"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
    >
      <ArrowUpIcon />
    </button>
  );
}
