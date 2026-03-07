import Link from "next/link";
import { siteConfig, navLinks } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-[var(--color-bg)]">
      <div className="mx-auto grid max-w-[1200px] gap-8 px-6 py-16 md:grid-cols-3">
        {/* Brand */}
        <div>
          <p className="font-bold">{siteConfig.name}</p>
          <p className="mt-1 text-sm text-[var(--color-text-muted)]">
            {siteConfig.tagline}
          </p>
        </div>

        {/* Nav links */}
        <div className="flex flex-col gap-2">
          <Link
            href="/"
            className="text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text-primary)]"
          >
            Home
          </Link>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text-primary)]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Social */}
        <div className="flex flex-col gap-2">
          <a
            href={siteConfig.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text-primary)]"
          >
            Discord
          </a>
          <a
            href={siteConfig.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text-primary)]"
          >
            X / Twitter
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text-primary)]"
          >
            LinkedIn
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8 px-6 py-6">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-4 text-xs text-[var(--color-text-muted)] sm:flex-row">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}</p>
          <p>
            Built with{" "}
            <span className="font-medium text-[var(--color-text-primary)]">
              Claude Code
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
