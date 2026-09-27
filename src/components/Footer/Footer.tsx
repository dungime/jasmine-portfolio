"use client";

import styles from "./Footer.module.scss";
import { useTranslations } from "next-intl";
import { useContent } from "@/content";
import { LanguageSwitcher } from "@/components/LanguageSwitcher/LanguageSwitcher";

export function Footer() {
  const { site } = useContent();
  const t = useTranslations("ui");
  const year = new Date().getFullYear();

  return (
    <footer className={styles.wrap}>
      <div className={styles.bottom}>
        {/* The year is baked into the static HTML at build time and recomputed on
            hydration, so it may legitimately differ after New Year. */}
        <span className={styles.copyright} suppressHydrationWarning>
          © {year} {site.name}. {t("allRightsReserved")}
        </span>
        <LanguageSwitcher />
      </div>
    </footer>
  );
}
