<script lang="ts">
  import { Divider } from "../svelte/index.js";
</script>

<div class="flex flex-col gap-4">
  <p class="text-ink-secondary">Above the line</p>
  <Divider />
  <div class="flex h-10 items-stretch gap-4">
    <span class="self-center text-ink-secondary">Left</span>
    <Divider orientation="vertical" />
    <span class="self-center text-ink-secondary">Right</span>
  </div>
</div>
