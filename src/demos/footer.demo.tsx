import { Footer, Link } from "../react/index.js";

export default function FooterDemo() {
  return (
    <div className="overflow-hidden rounded-md border border-line">
      <Footer>
        <div className="flex items-center justify-between gap-4">
          <span>© 2026 SnowballSH</span>
          <Link href="https://github.com/SnowballSH" external subtle>
            GitHub
          </Link>
        </div>
      </Footer>
    </div>
  );
}
