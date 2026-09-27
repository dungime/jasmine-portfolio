import { useLocale } from "next-intl";
import type { Locale } from "@/i18n/config";
import * as en from "./en";
import * as vi from "./vi";

export type SiteContent = typeof en;

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
