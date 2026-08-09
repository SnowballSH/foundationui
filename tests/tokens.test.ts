import { readFileSync } from "node:fs";
import { parseTokens } from "../scripts/tokens-parse.ts";

const css = readFileSync("tokens.css", "utf8");

test("every color-role token has a dark override", () => {
  const roles = [
    "--fui-surface",
    "--fui-ink",
    "--fui-accent",
    "--fui-aurora",
    "--fui-line",
    "--fui-glass",
  ];
  for (const [name, v] of parseTokens(css)) {
    if (roles.some((r) => name.startsWith(r)))
      expect(v.dark, name).toBeDefined();
  }
});

test("dark base surface is not pure black", () => {
  expect(parseTokens(css).get("--fui-surface-base")!.dark).not.toMatch(
    /#000(000)?\b/,
  );
});

test("system fallback block matches the explicit dark block", () => {
  const tokens = parseTokens(css);
  for (const [name, v] of tokens) {
    if (v.dark !== undefined) expect(v.systemDark, name).toBe(v.dark);
  }
});
