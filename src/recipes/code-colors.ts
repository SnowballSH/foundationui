const BUCKET_VARS = {
  blue: "var(--fui-code-blue)",
  green: "var(--fui-code-green)",
  warm: "var(--fui-code-warm)",
  violet: "var(--fui-code-violet)",
  muted: "var(--fui-code-muted)",
  ink: "var(--fui-ink)",
} as const;

type Bucket = keyof typeof BUCKET_VARS;

function parseCssColor(value: string): [number, number, number] | null {
  const hex = value.match(/^#([0-9a-f]{6})$/i);
  if (hex) {
    const n = parseInt(hex[1]!, 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  }
  const rgb = value.match(/^rgba?\(\s*(\d+)[\s,]+(\d+)[\s,]+(\d+)/);
  if (rgb) return [+rgb[1]!, +rgb[2]!, +rgb[3]!];
  return null;
}

export function bucketForColor(value: string): Bucket | null {
  const rgb = parseCssColor(value.trim());
  if (!rgb) return null;
  const [r, g, b] = rgb.map((c) => c / 255) as [number, number, number];
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const lightness = (max + min) / 2;
  const delta = max - min;
  const saturation =
    delta === 0 ? 0 : delta / (1 - Math.abs(2 * lightness - 1));
  if (lightness < 0.22 || lightness > 0.93) return "ink";
  if (saturation < 0.15) return "muted";
  let hue = 0;
  if (delta > 0) {
    if (max === r) hue = 60 * (((g - b) / delta) % 6);
    else if (max === g) hue = 60 * ((b - r) / delta + 2);
    else hue = 60 * ((r - g) / delta + 4);
  }
  if (hue < 0) hue += 360;
  if (hue >= 70 && hue < 170) return "green";
  if (hue >= 170 && hue < 255) return "blue";
  if (hue >= 255 && hue < 335) return "violet";
  return "warm";
}

export function remapCodeColors(root: HTMLElement): void {
  for (const span of root.querySelectorAll<HTMLElement>("pre span[style]")) {
    const inline = span.style.color;
    if (!inline || inline.startsWith("var(")) continue;
    const bucket = bucketForColor(inline);
    if (bucket) span.style.color = BUCKET_VARS[bucket];
  }
}
