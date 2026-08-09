<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { headerInnerRecipe, headerRecipe } from "../recipes/header.js";

  let {
    class: className,
    children,
    ...rest
  }: HTMLAttributes<HTMLElement> & { class?: string } = $props();
</script>

<header class={headerRecipe({ className })} {...rest}>
  <div class={headerInnerRecipe()}>
    {@render children?.()}
  </div>
</header>
