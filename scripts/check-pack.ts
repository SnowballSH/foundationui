import { execFileSync } from "node:child_process";

const ALLOWED_ROOT = new Set([
  "package.json",
  "README.md",
  "LICENSE",
  "tokens.css",
  "theme.css",
]);

const out = execFileSync("npm", ["pack", "--dry-run", "--json"], {
  encoding: "utf8",
});
const files: Array<{ path: string }> = JSON.parse(out)[0].files;

const problems: string[] = [];
for (const { path } of files) {
  const ok = path.startsWith("dist/") || ALLOWED_ROOT.has(path);
  if (!ok) problems.push(`unexpected file in tarball: ${path}`);
  if (path.startsWith("src/") || path.startsWith("apps/")) {
    problems.push(`repository source leaked into tarball: ${path}`);
  }
}
for (const required of [
  "tokens.css",
  "theme.css",
  "dist/react/index.js",
  "dist/svelte/index.js",
]) {
  if (!files.some((f) => f.path === required))
    problems.push(`missing from tarball: ${required}`);
}

for (const p of problems) console.error(`FAIL pack: ${p}`);
if (problems.length === 0)
  console.log(`pack: ${files.length} files, all within the allowlist`);
process.exit(problems.length > 0 ? 1 : 0);
