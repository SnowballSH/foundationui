import { readdirSync } from "node:fs";
import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const componentSlugs = readdirSync(
  new URL("./dist/components", import.meta.url),
);
const paths = [
  "/",
  "/tokens",
  ...componentSlugs.map((slug) => `/components/${slug}/`),
];
const themes = ["light", "dark"] as const;

for (const theme of themes) {
  for (const path of paths) {
    test(`axe: ${path} [${theme}]`, async ({ page }) => {
      await page.addInitScript(
        (t) => window.localStorage.setItem("fui-theme", t),
        theme,
      );
      await page.goto(path);
      await page.waitForLoadState("networkidle");

      const results = await new AxeBuilder({ page }).analyze();

      const violations = results.violations.filter(
        (v) =>
          !(
            v.id === "aria-allowed-role" &&
            v.nodes.every((n) =>
              /sup\[role="doc-(noteref|backlink)"\]/.test(String(n.target)),
            )
          ),
      );
      expect(
        violations.map(
          (v) => `${v.id}: ${v.nodes.map((n) => n.target).join(", ")}`,
        ),
      ).toEqual([]);

      await page.setViewportSize({ width: 375, height: 812 });
      await page.waitForTimeout(100);
      const overflow = await page.evaluate(
        () =>
          document.documentElement.scrollWidth -
          document.documentElement.clientWidth,
      );
      expect(overflow, "horizontal overflow at 375px").toBeLessThanOrEqual(1);

      const unexpectedIncomplete = results.incomplete.filter(
        (i) => i.id !== "color-contrast" && i.id !== "aria-allowed-role",
      );
      for (const i of results.incomplete) {
        console.log(
          `incomplete [${theme}] ${path}: ${i.id} (${i.nodes.length} nodes)`,
        );
      }
      expect(unexpectedIncomplete.map((i) => i.id)).toEqual([]);
    });
  }
}
