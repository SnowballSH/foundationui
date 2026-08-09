import { readFileSync } from "node:fs";
import { parseTokens } from "./tokens-parse.ts";

const COLOR_ROLES = [
  "--fui-surface",
  "--fui-ink",
  "--fui-accent",
  "--fui-aurora",
  "--fui-line",
  "--fui-glass",
];

export function checkTokenParity(): string[] {
  const tokens = parseTokens(
    readFileSync(new URL("../tokens.css", import.meta.url), "utf8"),
  );
  const problems: string[] = [];
  for (const [name, v] of tokens) {
    const isColorRole = COLOR_ROLES.some((r) => name.startsWith(r));
    if (isColorRole && v.dark === undefined)
      problems.push(`${name}: no dark-tier override`);
    if (v.dark !== undefined && v.systemDark !== v.dark) {
      problems.push(
        `${name}: prefers-color-scheme fallback (${v.systemDark ?? "missing"}) != dark block (${v.dark})`,
      );
    }
  }
  return problems;
}

if (import.meta.main) {
  const problems = checkTokenParity();
  for (const p of problems) console.error(`FAIL token parity: ${p}`);
  process.exit(problems.length > 0 ? 1 : 0);
}
