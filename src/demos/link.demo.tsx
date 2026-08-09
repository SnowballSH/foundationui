import { Link } from "../react/index.js";

export default function LinkDemo() {
  return (
    <p className="max-w-[60ch] text-ink">
      Inline links come in an <Link href="#accent">accent style</Link> for
      primary references and a{" "}
      <Link href="#subtle" subtle>
        subtle style
      </Link>{" "}
      that stays quiet until hovered. External links{" "}
      <Link href="https://example.com" external>
        open in a new tab
      </Link>
      .
    </p>
  );
}
