import { spawnSync } from "node:child_process";
import {
  chmodSync,
  copyFileSync,
  existsSync,
  mkdirSync,
  mkdtempSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

function writeExecutable(path: string, contents: string) {
  writeFileSync(path, contents);
  chmodSync(path, 0o755);
}

test("consumer fixture preview listens on the probe address", () => {
  const tempRoot = mkdtempSync(join(tmpdir(), "foundationui-fixture-"));
  const binDir = join(tempRoot, "bin");
  const scriptDir = join(tempRoot, "scripts");
  const fixtureDir = join(tempRoot, "fixtures", "consumer");
  const readyFile = join(tempRoot, "preview-ready");
  const stoppedFile = join(tempRoot, "preview-stopped");
  const scriptPath = join(scriptDir, "run-fixture.sh");
  const vitePath = join(tempRoot, "vite");
  mkdirSync(binDir);
  mkdirSync(scriptDir);
  mkdirSync(fixtureDir, { recursive: true });

  try {
    copyFileSync(join(process.cwd(), "scripts/run-fixture.sh"), scriptPath);
    chmodSync(scriptPath, 0o755);
    writeFileSync(join(tempRoot, "foundationui-0.0.0.tgz"), "fixture");
    writeExecutable(
      vitePath,
      `#!/bin/sh
if [ "$1" = "build" ]; then
  exit 0
fi
if [ "$1" = "preview" ]; then
  shift
  while [ "$#" -gt 0 ]; do
    if [ "$1" = "--host" ]; then
      [ "$2" = "127.0.0.1" ] || exit 3
      touch "$FIXTURE_TEST_READY"
      trap 'rm -f "$FIXTURE_TEST_READY"; touch "$FIXTURE_TEST_STOPPED"; exit 0' TERM INT
      while :; do /bin/sleep 0.1; done
    fi
    shift
  done
fi
exit 1
`,
    );
    writeExecutable(
      join(binDir, "bun"),
      `#!/bin/sh
if [ "$1" = "install" ]; then
  mkdir -p node_modules/.bin node_modules/foundationui/dist
  cp "$FIXTURE_TEST_VITE" node_modules/.bin/vite
  chmod +x node_modules/.bin/vite
  touch node_modules/foundationui/tokens.css
  touch node_modules/foundationui/theme.css
  exit 0
fi
exit 2
`,
    );
    writeExecutable(join(binDir, "bunx"), "#!/bin/sh\nexit 4\n");
    writeExecutable(
      join(binDir, "curl"),
      '#!/bin/sh\ntest -f "$FIXTURE_TEST_READY"\n',
    );
    writeExecutable(
      join(binDir, "node"),
      '#!/bin/sh\ntest -f "$FIXTURE_TEST_READY"\n',
    );
    writeExecutable(join(binDir, "sleep"), "#!/bin/sh\nexit 0\n");

    const result = spawnSync("bash", [scriptPath, "consumer", "bun", "4331"], {
      cwd: tempRoot,
      encoding: "utf8",
      env: {
        ...process.env,
        FIXTURE_TEST_READY: readyFile,
        FIXTURE_TEST_STOPPED: stoppedFile,
        FIXTURE_TEST_VITE: vitePath,
        PATH: `${binDir}:${process.env.PATH ?? ""}`,
      },
      timeout: 5_000,
    });

    expect(result.error).toBeUndefined();
    expect(result.status, `${result.stdout}\n${result.stderr}`).toBe(0);
    expect(existsSync(stoppedFile)).toBe(true);
  } finally {
    rmSync(tempRoot, { recursive: true, force: true });
  }
});
