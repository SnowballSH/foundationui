<script lang="ts">
  import { Button } from "../svelte/index.js";

  const variants = ["primary", "secondary", "ghost"] as const;
  const sizes = ["sm", "md", "lg"] as const;
</script>

<div class="flex flex-col gap-4">
  {#each variants as variant (variant)}
    <div class="flex flex-wrap items-center gap-3">
      {#each sizes as size (size)}
        <Button {variant} {size}>{variant} {size}</Button>
      {/each}
    </div>
  {/each}
  <div class="flex items-center gap-3">
    <Button disabled>disabled</Button>
  </div>
</div>
