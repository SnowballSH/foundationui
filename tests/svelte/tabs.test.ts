import { render, screen } from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";
import { Tabs } from "../../src/svelte/index.ts";

const items = [
  { value: "one", label: "One" },
  { value: "two", label: "Two" },
];

test("ArrowRight moves focus and selection to the next tab", async () => {
  const user = userEvent.setup();
  render(Tabs, { props: { items, value: "one" } });
  screen.getByRole("tab", { name: "One" }).focus();
  await user.keyboard("{ArrowRight}");
  const second = screen.getByRole("tab", { name: "Two" });
  expect(second).toHaveFocus();
  expect(second).toHaveAttribute("aria-selected", "true");
});
