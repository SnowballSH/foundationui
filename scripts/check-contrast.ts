import { readFileSync } from "node:fs";
import { parseTokens } from "./tokens-parse.ts";
import { compositeOver, contrastRatio, parseColor } from "./color.ts";

const MIN_RATIO = 4.5;
const INKS = ["--fui-ink", "--fui-ink-secondary", "--fui-ink-muted"];
const CODE = [
  "--fui-code-blue",
  "--fui-code-green",
  "--fui-code-warm",
  "--fui-code-violet",
  "--fui-code-muted",
];
const GLASSES = ["--fui-glass-1", "--fui-glass-2", "--fui-glass-3"];
const SURFACES = ["--fui-surface-base", "--fui-surface-raised"];

const tokens = parseTokens(
  readFileSync(new URL("../tokens.css", import.meta.url), "utf8"),
);

function value(name: string, theme: "light" | "dark"): string {
  const t = tokens.get(name);
  if (!t) throw new Error(`missing token ${name}`);
  return theme === "light" ? t.light : (t.dark ?? t.light);
}

let failures = 0;
for (const theme of ["light", "dark"] as const) {
  const base = parseColor(value("--fui-surface-base", theme));
  const backgrounds = [
    ...SURFACES.map((s) => [s, parseColor(value(s, theme))] as const),
    ...GLASSES.map(
      (g) => [g, compositeOver(parseColor(value(g, theme)), base)] as const,
    ),
  ];
  const codeBackgrounds = backgrounds.filter(([name]) =>
    SURFACES.includes(name),
  );
  for (const code of CODE) {
    const fg = parseColor(value(code, theme));
    for (const [bgName, bg] of codeBackgrounds) {
      const ratio = contrastRatio(fg, bg);
      if (ratio < MIN_RATIO) {
        failures++;
        console.error(
          `FAIL ${theme}: ${code} on ${bgName} = ${ratio.toFixed(2)} < ${MIN_RATIO}`,
        );
      }
    }
  }
  for (const ink of INKS) {
    const fg = parseColor(value(ink, theme));
    for (const [bgName, bg] of backgrounds) {
      const ratio = contrastRatio(fg, bg);
      if (ratio < MIN_RATIO) {
        failures++;
        console.error(
          `FAIL ${theme}: ${ink} on ${bgName} = ${ratio.toFixed(2)} < ${MIN_RATIO}`,
        );
      }
    }
  }
}

if (failures > 0) {
  console.error(`${failures} contrast pair(s) below WCAG AA`);
  process.exit(1);
}
console.log("contrast: all ink/background pairs meet WCAG AA in both themes");
