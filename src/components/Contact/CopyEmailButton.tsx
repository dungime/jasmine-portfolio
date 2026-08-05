"use client";

import { useState } from "react";
import styles from "./Contact.module.scss";

export function CopyEmailButton({ label, email }: { label: string; email: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button type="button" onClick={handleCopy} className={styles.card}>
      {label}
      <span className={styles.arrow}>{copied ? "Copied!" : "Copy"}</span>
    </button>
  );
}
