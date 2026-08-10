#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

PORT=4329
bun run build >/dev/null
bunx astro preview stop >/dev/null 2>&1 || true
bunx astro preview --background --host 127.0.0.1 --port "$PORT" >/dev/null 2>&1 || true
for _ in $(seq 1 40); do
  if curl -sf -o /dev/null "http://127.0.0.1:$PORT/"; then break; fi
  sleep 0.5
done
trap 'bunx astro preview stop >/dev/null 2>&1 || true' EXIT

A11Y_BASE_URL="http://127.0.0.1:$PORT" bunx playwright test
