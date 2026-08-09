<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { footerInnerRecipe, footerRecipe } from "../recipes/footer.js";

  let {
    class: className,
    children,
    ...rest
  }: HTMLAttributes<HTMLElement> & { class?: string } = $props();
</script>

<footer class={footerRecipe({ className })} {...rest}>
  <div class={footerInnerRecipe()}>
    {@render children?.()}
  </div>
</footer>
