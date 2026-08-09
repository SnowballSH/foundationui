import { render, screen } from "@testing-library/react";
import { Button } from "../../src/react/index.ts";

test("renders variants with recipe classes", () => {
  render(
    <Button variant="primary" size="md">
      Save
    </Button>,
  );
  const b = screen.getByRole("button", { name: "Save" });
  expect(b.className).toContain("bg-accent");
  expect(b).not.toBeDisabled();
});

test("secondary variant renders glass classes and merges custom class", () => {
  render(
    <Button variant="secondary" size="sm" className="custom-extra">
      Ghostly
    </Button>,
  );
  const b = screen.getByRole("button", { name: "Ghostly" });
  expect(b.className).toContain("bg-glass-1");
  expect(b.className).toContain("custom-extra");
});
