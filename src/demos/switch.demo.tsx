import { useState } from "react";
import { Switch } from "../react/index.js";

export default function SwitchDemo() {
  const [on, setOn] = useState(true);
  return (
    <div className="flex items-center gap-4">
      <label className="flex items-center gap-2 text-ink">
        <Switch checked={on} onCheckedChange={setOn} aria-label="Snow mode" />
        Snow mode {on ? "on" : "off"}
      </label>
      <Switch checked={false} disabled aria-label="Disabled switch" />
    </div>
  );
}
