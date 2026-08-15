import "@testing-library/jest-dom/vitest";

if (
  typeof window !== "undefined" &&
  typeof window.localStorage?.clear !== "function"
) {
  const store = new Map<string, string>();
  const memoryStorage: Storage = {
    get length() {
      return store.size;
    },
    clear: () => store.clear(),
    getItem: (key) => store.get(key) ?? null,
    key: (index) => [...store.keys()][index] ?? null,
    removeItem: (key) => void store.delete(key),
    setItem: (key, value) => void store.set(key, String(value)),
  };
  Object.defineProperty(window, "localStorage", {
    value: memoryStorage,
    configurable: true,
  });
}

if (
  typeof window !== "undefined" &&
  typeof window.HTMLDialogElement.prototype.showModal !== "function"
) {
  window.HTMLDialogElement.prototype.showModal = function (
    this: HTMLDialogElement,
  ) {
    this.open = true;
  };
  window.HTMLDialogElement.prototype.close = function (
    this: HTMLDialogElement,
  ) {
    if (!this.open) return;
    this.open = false;
    this.dispatchEvent(new Event("close"));
  };
}
