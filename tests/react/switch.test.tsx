import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useState } from "react";
import { Switch } from "../../src/react/index.ts";

function Harness() {
  const [on, setOn] = useState(false);
  return <Switch checked={on} onCheckedChange={setOn} aria-label="Enable" />;
}

test("click flips aria-checked and calls the callback", async () => {
  const user = userEvent.setup();
  render(<Harness />);
  const sw = screen.getByRole("switch", { name: "Enable" });
  expect(sw).toHaveAttribute("aria-checked", "false");
  await user.click(sw);
  expect(sw).toHaveAttribute("aria-checked", "true");
});
