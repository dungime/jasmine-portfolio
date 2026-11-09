export const themes = ["original", "pastel", "azael", "berry", "vscode"] as const;
export type Theme = (typeof themes)[number];
export const DEFAULT_THEME: Theme = "azael";
export const THEME_STORAGE_KEY = "jasmine-theme";
const THEME_CHANGE_EVENT = "jasmine-theme-change";

export function isTheme(value: unknown): value is Theme {
  return typeof value === "string" && themes.includes(value as Theme);
}

export function getTheme(): Theme {
  const value = document.documentElement.dataset.theme;
  return isTheme(value) ? value : DEFAULT_THEME;
}

export function getServerTheme(): Theme {
  return DEFAULT_THEME;
}

export function setTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // The selected theme still works for this visit when storage is unavailable.
  }
  window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
}

export function subscribeTheme(onChange: () => void) {
  const onStorage = (event: StorageEvent) => {
    if (event.key !== THEME_STORAGE_KEY && event.key !== null) return;
    document.documentElement.dataset.theme = isTheme(event.newValue)
      ? event.newValue
      : DEFAULT_THEME;
    onChange();
  };

  window.addEventListener(THEME_CHANGE_EVENT, onChange);
  window.addEventListener("storage", onStorage);
  return () => {
    window.removeEventListener(THEME_CHANGE_EVENT, onChange);
    window.removeEventListener("storage", onStorage);
  };
}

// Apply a saved palette before first paint; never hide content for theme loading.
export const THEME_BOOT_SCRIPT = `try{var t=localStorage.getItem(${JSON.stringify(THEME_STORAGE_KEY)});if(${JSON.stringify(themes)}.indexOf(t)>-1){document.documentElement.dataset.theme=t}}catch(e){}`;
