import type { Metadata } from "next";
import Link from "next/link";
import { launchEvent } from "@/content/event";
import { PageHeader } from "@/components/PageHeader";
import { AgendaTimeline } from "@/components/AgendaTimeline";
import { SpeakerCard } from "@/components/SpeakerCard";

export const metadata: Metadata = {
  title: "First Meetup — Western Mass AI Builders",
  description:
    "The first Western Mass AI Builders meetup. Lightning talks, live demos, and structured networking for developers and founders building with AI.",
  alternates: {
    canonical: "https://keepingupwiththerobots.com/events/launch-meetup",
  },
  openGraph: {
    title: "First Meetup — Western Mass AI Builders",
    description:
      "Lightning talks, live demos, and structured networking. For people who build with AI, not just talk about it.",
    url: "https://keepingupwiththerobots.com/events/launch-meetup",
  },
};

export default function LaunchMeetupPage() {
  const hasRsvpLink = launchEvent.rsvpUrl && launchEvent.rsvpUrl !== "#";

  return (
    <>
      <PageHeader
        title={launchEvent.title}
        subtitle={launchEvent.description}
      />

      <div className="px-6 pb-24">
        <div className="mx-auto max-w-[1200px] grid gap-16 lg:grid-cols-[1fr_360px]">
          {/* Main content */}
          <div className="space-y-16">
            {/* Description */}
            <section>
              <h2 className="text-xl font-bold">About This Event</h2>
              <div className="mt-4 space-y-4 text-[var(--color-text-muted)] leading-relaxed whitespace-pre-line">
                {launchEvent.longDescription}
              </div>
            </section>

            {/* Agenda */}
            <section>
              <h2 className="text-xl font-bold">Agenda</h2>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                Approximate format for a ~90-minute meetup. Exact times will be
                posted when the date is confirmed.
              </p>
              <div className="mt-4">
                <AgendaTimeline />
              </div>
            </section>

            {/* Speakers */}
            <section>
              <h2 className="text-xl font-bold">Speakers</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {launchEvent.speakers.map((s) => (
                  <SpeakerCard key={s.name + s.topic} {...s} />
                ))}
              </div>
              <div className="mt-6 rounded-lg border border-white/8 bg-[var(--color-bg-card)] p-6">
                <p className="font-medium">Speaker lineup in progress</p>
                <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                  We&apos;re finalizing lightning talk speakers for the first meetup.
                  Interested in presenting? Join the community and let us know
                  what you&apos;re building.
                </p>
                <Link
                  href="/community"
                  className="mt-4 inline-block rounded-md border border-white/15 px-4 py-2 text-sm font-medium transition-colors hover:border-white/30 hover:bg-white/5"
                >
                  Get in Touch
                </Link>
              </div>
            </section>

            {/* What to expect */}
            <section>
              <h2 className="text-xl font-bold">What to Expect</h2>
              <ul className="mt-4 space-y-3">
                {launchEvent.whatToExpect.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[var(--color-text-muted)]"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="sticky top-24 rounded-lg border border-white/8 bg-[var(--color-bg-card)] p-6">
              <h3 className="text-lg font-bold">Event Details</h3>

              <div className="mt-4 space-y-3 text-sm text-[var(--color-text-muted)]">
                <div className="flex items-center gap-2">
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <path d="M16 2v4M8 2v4M3 10h18" />
                  </svg>
                  {launchEvent.date}
                </div>
                <div className="flex items-center gap-2">
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                  {launchEvent.time}
                </div>
                <div className="flex items-center gap-2">
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {launchEvent.location}
                </div>
              </div>

              {hasRsvpLink ? (
                <a
                  href={launchEvent.rsvpUrl!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 block w-full rounded-md bg-[var(--color-accent)] py-3 text-center text-sm font-semibold transition-colors hover:bg-[var(--color-accent-hover)]"
                >
                  RSVP — It&apos;s Free
                </a>
              ) : (
                <div className="mt-6">
                  <p className="text-sm text-[var(--color-text-muted)]">
                    RSVP link coming soon. Subscribe to be the first to know
                    when registration opens.
                  </p>
                  <Link
                    href="/community"
                    className="mt-3 block w-full rounded-md bg-[var(--color-accent)] py-3 text-center text-sm font-semibold transition-colors hover:bg-[var(--color-accent-hover)]"
                  >
                    Join the List
                  </Link>
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
