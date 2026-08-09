import { ThemeToggle } from "../react/index.js";

export default function ThemeToggleDemo() {
  return (
    <div className="flex items-center gap-3">
      <ThemeToggle />
      <span className="text-sm text-ink-secondary">
        Toggles <code className="font-mono">data-theme</code> on the document
        and persists the choice.
      </span>
    </div>
  );
}
