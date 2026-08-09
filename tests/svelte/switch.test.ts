import { render, screen } from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";
import { Switch } from "../../src/svelte/index.ts";

test("click flips aria-checked and updates the bound value", async () => {
  const user = userEvent.setup();
  const changes: boolean[] = [];
  render(Switch, {
    props: {
      checked: false,
      onCheckedChange: (v: boolean) => changes.push(v),
      "aria-label": "Enable",
    },
  });
  const sw = screen.getByRole("switch", { name: "Enable" });
  expect(sw).toHaveAttribute("aria-checked", "false");
  await user.click(sw);
  expect(sw).toHaveAttribute("aria-checked", "true");
  expect(changes).toEqual([true]);
});
