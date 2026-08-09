import { spawnSync } from "node:child_process";
import {
  chmodSync,
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

test("accessibility runner starts preview in the background", () => {
  const tempDir = mkdtempSync(join(tmpdir(), "foundationui-a11y-"));
  const binDir = join(tempDir, "bin");
  const readyFile = join(tempDir, "preview-ready");
  mkdirSync(binDir);

  try {
    writeExecutable(join(binDir, "bun"), "#!/bin/sh\nexit 0\n");
    writeExecutable(
      join(binDir, "bunx"),
      `#!/bin/sh
if [ "$1" = "astro" ] && [ "$2" = "preview" ]; then
  shift 2
  if [ "$1" = "stop" ]; then
    rm -f "$A11Y_TEST_READY"
    exit 0
  fi
  for argument in "$@"; do
    if [ "$argument" = "--background" ]; then
      touch "$A11Y_TEST_READY"
      exit 0
    fi
  done
  exit 1
fi
if [ "$1" = "playwright" ] && [ "$2" = "test" ]; then
  test -f "$A11Y_TEST_READY"
  exit
fi
exit 2
`,
    );
    writeExecutable(
      join(binDir, "curl"),
      '#!/bin/sh\ntest -f "$A11Y_TEST_READY"\n',
    );
    writeExecutable(join(binDir, "sleep"), "#!/bin/sh\nexit 0\n");

    const result = spawnSync("bash", ["apps/dashboard/a11y.sh"], {
      cwd: process.cwd(),
      encoding: "utf8",
      env: {
        ...process.env,
        A11Y_TEST_READY: readyFile,
        PATH: `${binDir}:${process.env.PATH ?? ""}`,
      },
      timeout: 5_000,
    });

    expect(result.error).toBeUndefined();
    expect(result.status, `${result.stdout}\n${result.stderr}`).toBe(0);
  } finally {
    rmSync(tempDir, { recursive: true, force: true });
  }
});
