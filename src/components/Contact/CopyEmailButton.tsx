"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import styles from "./Contact.module.scss";

export function CopyEmailButton({ label, email }: { label: string; email: string }) {
  const t = useTranslations("ui");
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button type="button" onClick={handleCopy} className={styles.card}>
      {label}
      <span className={styles.arrow}>{copied ? t("copied") : t("copy")}</span>
    </button>
  );
}
