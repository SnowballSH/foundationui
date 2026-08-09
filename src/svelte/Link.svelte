<script lang="ts">
  import type { HTMLAnchorAttributes } from "svelte/elements";
  import { linkRecipe, type LinkRecipeProps } from "../recipes/link.js";

  let {
    subtle,
    external,
    class: className,
    children,
    ...rest
  }: HTMLAnchorAttributes &
    LinkRecipeProps & { class?: string; external?: boolean } = $props();

  const externalProps = $derived(
    external ? { target: "_blank", rel: "noreferrer" } : {},
  );
</script>

<a class={linkRecipe({ subtle, className })} {...externalProps} {...rest}>
  {@render children?.()}
</a>
