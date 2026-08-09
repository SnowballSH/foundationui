import { readFileSync } from "node:fs";
import { render, screen } from "@testing-library/react";
import { Prose } from "../../src/react/index.ts";

const fixture = readFileSync("src/demos/fixtures/typst-sample.html", "utf8");

test("styles injected server-rendered Typst HTML", () => {
  render(<Prose html={fixture} data-testid="prose" />);
  const el = screen.getByTestId("prose");
  expect(el.className).toContain("max-w-[70ch]");
  expect(el.querySelector("table")).not.toBeNull();
  expect(el.querySelector("svg")).not.toBeNull();
  expect(el.querySelector("math")).not.toBeNull();
});
