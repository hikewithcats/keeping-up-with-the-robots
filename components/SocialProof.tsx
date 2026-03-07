export function SocialProof() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-[800px] text-center">
        <blockquote className="text-xl font-medium italic text-[var(--color-text-primary)] md:text-2xl">
          &ldquo;I started this because there was no place for AI builders to
          meet in Western Mass. Now there is.&rdquo;
        </blockquote>
        <p className="mt-4 text-sm text-[var(--color-text-muted)]">
          — Patrick Hourihan, Organizer
        </p>

        <div className="mx-auto mt-12 max-w-[600px] rounded-lg border border-white/8 bg-[var(--color-bg-card)] px-6 py-4">
          <p className="text-sm text-[var(--color-text-muted)]">
            Currently organizing in the Pioneer Valley. First meetup in
            planning — subscribe to get the details first.
          </p>
        </div>

        <p className="mx-auto mt-8 max-w-[600px] text-sm text-[var(--color-text-muted)]">
          Connected to the UMass Amherst tech community, Valley Venture Mentors,
          and Pioneer Valley&apos;s developer ecosystem.
        </p>
      </div>
    </section>
  );
}
