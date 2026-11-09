"use client";

import { useSyncExternalStore } from "react";
import { useTranslations } from "next-intl";
import { getServerTheme, getTheme, setTheme, subscribeTheme, type Theme } from "@/lib/theme";
import styles from "./ThemeSwitcher.module.scss";

// Berry remains supported for saved preferences, but is hidden from the picker.
const visibleThemes = ["vscode", "pastel", "azael", "original"] as const satisfies readonly Theme[];

const labels = {
  original: "Original",
  pastel: "Pastel",
  azael: "Azael",
  berry: "Berry",
  vscode: "VS Code — Visual Studio Dark",
};

export function ThemeSwitcher() {
  const t = useTranslations("ui");
  const currentTheme = useSyncExternalStore(subscribeTheme, getTheme, getServerTheme);

  return (
    <div className={styles.toolbar}>
      <div className={styles.switcher} role="group" aria-label={t("themeSwitcherLabel")}>
        {visibleThemes.map((theme) => (
          <button
            key={theme}
            type="button"
            title={labels[theme]}
            aria-label={labels[theme]}
            aria-pressed={theme === currentTheme}
            onClick={() => setTheme(theme)}
            className={styles.option}
          >
            <span className={`${styles.swatch} ${styles[theme]}`} aria-hidden="true" />
          </button>
        ))}
      </div>
    </div>
  );
}
