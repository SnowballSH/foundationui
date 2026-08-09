<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { proseRecipe } from "../recipes/prose.js";
  import { focusableWhenScrollable } from "../recipes/scrollable.js";

  let {
    html,
    class: className,
    ...rest
  }: Omit<HTMLAttributes<HTMLDivElement>, "children"> & {
    /**
     * Pre-rendered HTML from a trusted rendering pipeline (e.g. server-side
     * Typst HTML export). Injected verbatim so MathML and inline SVG survive —
     * never pass untrusted or user-supplied HTML.
     */
    html: string;
    class?: string;
  } = $props();

  let root = $state<HTMLDivElement>();
  $effect(() => {
    void html;
    if (root) focusableWhenScrollable(root);
  });
</script>

<div bind:this={root} class={proseRecipe({ className })} {...rest}>
  <!-- eslint-disable-next-line svelte/no-at-html-tags -- trusted pre-rendered pipeline output -->
  {@html html}
</div>
