import type { Locale } from "./config";
import type messages from "../../messages/en.json";

// Type-checks locales and message keys (t("copy") etc.) against en.json.
declare module "next-intl" {
  interface AppConfig {
    Locale: Locale;
    Messages: typeof messages;
  }
}
