export interface PropDoc {
  name: string;
  type: string;
  default?: string;
  description: string;
  frameworks?: ("react" | "svelte")[];
}

export interface ComponentDocs {
  element?: string;
  props: PropDoc[];
}

export function variantProps(
  variants: Record<string, Record<string, unknown>>,
  defaults: Record<string, unknown>,
  descriptions: Record<string, string>,
): PropDoc[] {
  return Object.entries(variants).map(([name, values]) => {
    const keys = Object.keys(values);
    const isBoolean = keys.every((k) => k === "true" || k === "false");
    const fallback = defaults[name];
    return {
      name,
      type: isBoolean ? "boolean" : keys.map((k) => `"${k}"`).join(" | "),
      default: fallback === undefined ? undefined : String(fallback),
      description: descriptions[name] ?? "",
    };
  });
}
