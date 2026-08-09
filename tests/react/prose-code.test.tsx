import { render, screen } from "@testing-library/react";
import { Prose } from "../../src/react/index.ts";
import { bucketForColor } from "../../src/recipes/code-colors.ts";

const html = `<pre><code data-lang="python"><span style="color:#d73a49">def</span><span style="color:#6f42c1">omega</span><span style="color:#22863a">"s"</span><span style="color:#6a737d"># c</span><span style="color:#0550ae">0.5</span></code></pre>`;

test("typst inline code colors are remapped to token buckets", () => {
  render(<Prose html={html} data-testid="p" />);
  const colors = [...screen.getByTestId("p").querySelectorAll("pre span")].map(
    (s) => (s as HTMLElement).style.color,
  );
  expect(colors).toEqual([
    "var(--fui-code-warm)",
    "var(--fui-code-violet)",
    "var(--fui-code-green)",
    "var(--fui-code-muted)",
    "var(--fui-code-blue)",
  ]);
});

test("hue bucketing is stable at the boundaries", () => {
  expect(bucketForColor("#000000")).toBe("ink");
  expect(bucketForColor("#888888")).toBe("muted");
  expect(bucketForColor("rgb(255, 140, 0)")).toBe("warm");
  expect(bucketForColor("#032f62")).toBe("ink");
  expect(bucketForColor("not-a-color")).toBeNull();
});
