import { Link } from "../react/index.js";

export default function LinkDemo() {
  return (
    <div className="flex flex-col gap-5">
      <p className="max-w-[60ch] text-ink">
        Inline links use the <Link href="#accent">accent style</Link> so they
        stay distinguishable inside body text. External links{" "}
        <Link href="https://example.com" external>
          open in a new tab
        </Link>
        .
      </p>
      <div className="flex items-center gap-4 border-t border-line pt-4 text-sm">
        <span className="text-ink-muted">Subtle, for chrome:</span>
        <Link href="#docs" subtle>
          Docs
        </Link>
        <Link href="#changelog" subtle>
          Changelog
        </Link>
        <Link href="#github" subtle>
          GitHub
        </Link>
      </div>
    </div>
  );
}
