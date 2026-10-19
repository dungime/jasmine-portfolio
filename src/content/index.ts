import { useLocale } from "next-intl";
import type { Locale } from "@/i18n/config";
// Page copy for each locale. Short interface strings (buttons, labels) live in
// messages/<locale>.json instead.
import en from "./en.json";
import vi from "./vi.json";

export type SiteContent = typeof en;

// Typed against en.json, so a section or field missing from another locale's
// file is a type error.
const contentByLocale: Record<Locale, SiteContent> = { en, vi };

export function getContent(locale: Locale): SiteContent {
  return contentByLocale[locale];
}

/**
 * Content for the locale currently selected in LocaleProvider. Client
 * Components only — it re-renders them in place when the language changes.
 */
export function useContent(): SiteContent {
  return getContent(useLocale());
}
