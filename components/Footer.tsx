import Link from "next/link";
import { siteConfig, navLinks } from "@/content/site";
import { RobotMark } from "@/components/Navbar";

export function Footer() {
  const socialLinks = [
    { label: "Discord", url: siteConfig.discord },
    { label: "X / Twitter", url: siteConfig.twitter },
    { label: "LinkedIn", url: siteConfig.linkedin },
  ].filter((l) => l.url);

  return (
    <footer className="border-t border-line bg-ink-2">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <RobotMark className="h-7 w-7" />
              <span className="font-bold tracking-tight">
                Keeping Up With The Robots
              </span>
            </div>
            <p className="kicker mt-3 text-fog">
              Western Mass AI Newsletter &amp; Community
            </p>
            <p className="mt-4 text-sm leading-relaxed text-fog">
              Tools, prompts, workflows, events, and local people figuring it
              out — from Greenfield to Springfield and everywhere in between.
            </p>
          </div>

          <div className="flex gap-16">
            <div>
              <h3 className="kicker text-signal">Explore</h3>
              <ul className="mt-4 space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-fog transition-colors hover:text-signal"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="kicker text-signal">Connect</h3>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <a
                    href={`mailto:${siteConfig.contactEmail}`}
                    className="text-sm text-fog transition-colors hover:text-signal"
                  >
                    Email us
                  </a>
                </li>
                {socialLinks.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.url!}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-fog transition-colors hover:text-signal"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
                <li>
                  <Link
                    href="/newsletter"
                    className="text-sm text-signal transition-colors hover:text-signal-soft"
                  >
                    Join the newsletter →
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 font-mono text-xs text-fog sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Keeping Up With The Robots</p>
          <p className="text-signal/80">
            Built in Western Mass for people keeping up with the robots.
          </p>
        </div>
      </div>
    </footer>
  );
}
