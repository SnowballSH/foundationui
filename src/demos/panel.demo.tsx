import { Panel } from "../react/index.js";

const tiers = ["flat", "raised", "glass"] as const;

export default function PanelDemo() {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid gap-4 sm:grid-cols-3">
        {tiers.map((tier) => (
          <Panel key={tier} tier={tier}>
            <p className="font-medium">{tier}</p>
            <p className="text-sm text-ink-secondary">
              Sharp boundary, floating feel.
            </p>
          </Panel>
        ))}
      </div>
      <a href="#interactive" className="block no-underline">
        <Panel interactive>
          <p className="font-medium">Interactive</p>
          <p className="text-sm text-ink-secondary">
            The whole card is one link: it lifts on hover, shows a pointer, and
            rings on keyboard focus.
          </p>
        </Panel>
      </a>
    </div>
  );
}
