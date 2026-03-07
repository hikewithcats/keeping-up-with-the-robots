import Link from "next/link";

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden px-6 pt-20">
      {/* Subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #F5F5F5 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative mx-auto max-w-[800px] text-center md:text-center">
        <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Build With AI.
          <br />
          <span className="text-[var(--color-accent)]">Ship With Friends.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-[600px] text-lg text-[var(--color-text-muted)] md:text-xl">
          A builder-focused AI community for Western Massachusetts. Meetups,
          demos, and real projects — not just AI hype.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/events/launch-meetup"
            className="rounded-md bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold transition-colors hover:bg-[var(--color-accent-hover)]"
          >
            See the First Meetup
          </Link>
          <Link
            href="/community"
            className="rounded-md border border-white/15 px-6 py-3 text-sm font-semibold transition-colors hover:border-white/30 hover:bg-white/5"
          >
            Join the Community
          </Link>
        </div>

        <p className="mt-8 text-sm text-[var(--color-text-muted)]">
          For developers, founders, and indie hackers building with Claude, AI
          agents, and automation tools.
        </p>
      </div>
    </section>
  );
}
