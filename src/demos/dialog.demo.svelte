<script lang="ts">
  import { Button, Dialog } from "../svelte/index.js";

  let open = $state(false);
  let outcome = $state("No decision yet.");

  function askToDelete() {
    outcome = "No decision yet.";
    open = true;
  }
</script>

<div class="flex flex-col items-start gap-3">
  <Button variant="secondary" onclick={askToDelete}>Delete draft</Button>
  <p class="text-sm text-ink-secondary">{outcome}</p>
  <Dialog
    bind:open
    title="Delete draft?"
    description="This removes the draft from your workspace."
    size="sm"
    onclose={() => {
      if (outcome === "No decision yet.") outcome = "Dismissed, draft kept.";
    }}
  >
    <p class="text-sm text-ink-secondary">
      The draft "Aurora launch notes" will be gone for good. Published posts are
      not affected.
    </p>
    {#snippet footer()}
      <Button variant="secondary" onclick={() => (open = false)}>Cancel</Button>
      <Button
        onclick={() => {
          outcome = "Draft deleted.";
          open = false;
        }}
      >
        Confirm
      </Button>
    {/snippet}
  </Dialog>
</div>
