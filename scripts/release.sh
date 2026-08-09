#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."

version="${1:?usage: scripts/release.sh <semver, e.g. 0.3.0>}"
[[ "${version}" =~ ^[0-9]+\.[0-9]+\.[0-9]+$ ]] || { echo "not a semver: ${version}" >&2; exit 2; }

node - "$version" <<'EOF'
const fs = require("node:fs");
const version = process.argv[2];
const pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));
pkg.version = version;
fs.writeFileSync("package.json", JSON.stringify(pkg, null, 2) + "\n");

const tarball = `foundationui-${version}.tgz`;
const url = `https://github.com/SnowballSH/foundationui/releases/download/v${version}/${tarball}`;
const readme = fs
  .readFileSync("README.md", "utf8")
  .replace(/https:\/\/github\.com\/SnowballSH\/foundationui\/releases\/download\/v[\d.]+\/foundationui-[\d.]+\.tgz/g, url);
fs.writeFileSync("README.md", readme);

for (const fixture of ["npm-react", "pnpm-svelte", "bun-react"]) {
  const path = `fixtures/${fixture}/package.json`;
  const p = JSON.parse(fs.readFileSync(path, "utf8"));
  p.dependencies.foundationui = `file:../../${tarball}`;
  fs.writeFileSync(path, JSON.stringify(p, null, 2) + "\n");
}
EOF

bunx prettier --write package.json README.md fixtures/*/package.json >/dev/null
git add package.json README.md fixtures/*/package.json
git commit -m "Release v${version}"
git tag "v${version}"
echo "committed and tagged v${version}; push with: git push && git push origin v${version}"
