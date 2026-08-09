<script lang="ts">
  import { Badge, Header, ThemeToggle } from "../svelte/index.js";
</script>

<div class="overflow-hidden rounded-md border border-line">
  <Header class="static">
    <span class="font-display font-semibold">Foundation UI</span>
    <nav class="flex items-center gap-4 text-sm text-ink-secondary">
      <span>Overview</span>
      <span>Tokens</span>
      <Badge tone="aurora">v1</Badge>
      <ThemeToggle />
    </nav>
  </Header>
  <div class="h-16 bg-surface"></div>
</div>
