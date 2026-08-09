import { useState } from "react";
import { Tabs } from "../react/index.js";

const items = [
  { value: "write", label: "Write" },
  { value: "preview", label: "Preview" },
  { value: "publish", label: "Publish" },
];

export default function TabsDemo() {
  const [value, setValue] = useState("write");
  return (
    <Tabs items={items} value={value} onValueChange={setValue}>
      <p className="text-ink-secondary">
        The <span className="font-medium text-ink">{value}</span> panel. Arrow
        keys move between tabs.
      </p>
    </Tabs>
  );
}
