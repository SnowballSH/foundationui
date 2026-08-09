export interface TokenValue {
  light: string;
  dark?: string;
  systemDark?: string;
}

const DECL = /(--fui-[\w-]+)\s*:\s*([^;]+);/g;

function block(css: string, opener: string): string {
  const start = css.indexOf(opener);
  if (start === -1) return "";
  let depth = 0;
  for (let i = css.indexOf("{", start); i < css.length; i++) {
    if (css[i] === "{") depth++;
    if (css[i] === "}" && --depth === 0) return css.slice(start, i + 1);
  }
  return "";
}

function declarations(src: string): Map<string, string> {
  const out = new Map<string, string>();
  for (const m of src.matchAll(DECL)) out.set(m[1]!, m[2]!.trim());
  return out;
}

export function parseTokens(css: string): Map<string, TokenValue> {
  const light = declarations(block(css, ":root {"));
  const dark = declarations(block(css, '[data-theme="dark"] {'));
  const system = declarations(block(css, ":root:not([data-theme]) {"));
  const out = new Map<string, TokenValue>();
  for (const [name, value] of light) {
    out.set(name, {
      light: value,
      dark: dark.get(name),
      systemDark: system.get(name),
    });
  }
  return out;
}
