export const locales = ["en", "vi"] as const;

export type Locale = (typeof locales)[number];

/** Rendered into the static HTML; other locales are switched to on the client. */
export const defaultLocale: Locale = "en";

/** Label shown in the language switcher, in the language itself. */
export const localeLabels: Record<Locale, string> = {
  en: "English",
  vi: "Tiếng Việt",
};

/** localStorage key holding the visitor's chosen locale. */
export const LOCALE_STORAGE_KEY = "locale";

export function isLocale(value: unknown): value is Locale {
  return locales.includes(value as Locale);
}
