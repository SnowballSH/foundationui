<script lang="ts">
  import { Link } from "../svelte/index.js";
</script>

<div class="flex flex-col gap-5">
  <p class="max-w-[60ch] text-ink">
    Inline links use the <Link href="#accent">accent style</Link> so they stay distinguishable
    inside body text. External links <Link href="https://example.com" external
      >open in a new tab</Link
    >.
  </p>
  <div class="flex items-center gap-4 border-t border-line pt-4 text-sm">
    <span class="text-ink-muted">Subtle, for chrome:</span>
    <Link href="#docs" subtle>Docs</Link>
    <Link href="#changelog" subtle>Changelog</Link>
    <Link href="#github" subtle>GitHub</Link>
  </div>
</div>
