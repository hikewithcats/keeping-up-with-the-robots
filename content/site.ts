// ============================================================
// LAUNCH CHECKLIST — edit these values before going fully live:
//
// 1. discord  → paste your Discord invite URL (e.g. "https://discord.gg/abc123")
// 2. twitter  → paste your X/Twitter profile URL (optional)
// 3. linkedin → paste your LinkedIn page URL (optional)
//
// When a value is null the site gracefully hides that link.
// When you add a real URL it automatically appears in the
// footer, community page, and about page.
// ============================================================

export const siteConfig = {
  name: "Keeping Up With The Robots",
  shortName: "KUWR",
  tagline: "Western Mass AI Builders",
  url: "https://keepingupwiththerobots.com",
  description:
    "A builder-focused AI community for Western Massachusetts. Meetups, demos, and real projects — not just AI hype.",

  // Social / community links — set to a URL string or leave null to hide
  discord: null as string | null,
  twitter: null as string | null,
  linkedin: null as string | null,
};

export const navLinks = [
  { label: "Events", href: "/events/launch-meetup" },
  { label: "Community", href: "/community" },
  { label: "About", href: "/about" },
];
