<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { panelRecipe, type PanelRecipeProps } from "../recipes/panel.js";

  let {
    tier,
    padding,
    class: className,
    children,
    ...rest
  }: HTMLAttributes<HTMLDivElement> &
    PanelRecipeProps & { class?: string } = $props();
</script>

<div class={panelRecipe({ tier, padding, className })} {...rest}>
  {@render children?.()}
</div>
