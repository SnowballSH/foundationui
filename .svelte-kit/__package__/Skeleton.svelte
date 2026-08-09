<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { skeletonRecipe } from "../recipes/skeleton.js";

  let {
    class: className,
    ...rest
  }: HTMLAttributes<HTMLDivElement> & { class?: string } = $props();
</script>

<div aria-hidden="true" class={skeletonRecipe({ className })} {...rest}></div>
