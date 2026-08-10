<script lang="ts">
  import { Panel } from "../svelte/index.js";

  const tiers = ["flat", "raised", "glass"] as const;
</script>

<div class="flex flex-col gap-6">
  <div class="grid gap-4 sm:grid-cols-3">
    {#each tiers as tier (tier)}
      <Panel {tier}>
        <p class="font-medium">{tier}</p>
        <p class="text-sm text-ink-secondary">Sharp boundary, floating feel.</p>
      </Panel>
    {/each}
  </div>
  <a href="#interactive" class="block no-underline">
    <Panel interactive>
      <p class="font-medium">Interactive</p>
      <p class="text-sm text-ink-secondary">
        The whole card is one link: it lifts on hover, shows a pointer, and
        rings on keyboard focus.
      </p>
    </Panel>
  </a>
</div>
