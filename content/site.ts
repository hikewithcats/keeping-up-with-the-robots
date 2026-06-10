// ============================================================
// LAUNCH CHECKLIST — edit these values before going fully live:
//
// 1. discord  → paste your Discord invite URL when the space opens
// 2. twitter  → paste your X/Twitter profile URL (optional)
// 3. linkedin → paste your LinkedIn page URL (optional)
// 4. contactEmail → where contact-form submissions are sent
//
// When a social value is null the site gracefully hides that link.
// ============================================================

export const siteConfig = {
  name: "Keeping Up With The Robots",
  shortName: "KUWR",
  tagline: "Western Mass AI Newsletter & Community",
  url: "https://keepingupwiththerobots.com",
  description:
    "A practical local AI newsletter and community for Western Mass small business owners, creators, operators, and builders. Tools, prompts, workflows, meetups, and no-hype AI updates.",
  contactEmail: "hello@keepingupwiththerobots.com",

  // Social / community links — set to a URL string or leave null to hide
  discord: null as string | null,
  twitter: null as string | null,
  linkedin: null as string | null,
};

export const navLinks = [
  { label: "Newsletter", href: "/newsletter" },
  { label: "Community", href: "/community" },
  { label: "Events", href: "/events" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

// Towns on the signal map and sprinkled through copy
export const towns = [
  "Amherst",
  "Northampton",
  "Easthampton",
  "Hadley",
  "Greenfield",
  "Holyoke",
  "Springfield",
  "Belchertown",
  "South Hadley",
  "Deerfield",
  "Florence",
  "Shelburne Falls",
];

export const tickerPhrases = [
  "Local AI workflows",
  "Small business automations",
  "Prompts that actually work",
  "Workshops coming soon",
  "Western Mass builders",
  "No hype, just useful tools",
  "Pioneer Valley dispatches",
  "Less hype. More workflows.",
];
