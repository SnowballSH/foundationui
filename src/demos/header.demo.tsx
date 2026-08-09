import { Badge, Header, ThemeToggle } from "../react/index.js";

export default function HeaderDemo() {
  return (
    <div className="overflow-hidden rounded-md border border-line">
      <Header className="static">
        <span className="font-display font-semibold">Foundation UI</span>
        <nav className="flex items-center gap-4 text-sm text-ink-secondary">
          <span>Overview</span>
          <span>Tokens</span>
          <Badge tone="aurora">v1</Badge>
          <ThemeToggle />
        </nav>
      </Header>
      <div className="h-16 bg-surface" />
    </div>
  );
}
