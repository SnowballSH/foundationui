# SnowballSH Foundation UI

The design system behind SnowballSH frontends: plain-CSS design tokens, a
Tailwind CSS v4 theme mapping, shared class-variance-authority recipes, and
paired React 19 / Svelte 5 component bindings — showcased by a static Astro
dashboard that renders every component in both frameworks and both themes.

Code is the source of truth: the dashboard is generated from the same
tokens and components it documents.

## Install

Pin a release tarball (no registry):

```json
{
  "dependencies": {
    "foundationui": "https://github.com/SnowballSH/foundationui/releases/download/v0.5.3/foundationui-0.5.3.tgz"
  }
}
```

npm, pnpm, and bun install it identically; there are no install-time
scripts. To consume an unreleased commit, clone and `npm pack`.

## Consumer wiring (Tailwind v4)

```css
@import "tailwindcss";
@import "foundationui/tokens.css";
@import "foundationui/theme.css";
@source "../node_modules/foundationui";
```

Your Tailwind build generates every utility the component recipes
reference, and the token-backed utilities (`bg-surface`, `text-ink`,
`border-line`, …) are available to your own markup.

```tsx
import { Button, Panel } from "foundationui/react";
```

```svelte
<script>
  import { Button, Panel } from "foundationui/svelte";
</script>
```

`react`/`react-dom` and `svelte` are optional peer dependencies — install
only the one your app uses.

## Development

```bash
bun install
bun run test      # vitest for both bindings
bun run parity    # every component: recipe + React + Svelte + demo pair
bun run contrast  # WCAG contrast on composited glass surfaces
bun run build     # dist/ (tsc + svelte-package)
```

The dashboard lives in `apps/dashboard` (own lockfile):

```bash
cd apps/dashboard && bun install && bun run dev
```
