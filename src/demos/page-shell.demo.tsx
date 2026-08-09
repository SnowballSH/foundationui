import { PageShell } from "../react/index.js";

export default function PageShellDemo() {
  return (
    <div className="overflow-hidden rounded-md border border-line">
      <PageShell width="prose" className="min-h-0 py-6">
        <p className="text-ink-secondary">
          A centered page column. The <code className="font-mono">prose</code>{" "}
          width caps at a comfortable reading measure;{" "}
          <code className="font-mono">site</code> is wider.
        </p>
      </PageShell>
    </div>
  );
}
