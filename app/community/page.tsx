import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/content/site";
import { PageHeader } from "@/components/PageHeader";
import { CommunityValues } from "@/components/CommunityValues";
import { NewsletterForm } from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Community",
  description:
    "Join the Western Mass AI Builders community. Connect with developers, founders, and indie hackers building with AI in the Pioneer Valley.",
  alternates: {
    canonical: "https://keepingupwiththerobots.com/community",
  },
  openGraph: {
    title: "Community — Keeping Up With The Robots",
    description:
      "Connect with developers, founders, and indie hackers building with AI in the Pioneer Valley.",
    url: "https://keepingupwiththerobots.com/community",
  },
};

export default function CommunityPage() {
  return (
    <>
      <PageHeader
        title="Join the Community"
        subtitle="This is where Western Mass AI builders connect between meetups."
      />

      <div className="px-6 pb-24">
        <div className="mx-auto max-w-[1200px] space-y-24">
          {/* Discord */}
          <section>
            <div className="rounded-lg border border-white/8 bg-[var(--color-bg-card)] p-8 md:p-10">
              <h2 className="text-2xl font-bold">Join the Discord</h2>
              <p className="mt-3 max-w-[600px] text-[var(--color-text-muted)]">
                This is where Western Mass AI builders hang out between meetups.
                Share what you&apos;re building, get feedback, find collaborators,
                and stay in the loop on events.
              </p>
              {siteConfig.discord ? (
                <a
                  href={siteConfig.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block rounded-md bg-[#5865F2] px-6 py-3 text-sm font-semibold transition-opacity hover:opacity-90"
                >
                  Join Discord Server
                </a>
              ) : (
                <p className="mt-6 text-sm text-[var(--color-text-muted)] italic">
                  Discord server launching soon — subscribe below to get the
                  invite link as soon as it&apos;s live.
                </p>
              )}
            </div>
          </section>

          {/* What to expect */}
          <section>
            <h2 className="text-2xl font-bold">What to Expect</h2>
            <p className="mt-3 max-w-[600px] text-[var(--color-text-muted)] leading-relaxed">
              We share what we&apos;re building, help each other debug, and stay
              current on AI tools. This is a builder-focused community — no AI
              hype, no hot takes, just people making real things with AI.
            </p>
          </section>

          {/* Values */}
          <section>
            <h2 className="mb-6 text-2xl font-bold">Community Values</h2>
            <CommunityValues />
          </section>

          {/* Ecosystem */}
          <section>
            <h2 className="text-2xl font-bold">Ecosystem</h2>
            <p className="mt-3 max-w-[600px] text-[var(--color-text-muted)] leading-relaxed">
              We&apos;re connected to the broader Pioneer Valley tech community,
              including UMass Amherst, Valley Venture Mentors, and the local
              developer and maker ecosystem. Western Mass has deep technical
              talent — we&apos;re helping build the connective tissue for AI
              builders in the region.
            </p>
          </section>

          {/* Builder Directory fake door */}
          <section>
            <div className="rounded-lg border border-white/8 bg-[var(--color-bg-card)] p-8">
              <h2 className="text-xl font-bold">Builder Directory</h2>
              <p className="mt-3 text-[var(--color-text-muted)]">
                Builder directory launching soon. Want to be featured?{" "}
                {siteConfig.discord ? (
                  <>
                    <a
                      href={siteConfig.discord}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--color-accent)] hover:underline"
                    >
                      Join the Discord
                    </a>{" "}
                    and introduce yourself.
                  </>
                ) : (
                  "Subscribe to the newsletter and we\u2019ll let you know when it\u2019s live."
                )}
              </p>
            </div>
          </section>

          {/* Newsletter */}
          <NewsletterForm />
        </div>
      </div>
    </>
  );
}
