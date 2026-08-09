import { chromium } from "@playwright/test";

const url = process.argv[2];
if (!url) throw new Error("usage: node probe-fixture.mjs <url>");

const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto(url);
await page.waitForSelector("[data-probe]");

const style = await page.evaluate(() => {
  const el = document.querySelector("[data-probe]");
  const s = getComputedStyle(el);
  return {
    borderWidth: s.borderTopWidth,
    borderRadius: s.borderTopLeftRadius,
    background: s.backgroundColor,
  };
});
await browser.close();

const failures = [];
if (style.borderWidth !== "1px")
  failures.push(`border-width ${style.borderWidth} != 1px`);
if (style.borderRadius !== "6px")
  failures.push(`border-radius ${style.borderRadius} != 6px`);
if (
  style.background === "rgba(0, 0, 0, 0)" ||
  style.background === "transparent"
) {
  failures.push(
    `background is transparent — recipe utilities were not generated`,
  );
}

for (const f of failures) console.error(`FAIL probe: ${f}`);
if (failures.length === 0)
  console.log(`probe: recipe classes resolved (${JSON.stringify(style)})`);
process.exit(failures.length > 0 ? 1 : 0);
