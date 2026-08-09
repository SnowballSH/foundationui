import { Badge } from "../react/index.js";

export default function BadgeDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Badge tone="accent">accent</Badge>
      <Badge tone="aurora">aurora</Badge>
      <Badge tone="neutral">neutral</Badge>
    </div>
  );
}
