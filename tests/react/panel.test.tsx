import { render, screen } from "@testing-library/react";
import { Panel } from "../../src/react/index.ts";

test("glass tier renders glass material with sharp boundary", () => {
  render(
    <Panel tier="glass" data-testid="p">
      content
    </Panel>,
  );
  const el = screen.getByTestId("p");
  expect(el.className).toContain("bg-glass-2");
  expect(el.className).toContain("backdrop-blur-glass-2");
  expect(el.className).toContain("border-line");
  expect(el.className).toContain("shadow-float-1");
  expect(el.className).toContain("rounded-md");
});

test("flat tier is opaque with no blur", () => {
  render(
    <Panel tier="flat" data-testid="p">
      content
    </Panel>,
  );
  const el = screen.getByTestId("p");
  expect(el.className).toContain("bg-surface-raised");
  expect(el.className).toContain("border-line");
  expect(el.className).not.toContain("backdrop-blur");
});
