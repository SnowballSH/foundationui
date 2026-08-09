import { Callout } from "../react/index.js";

export default function CalloutDemo() {
  return (
    <div className="flex flex-col">
      <Callout tone="info">Info: reads calmly in the accent hue.</Callout>
      <Callout tone="warn">
        Warning: something needs attention before publishing.
      </Callout>
      <Callout tone="aurora">
        Aurora: a highlight for good news and fresh results.
      </Callout>
    </div>
  );
}
