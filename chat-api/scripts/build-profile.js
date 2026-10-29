// Builds profile.json for the chat assistant: the portfolio's English content
// minus fields that only serve the UI. Run it again after editing en.json.
import { readFileSync, writeFileSync } from "node:fs";

const content = JSON.parse(
  readFileSync(new URL("../../src/content/en.json", import.meta.url), "utf8"),
);

// Keys that only matter for rendering the page.
const UI_KEYS = new Set([
  "id", "icon", "logo", "href", "nav", "badge", "highlight", "thumbnail",
  "images", "screenshots", "imageAlt", "scrollLabel", "footnote",
  "primaryCta", "secondaryCta", "contactCta", "resumeCta",
]);

function clean(value) {
  if (Array.isArray(value)) return value.map(clean);
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value)
        .filter(([key]) => !UI_KEYS.has(key))
        .map(([key, child]) => [key, clean(child)]),
    );
  }
  return typeof value === "string" ? value.replace(/\*\*(.+?)\*\*/g, "$1") : value;
}

writeFileSync(
  new URL("../profile.json", import.meta.url),
  JSON.stringify(clean(content), null, 1),
);
