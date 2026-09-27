"use client";

import { useLocale, useTranslations } from "next-intl";
import { localeLabels, locales } from "@/i18n/config";
import { useSetLocale } from "@/i18n/LocaleProvider";
import styles from "./LanguageSwitcher.module.scss";

export function LanguageSwitcher() {
  const t = useTranslations("ui");
  const currentLocale = useLocale();
  const setLocale = useSetLocale();

  return (
    <div className={styles.switcher} role="group" aria-label={t("languageSwitcherLabel")}>
      {locales.map((locale) => (
        <button
          key={locale}
          type="button"
          lang={locale}
          aria-pressed={locale === currentLocale}
          onClick={() => setLocale(locale)}
          className={`${styles.option} ${locale === currentLocale ? styles.active : ""}`}
        >
          {localeLabels[locale]}
        </button>
      ))}
    </div>
  );
}
