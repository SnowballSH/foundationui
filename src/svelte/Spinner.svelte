<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import {
    spinnerRecipe,
    type SpinnerRecipeProps,
  } from "../recipes/spinner.js";

  let {
    size,
    label = "Loading",
    class: className,
    ...rest
  }: HTMLAttributes<HTMLSpanElement> &
    SpinnerRecipeProps & { label?: string; class?: string } = $props();
</script>

<span role="status" {...rest}>
  <span class={spinnerRecipe({ size, className })}></span>
  <span class="sr-only">{label}</span>
</span>
