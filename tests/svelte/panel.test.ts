import { render, screen } from "@testing-library/svelte";
import { createRawSnippet } from "svelte";
import { Panel } from "../../src/svelte/index.ts";

const content = createRawSnippet(() => ({
  render: () => `<span>content</span>`,
}));

test("glass tier renders glass material with sharp boundary", () => {
  render(Panel, {
    props: { tier: "glass", "data-testid": "p", children: content },
  });
  const el = screen.getByTestId("p");
  expect(el.className).toContain("bg-glass-2");
  expect(el.className).toContain("backdrop-blur-glass-2");
  expect(el.className).toContain("border-line");
});

test("flat tier is opaque with no blur", () => {
  render(Panel, {
    props: { tier: "flat", "data-testid": "p", children: content },
  });
  const el = screen.getByTestId("p");
  expect(el.className).toContain("bg-surface-raised");
  expect(el.className).not.toContain("backdrop-blur");
});
