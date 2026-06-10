"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks } from "@/content/site";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/90 backdrop-blur-md">
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6"
        aria-label="Main"
      >
        <Link
          href="/"
          className="group flex items-center gap-2.5"
          onClick={() => setMobileOpen(false)}
        >
          <RobotMark className="h-7 w-7 shrink-0" />
          <span className="leading-tight">
            <span className="block text-[0.95rem] font-bold tracking-tight">
              Keeping Up With The Robots
            </span>
            <span className="kicker block text-[0.55rem] text-fog">
              Western Mass · AI Dispatch
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-mono text-xs uppercase tracking-widest transition-colors hover:text-signal ${
                pathname === link.href ? "text-signal" : "text-fog"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/newsletter"
            className="border border-signal bg-signal px-4 py-2 font-mono text-xs font-semibold uppercase tracking-widest text-ink transition-colors hover:bg-transparent hover:text-signal"
          >
            Join free
          </Link>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center text-cream md:hidden"
          aria-expanded={mobileOpen}
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((o) => !o)}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {mobileOpen ? (
              <path d="M4 4l14 14M18 4L4 18" />
            ) : (
              <path d="M3 6h16M3 11h16M3 16h16" />
            )}
          </svg>
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-line bg-ink px-4 pb-6 pt-3 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block py-3 font-mono text-sm uppercase tracking-widest ${
                pathname === link.href ? "text-signal" : "text-fog"
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/newsletter"
            className="mt-3 block border border-signal bg-signal px-4 py-3 text-center font-mono text-sm font-semibold uppercase tracking-widest text-ink"
            onClick={() => setMobileOpen(false)}
          >
            Join the newsletter
          </Link>
        </div>
      )}
    </header>
  );
}

/* Minimal robot glyph: antenna + visor. Doubles as the brand mark. */
export function RobotMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <circle cx="16" cy="5" r="2.4" fill="var(--color-signal)" />
      <line
        x1="16"
        y1="8"
        x2="16"
        y2="11"
        stroke="var(--color-signal)"
        strokeWidth="2"
      />
      <rect
        x="6"
        y="11"
        width="20"
        height="16"
        rx="3"
        stroke="var(--color-cream)"
        strokeWidth="2"
      />
      <rect
        x="10.5"
        y="17"
        width="4"
        height="4"
        fill="var(--color-signal)"
      />
      <rect
        x="17.5"
        y="17"
        width="4"
        height="4"
        fill="var(--color-signal)"
      />
    </svg>
  );
}
