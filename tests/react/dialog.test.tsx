import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useState } from "react";
import { Dialog } from "../../src/react/index.ts";

function Harness({ onDecision }: { onDecision?: (v: string) => void }) {
  const [open, setOpen] = useState(true);
  return (
    <Dialog
      open={open}
      title="Delete draft?"
      description="This cannot be undone."
      onClose={() => {
        setOpen(false);
        onDecision?.("closed");
      }}
      footer={<button onClick={() => setOpen(false)}>Cancel</button>}
    >
      <span>Are you sure?</span>
    </Dialog>
  );
}

test("open shows a modal dialog labelled by the title and description", () => {
  render(<Harness />);
  const dialog = screen.getByRole("dialog", { name: "Delete draft?" });
  expect(dialog).toHaveAccessibleDescription("This cannot be undone.");
  expect(dialog.className).toContain("bg-glass-2");
});

test("backdrop click closes the dialog and fires onClose", async () => {
  const user = userEvent.setup();
  const decisions: string[] = [];
  render(<Harness onDecision={(v) => decisions.push(v)} />);
  const dialog = screen.getByRole("dialog", { name: "Delete draft?" });
  await user.click(dialog);
  expect(dialog).not.toHaveAttribute("open");
  expect(decisions).toEqual(["closed"]);
});

test("clicks inside the panel do not close the dialog", async () => {
  const user = userEvent.setup();
  const decisions: string[] = [];
  render(<Harness onDecision={(v) => decisions.push(v)} />);
  await user.click(screen.getByText("Are you sure?"));
  expect(screen.getByRole("dialog", { name: "Delete draft?" })).toHaveAttribute(
    "open",
  );
  expect(decisions).toEqual([]);
});

test("a footer action that flips open closes the dialog", async () => {
  const user = userEvent.setup();
  render(<Harness />);
  const dialog = screen.getByRole("dialog", { name: "Delete draft?" });
  await user.click(screen.getByRole("button", { name: "Cancel" }));
  expect(dialog).not.toHaveAttribute("open");
});

test("size sm narrows the panel", () => {
  render(
    <Dialog open title="Small" size="sm">
      body
    </Dialog>,
  );
  expect(screen.getByRole("dialog", { name: "Small" }).className).toContain(
    "max-w-md",
  );
});
