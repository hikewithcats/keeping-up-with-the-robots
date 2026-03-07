"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig, navLinks } from "@/content/site";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[var(--color-bg)]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-bold tracking-tight">
          {siteConfig.name}
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text-primary)]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/community"
            className="rounded-md bg-[var(--color-accent)] px-4 py-2 text-sm font-medium transition-colors hover:bg-[var(--color-accent-hover)]"
          >
            Join the Community
          </Link>
        </div>

        {/* Mobile toggle + CTA */}
        <div className="flex items-center gap-4 md:hidden">
          <Link
            href="/community"
            className="rounded-md bg-[var(--color-accent)] px-3 py-1.5 text-sm font-medium"
          >
            Join
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-[var(--color-text-muted)]"
            aria-label="Toggle menu"
          >
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {mobileOpen ? (
                <>
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="6" y1="18" x2="18" y2="6" />
                </>
              ) : (
                <>
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-white/10 px-6 pb-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text-primary)]"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
