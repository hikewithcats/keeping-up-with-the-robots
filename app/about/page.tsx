import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/content/site";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Keeping Up With The Robots — the first AI builder community in Western Mass.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About"
        subtitle="Why this community exists, who runs it, and how it was built."
      />

      <div className="px-6 pb-24">
        <div className="mx-auto max-w-[800px] space-y-20">
          {/* Mission */}
          <section>
            <h2 className="text-2xl font-bold">Mission</h2>
            <div className="mt-4 space-y-4 text-[var(--color-text-muted)] leading-relaxed">
              <p>
                Western Mass has world-class universities, a growing startup
                ecosystem, and a deep bench of technical talent. But until now,
                there was no dedicated space for AI builders to meet, share
                work, and collaborate.
              </p>
              <p>
                Keeping Up With The Robots changes that. We&apos;re building the
                first builder-focused AI community in the Pioneer Valley — for
                developers, founders, and indie hackers who are actively
                building with AI tools, not just talking about them.
              </p>
              <p>
                Monthly meetups with lightning talks and live demos. A Discord
                where builders share work-in-progress and help each other ship.
                A newsletter that highlights what our community is creating.
                Real infrastructure for real builders.
              </p>
            </div>
          </section>

          {/* About Patrick */}
          <section>
            <h2 className="text-2xl font-bold">About the Organizer</h2>
            <div className="mt-4 space-y-4 text-[var(--color-text-muted)] leading-relaxed">
              <p>
                Keeping Up With The Robots is organized by{" "}
                <span className="font-semibold text-[var(--color-text-primary)]">
                  Patrick Hourihan
                </span>
                , a builder and community organizer based in Western
                Massachusetts.
              </p>
              <p>
                Patrick works hands-on with AI tools every day, using Claude
                Code, automation workflows, and modern developer tools to build
                real projects and test new ideas. Outside of AI, he is also
                active in the local community through animal welfare and service
                work, including Belchertown Animal Control, BARC, and volunteer
                work with Dakin Humane Society.
              </p>
              <p>
                He created Keeping Up With The Robots to help build a stronger
                AI builder community in the Pioneer Valley — a place where
                developers, founders, students, and curious builders can connect
                in person, share what they are building, and learn from each
                other.
              </p>
            </div>
          </section>

          {/* Built with Claude */}
          <section>
            <div className="rounded-lg border border-[var(--color-accent)]/30 bg-[var(--color-bg-card)] p-8">
              <h2 className="text-2xl font-bold">Built with Claude Code</h2>
              <div className="mt-4 space-y-4 text-[var(--color-text-muted)] leading-relaxed">
                <p>
                  This entire site was designed, planned, and built using Claude
                  Code as part of exploring what&apos;s possible when you build
                  with AI every day.
                </p>
                <p>
                  From the project architecture to the component design to the
                  copy on this page — Claude was involved at every step. It&apos;s
                  a real example of what AI-assisted development looks like in
                  practice, and it&apos;s exactly the kind of building we
                  celebrate in this community.
                </p>
                <p>
                  We don&apos;t just talk about AI tools. We use them to build
                  real things — including this community&apos;s own
                  infrastructure.
                </p>
              </div>
            </div>
          </section>

          {/* CTAs */}
          <section>
            <h2 className="text-2xl font-bold">Get Involved</h2>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <a
                href={siteConfig.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-[#5865F2] px-6 py-3 text-center text-sm font-semibold transition-opacity hover:opacity-90"
              >
                Join Discord
              </a>
              <Link
                href="/events/launch-meetup"
                className="rounded-md bg-[var(--color-accent)] px-6 py-3 text-center text-sm font-semibold transition-colors hover:bg-[var(--color-accent-hover)]"
              >
                RSVP for the Meetup
              </Link>
              <Link
                href="/community"
                className="rounded-md border border-white/15 px-6 py-3 text-center text-sm font-semibold transition-colors hover:border-white/30 hover:bg-white/5"
              >
                Subscribe to Newsletter
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
