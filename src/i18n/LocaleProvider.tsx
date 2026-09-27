"use client";

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import en from "../../messages/en.json";
import vi from "../../messages/vi.json";
import { LOCALE_STORAGE_KEY, defaultLocale, isLocale, locales, type Locale } from "./config";

const messages: Record<Locale, typeof en> = { en, vi };

const SetLocaleContext = createContext<(locale: Locale) => void>(() => {});

/** Switches the whole page to another locale in place — no navigation or reload. */
export function useSetLocale() {
  return useContext(SetLocaleContext);
}

function readStoredLocale(): Locale | null {
  try {
    const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
    return isLocale(stored) ? stored : null;
  } catch {
    return null;
  }
}

/**
 * Holds the current locale in client state. The static HTML is always
 * rendered in the default locale; a stored choice is applied right after
 * hydration (LOCALE_BOOT_SCRIPT hides the page until then, so there's no
 * flash of the default language).
 */
export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  useEffect(() => {
    const stored = readStoredLocale();
    // Syncing from localStorage, which isn't readable during the static render.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (stored) setLocaleState(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.classList.remove(LOCALE_PENDING_CLASS);
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      localStorage.setItem(LOCALE_STORAGE_KEY, next);
    } catch {
      // Storage unavailable (private mode etc.) — the switch still applies for this visit.
    }
  }, []);

  return (
    <SetLocaleContext.Provider value={setLocale}>
      <NextIntlClientProvider locale={locale} messages={messages[locale]} timeZone="Asia/Ho_Chi_Minh">
        {children}
      </NextIntlClientProvider>
    </SetLocaleContext.Provider>
  );
}

const LOCALE_PENDING_CLASS = "locale-pending";

/**
 * Inline <head> script: if a non-default locale is stored, set <html lang>
 * (so the Vietnamese font applies) and hide the page until LocaleProvider has
 * re-rendered in that locale. Falls back to showing the page after 2s.
 */
export const LOCALE_BOOT_SCRIPT = `try{var l=localStorage.getItem(${JSON.stringify(
  LOCALE_STORAGE_KEY
)});if(l&&l!==${JSON.stringify(defaultLocale)}&&${JSON.stringify(
  locales
)}.indexOf(l)>-1){var d=document.documentElement;d.lang=l;d.classList.add(${JSON.stringify(
  LOCALE_PENDING_CLASS
)});setTimeout(function(){d.classList.remove(${JSON.stringify(LOCALE_PENDING_CLASS)})},2000)}}catch(e){}`;
