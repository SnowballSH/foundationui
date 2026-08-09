<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import {
    codeBlockLabelRecipe,
    codeBlockPreRecipe,
    codeBlockRecipe,
  } from "../recipes/code-block.js";

  let {
    code,
    label,
    class: className,
    ...rest
  }: Omit<HTMLAttributes<HTMLElement>, "children"> & {
    code: string;
    label?: string;
    class?: string;
  } = $props();
</script>

<figure class={codeBlockRecipe({ className })} {...rest}>
  {#if label !== undefined}
    <figcaption class={codeBlockLabelRecipe()}>{label}</figcaption>
  {/if}
  <pre class={codeBlockPreRecipe()} tabindex="0"><code>{code}</code></pre>
</figure>
