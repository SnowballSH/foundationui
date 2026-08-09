<script lang="ts">
  import { Callout } from "../svelte/index.js";
</script>

<div class="flex flex-col">
  <Callout tone="info">Info: reads calmly in the accent hue.</Callout>
  <Callout tone="warn"
    >Warning: something needs attention before publishing.</Callout
  >
  <Callout tone="aurora"
    >Aurora: a highlight for good news and fresh results.</Callout
  >
</div>
