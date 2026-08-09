<script lang="ts">
  import { Tabs } from "../svelte/index.js";

  const items = [
    { value: "write", label: "Write" },
    { value: "preview", label: "Preview" },
    { value: "publish", label: "Publish" },
  ];

  let value = $state("write");
</script>

<Tabs {items} bind:value>
  <p class="text-ink-secondary">
    The <span class="font-medium text-ink">{value}</span> panel. Arrow keys move between
    tabs.
  </p>
</Tabs>
