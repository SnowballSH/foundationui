import { render, screen } from "@testing-library/svelte";
import { createRawSnippet } from "svelte";
import { Button } from "../../src/svelte/index.ts";

const label = (text: string) =>
  createRawSnippet(() => ({ render: () => `<span>${text}</span>` }));

test("renders variants with recipe classes", async () => {
  render(Button, {
    props: { variant: "primary", size: "md", children: label("Save") },
  });
  const b = screen.getByRole("button", { name: "Save" });
  expect(b.className).toContain("bg-accent");
  expect(b).not.toBeDisabled();
});

test("secondary variant renders glass classes and merges custom class", async () => {
  render(Button, {
    props: {
      variant: "secondary",
      size: "sm",
      class: "custom-extra",
      children: label("Ghostly"),
    },
  });
  const b = screen.getByRole("button", { name: "Ghostly" });
  expect(b.className).toContain("bg-glass-1");
  expect(b.className).toContain("custom-extra");
});
