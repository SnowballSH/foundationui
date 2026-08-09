import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeToggle } from "../../src/react/index.ts";

beforeEach(() => {
  delete document.documentElement.dataset.theme;
  window.localStorage.clear();
});

test("click applies and persists the dark theme", async () => {
  const user = userEvent.setup();
  render(<ThemeToggle />);
  await user.click(screen.getByRole("button", { name: /theme/i }));
  expect(document.documentElement.dataset.theme).toBe("dark");
  expect(window.localStorage.getItem("fui-theme")).toBe("dark");
  await user.click(screen.getByRole("button", { name: /theme/i }));
  expect(document.documentElement.dataset.theme).toBe("light");
});
