import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import vm from "node:vm";
import ts from "typescript";

const source = readFileSync(new URL("../src/lib/theme.ts", import.meta.url), "utf8");
const { outputText } = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
});

function browser({ saved, readBlocked = false, writeBlocked = false } = {}) {
  const storage = new Map(saved === undefined ? [] : [["jasmine-theme", saved]]);
  const context = {
    exports: {},
    document: { documentElement: { dataset: {} } },
    window: new EventTarget(),
    Event,
    localStorage: {
      getItem(key) {
        if (readBlocked) throw new Error("Storage blocked");
        return storage.get(key) ?? null;
      },
      setItem(key, value) {
        if (writeBlocked) throw new Error("Storage blocked");
        storage.set(key, value);
      },
    },
  };
  vm.createContext(context);
  vm.runInContext(outputText, context);
  const api = context.exports;
  return {
    api,
    storage,
    root: context.document.documentElement,
    boot: () => vm.runInContext(api.THEME_BOOT_SCRIPT, context),
    storageEvent(key, newValue) {
      const event = new Event("storage");
      Object.assign(event, { key, newValue });
      context.window.dispatchEvent(event);
    },
  };
}

test("first visit and server rendering use Azael", () => {
  const { api, boot } = browser();
  boot();
  assert.equal(api.getTheme(), "azael");
  assert.equal(api.getServerTheme(), "azael");
});

for (const theme of ["original", "pastel", "azael", "berry", "vscode"]) {
  test(`restores ${theme} before hydration`, () => {
    const { api, boot, root } = browser({ saved: theme });
    boot();
    assert.equal(root.dataset.theme, theme);
    assert.equal(api.getTheme(), theme);
  });
}

test("invalid preferences and blocked storage fall back safely", () => {
  for (const options of [{ saved: "unknown" }, { saved: "mono" }, { saved: "dark" }, { readBlocked: true }]) {
    const { api, boot } = browser(options);
    assert.doesNotThrow(boot);
    assert.equal(api.getTheme(), "azael");
  }
});

test("selection updates subscribers, persists, and survives a new page load", () => {
  const { api, storage, root, boot } = browser();
  const changes = [];
  const unsubscribe = api.subscribeTheme(() => changes.push(api.getTheme()));
  for (const theme of ["original", "pastel", "azael", "berry", "vscode"]) {
    api.setTheme(theme);
    assert.equal(storage.get(api.THEME_STORAGE_KEY), theme);
    delete root.dataset.theme;
    boot();
    assert.equal(api.getTheme(), theme);
  }
  assert.deepEqual(changes, ["original", "pastel", "azael", "berry", "vscode"]);
  unsubscribe();
  api.setTheme("original");
  assert.equal(changes.length, 5);
});

test("switching still works when saving is blocked", () => {
  const { api } = browser({ writeBlocked: true });
  let changes = 0;
  const unsubscribe = api.subscribeTheme(() => changes++);
  assert.doesNotThrow(() => api.setTheme("pastel"));
  assert.equal(api.getTheme(), "pastel");
  assert.equal(changes, 1);
  unsubscribe();
});

test("cross-tab changes sync only theme preferences and clean up listeners", () => {
  const { api, storageEvent } = browser();
  let changes = 0;
  const unsubscribe = api.subscribeTheme(() => changes++);
  storageEvent("unrelated", "original");
  assert.equal(changes, 0);
  storageEvent(api.THEME_STORAGE_KEY, "pastel");
  assert.equal(api.getTheme(), "pastel");
  storageEvent(api.THEME_STORAGE_KEY, "invalid");
  assert.equal(api.getTheme(), "azael");
  storageEvent(api.THEME_STORAGE_KEY, "original");
  storageEvent(null, null);
  assert.equal(api.getTheme(), "azael");
  assert.equal(changes, 4);
  unsubscribe();
  storageEvent(api.THEME_STORAGE_KEY, "pastel");
  assert.equal(changes, 4);
  assert.equal(api.getTheme(), "azael");
});
