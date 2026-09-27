"use client";

import { useState, type ReactNode } from "react";
import { useTranslations } from "next-intl";
import { icons } from "@/components/icons";
import styles from "./Contact.module.scss";

export function CopyEmailButton({ email, children }: { email: string; children: ReactNode }) {
  const t = useTranslations("ui");
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={styles.card}
      title={copied ? t("copied") : t("copy")}
    >
      {children}
      <span className={styles.arrow}>{copied ? icons.check : icons.copy}</span>
      {/* Icon-only state, so announce it for screen readers. */}
      <span className={styles.srOnly} aria-live="polite">
        {copied ? t("copied") : t("copy")}
      </span>
    </button>
  );
}
