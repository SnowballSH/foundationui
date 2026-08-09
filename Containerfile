FROM docker.io/library/node:24-bookworm@sha256:7e4b2953088599075c288871d109e23bc7a33384b96ca443a7cfb7b5c318b099 AS build
COPY --from=docker.io/oven/bun:1.3.14@sha256:d8a4c24744b290bf789d58966a6f2521fc4d8bec36ec02cead6c541147b7d550 /usr/local/bin/bun /usr/local/bin/bun
WORKDIR /build
COPY . .
RUN bun install --frozen-lockfile && bun run build
WORKDIR /build/apps/dashboard
RUN bun install --frozen-lockfile && bun run build

FROM docker.io/library/caddy:2@sha256:1172d4213087d3fc30bafc7ff2c2896180eb0c41ff7f75f315568fb36cabdcba
RUN setcap -r /usr/bin/caddy
COPY Caddyfile.container /etc/caddy/Caddyfile
COPY --from=build /build/apps/dashboard/dist /srv
EXPOSE 8080
