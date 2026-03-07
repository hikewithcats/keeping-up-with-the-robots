import Link from "next/link";
import { launchEvent } from "@/content/event";

export function EventCard() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-[800px]">
        <div className="rounded-lg border border-white/8 bg-[var(--color-bg-card)] p-8 md:p-10">
          <span className="inline-block rounded-full bg-[var(--color-accent)] px-3 py-1 text-xs font-semibold uppercase tracking-wider">
            Upcoming Event
          </span>

          <h2 className="mt-5 text-2xl font-bold md:text-3xl">
            {launchEvent.title}
          </h2>

          <div className="mt-4 flex flex-col gap-2 text-sm text-[var(--color-text-muted)]">
            <div className="flex items-center gap-2">
              <svg
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <path d="M16 2v4M8 2v4M3 10h18" />
              </svg>
              {launchEvent.date} &middot; {launchEvent.time}
            </div>
            <div className="flex items-center gap-2">
              <svg
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {launchEvent.location}
            </div>
          </div>

          <p className="mt-4 text-[var(--color-text-muted)]">
            {launchEvent.description}
          </p>

          <Link
            href="/events/launch-meetup"
            className="mt-6 inline-block rounded-md bg-[var(--color-accent)] px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-[var(--color-accent-hover)]"
          >
            See Details & RSVP
          </Link>
        </div>
      </div>
    </section>
  );
}
