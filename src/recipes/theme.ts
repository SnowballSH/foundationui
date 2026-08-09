export type Theme = "light" | "dark";

const CHANGE_EVENT = "fui-themechange";

export function readTheme(): Theme {
  if (typeof window === "undefined") return "light";
  const stored = window.localStorage.getItem("fui-theme");
  if (stored === "light" || stored === "dark") return stored;
  if (typeof window.matchMedia === "function") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
  return "light";
}

export function applyTheme(next: Theme): void {
  if (typeof document === "undefined") return;
  document.documentElement.dataset.theme = next;
  window.localStorage.setItem("fui-theme", next);
  window.dispatchEvent(new CustomEvent(CHANGE_EVENT));
}

export function subscribeTheme(onChange: () => void): () => void {
  if (typeof window === "undefined") return () => {};
  window.addEventListener(CHANGE_EVENT, onChange);
  return () => window.removeEventListener(CHANGE_EVENT, onChange);
}
