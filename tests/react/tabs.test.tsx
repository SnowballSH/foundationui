import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useState } from "react";
import { Tabs } from "../../src/react/index.ts";

const items = [
  { value: "one", label: "One" },
  { value: "two", label: "Two" },
  { value: "three", label: "Three" },
];

function Harness() {
  const [value, setValue] = useState("one");
  return (
    <Tabs items={items} value={value} onValueChange={setValue}>
      panel for {value}
    </Tabs>
  );
}

test("ArrowRight moves focus and selection to the next tab", async () => {
  const user = userEvent.setup();
  render(<Harness />);
  const first = screen.getByRole("tab", { name: "One" });
  first.focus();
  await user.keyboard("{ArrowRight}");
  const second = screen.getByRole("tab", { name: "Two" });
  expect(second).toHaveFocus();
  expect(second).toHaveAttribute("aria-selected", "true");
  expect(screen.getByRole("tabpanel")).toHaveTextContent("panel for two");
});
