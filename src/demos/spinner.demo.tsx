import { Spinner } from "../react/index.js";

export default function SpinnerDemo() {
  return (
    <div className="flex items-center gap-6">
      <Spinner size="sm" />
      <Spinner size="md" />
      <span className="text-sm text-ink-secondary">
        Respects reduced motion.
      </span>
    </div>
  );
}
