import { render, screen } from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";
import { createRawSnippet } from "svelte";
import { Dialog } from "../../src/svelte/index.ts";

const body = createRawSnippet(() => ({
  render: () => `<span>Are you sure?</span>`,
}));

test("open shows a modal dialog labelled by the title and description", () => {
  render(Dialog, {
    props: {
      open: true,
      title: "Delete draft?",
      description: "This cannot be undone.",
      children: body,
    },
  });
  const dialog = screen.getByRole("dialog", { name: "Delete draft?" });
  expect(dialog).toHaveAccessibleDescription("This cannot be undone.");
  expect(dialog.className).toContain("bg-glass-2");
});

test("backdrop click closes, syncs open, and fires onclose", async () => {
  const user = userEvent.setup();
  const closes: string[] = [];
  render(Dialog, {
    props: {
      open: true,
      title: "Delete draft?",
      onclose: () => closes.push("closed"),
      children: body,
    },
  });
  const dialog = screen.getByRole("dialog", { name: "Delete draft?" });
  await user.click(dialog);
  expect(dialog).not.toHaveAttribute("open");
  expect(closes).toEqual(["closed"]);
});

test("clicks inside the panel do not close the dialog", async () => {
  const user = userEvent.setup();
  const closes: string[] = [];
  render(Dialog, {
    props: {
      open: true,
      title: "Delete draft?",
      onclose: () => closes.push("closed"),
      children: body,
    },
  });
  await user.click(screen.getByText("Are you sure?"));
  expect(screen.getByRole("dialog", { name: "Delete draft?" })).toHaveAttribute(
    "open",
  );
  expect(closes).toEqual([]);
});

test("size sm narrows the panel", () => {
  render(Dialog, {
    props: { open: true, title: "Small", size: "sm", children: body },
  });
  expect(screen.getByRole("dialog", { name: "Small" }).className).toContain(
    "max-w-md",
  );
});
