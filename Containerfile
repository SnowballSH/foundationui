FROM docker.io/library/node:24-bookworm@sha256:934240a162082fd8b8a2f90cd5114446443f1eba1c5378f6687167ca405e6584 AS build
COPY --from=docker.io/oven/bun:1.3.14@sha256:e10577f0db68676a7024391c6e5cb4b879ebd17188ab750cf10024a6d700e5c4 /usr/local/bin/bun /usr/local/bin/bun
WORKDIR /build
COPY . .
RUN bun install --frozen-lockfile && bun run build
WORKDIR /build/apps/dashboard
RUN bun install --frozen-lockfile && bun run build && rm -rf node_modules /build/node_modules

FROM docker.io/library/caddy:2@sha256:844f60b64e4724a5aa8245e019dace0d3f199f7433ce6c57676cb30a920dbad9
RUN setcap -r /usr/bin/caddy
COPY Caddyfile.container /etc/caddy/Caddyfile
COPY --from=build /build/apps/dashboard/dist /srv
EXPOSE 8080
