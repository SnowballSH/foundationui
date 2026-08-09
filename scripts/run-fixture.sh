#!/usr/bin/env bash
set -euo pipefail

dir="$1"
pm="$2"
port="${3:-4331}"
root="$(cd "$(dirname "$0")/.." && pwd)"

cd "$root"
[ -f "foundationui-0.0.0.tgz" ] || { bun run build >/dev/null; npm pack --silent >/dev/null; }

cd "fixtures/$dir"
rm -rf node_modules dist package-lock.json pnpm-lock.yaml bun.lock

case "$pm" in
  npm) npm install --no-fund --no-audit --silent; runner="npx" ;;
  pnpm) pnpm install --silent; runner="pnpm exec" ;;
  bun) bun install --silent; runner="bunx" ;;
  *) echo "unknown package manager: $pm" >&2; exit 2 ;;
esac

test -d node_modules/foundationui/dist || { echo "FAIL: dist missing from installed package" >&2; exit 1; }
test -f node_modules/foundationui/tokens.css || { echo "FAIL: tokens.css missing" >&2; exit 1; }
test -f node_modules/foundationui/theme.css || { echo "FAIL: theme.css missing" >&2; exit 1; }
test ! -e node_modules/foundationui/src || { echo "FAIL: repository src leaked into package" >&2; exit 1; }
test ! -e node_modules/foundationui/apps || { echo "FAIL: repository apps leaked into package" >&2; exit 1; }

$runner vite build --logLevel error

$runner vite preview --port "$port" --strictPort >/dev/null 2>&1 &
preview_pid=$!
trap 'kill "$preview_pid" 2>/dev/null || true' EXIT
for _ in $(seq 1 40); do
  if curl -sf -o /dev/null "http://127.0.0.1:$port/"; then break; fi
  sleep 0.25
done

node "$root/apps/dashboard/probe-fixture.mjs" "http://127.0.0.1:$port"
echo "fixture $dir ($pm): PASS"
