import { Panel } from "../react/index.js";

export default function PanelDemo() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {(["flat", "raised", "glass"] as const).map((tier) => (
        <Panel key={tier} tier={tier}>
          <p className="font-medium">{tier}</p>
          <p className="text-sm text-ink-secondary">
            Sharp boundary, floating feel.
          </p>
        </Panel>
      ))}
    </div>
  );
}
