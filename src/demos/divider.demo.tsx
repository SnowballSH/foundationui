import { Divider } from "../react/index.js";

export default function DividerDemo() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-ink-secondary">Above the line</p>
      <Divider />
      <div className="flex h-10 items-stretch gap-4">
        <span className="self-center text-ink-secondary">Left</span>
        <Divider orientation="vertical" />
        <span className="self-center text-ink-secondary">Right</span>
      </div>
    </div>
  );
}
