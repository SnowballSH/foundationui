<script lang="ts">
  import { Panel } from "../svelte/index.js";

  const tiers = ["flat", "raised", "glass"] as const;
</script>

<div class="grid gap-4 sm:grid-cols-3">
  {#each tiers as tier (tier)}
    <Panel {tier}>
      <p class="font-medium">{tier}</p>
      <p class="text-sm text-ink-secondary">Sharp boundary, floating feel.</p>
    </Panel>
  {/each}
</div>
