<script lang="ts">
  import { Input } from "../svelte/index.js";
</script>

<div class="flex max-w-sm flex-col gap-3">
  <Input placeholder="Your name" aria-label="Your name" />
  <Input placeholder="Disabled" aria-label="Disabled" disabled />
  <Input placeholder="Invalid value" aria-label="Invalid value" invalid />
</div>
