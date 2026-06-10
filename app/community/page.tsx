import type { Metadata } from "next";
import Link from "next/link";
import { NewsletterForm } from "@/components/NewsletterForm";
import { SectionHeading } from "@/components/SectionHeading";
import { SignalMap } from "@/components/SignalMap";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Western Massachusetts AI Community",
  description:
    "Find the other people in Western Mass using AI. Meetups, workshops, local demos, builder spotlights, and a Pioneer Valley AI community space — coming together now.",
  alternates: { canonical: `${siteConfig.url}/community` },
};

const pieces = [
  {
    tag: "Now",
    title: "The newsletter",
    body: "The front door. Tools, prompts, workflows, and local notes — and the first place community news lands.",
  },
  {
    tag: "Soon",
    title: "Meetups",
    body: "Casual, practical gatherings around the Valley. Less conference, more conversation with people doing the work.",
  },
  {
    tag: "Soon",
    title: "Workshops",
    body: "Hands-on sessions where you leave with a working prompt, workflow, or automation — not just notes.",
  },
  {
    tag: "Soon",
    title: "Local demos",
    body: "Show-and-tell nights where local builders and operators demo what they've actually built with AI.",
  },
  {
    tag: "Soon",
    title: "Builder & operator spotlights",
    body: "Profiles of Western Mass people putting AI to work — the cafe owner, the realtor, the nonprofit operator, the indie builder.",
  },
  {
    tag: "Coming",
    title: "Discord space",
    body: "A place to swap tools, share workflows, ask questions, and find collaborators between events. Coming soon.",
  },
  {
    tag: "Coming",
    title: "Local directory",
    body: "A future directory of Western Mass people and businesses using AI — so you can find help, and be found.",
  },
];

export default function CommunityPage() {
  return (
    <>
      <section className="bg-dots border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-20">
          <div>
            <p className="kicker text-signal">▸ The_Network</p>
            <h1 className="mt-4 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl">
              Find the other people in Western Mass using AI.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-fog sm:text-lg">
              The newsletter is the front door. The community is where people
              connect, swap tools, share workflows, ask questions, find
              collaborators, and learn what others nearby are building.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/newsletter"
                className="border border-signal bg-signal px-6 py-3 font-mono text-xs font-semibold uppercase tracking-widest text-ink transition-colors hover:bg-transparent hover:text-signal"
              >
                Join the newsletter
              </Link>
              <Link
                href="/contact"
                className="border border-line px-6 py-3 font-mono text-xs font-semibold uppercase tracking-widest text-cream transition-colors hover:border-signal hover:text-signal"
              >
                Tell us what you&apos;re building
              </Link>
            </div>
          </div>
          <SignalMap className="mx-auto w-full max-w-md lg:max-w-none" />
        </div>
      </section>

      <section className="bg-cream text-ink">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading
            tone="cream"
            kicker="The_Pieces"
            title="What the community looks like."
            lead="It starts with the newsletter and grows from there. Here's the shape of it — honest labels included."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {pieces.map((p) => (
              <article
                key={p.title}
                className="border border-ink/20 bg-cream-2 p-6"
              >
                <p
                  className={`inline-block border px-2 py-0.5 font-mono text-[0.6rem] uppercase tracking-[0.2em] ${
                    p.tag === "Now"
                      ? "border-moss bg-moss text-cream"
                      : "border-ink/30 text-ash"
                  }`}
                >
                  {p.tag}
                </p>
                <h3 className="mt-3 text-lg font-bold tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ash">
                  {p.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
          <p className="kicker text-signal">▸ Step_One</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            The community starts in your inbox.
          </h2>
          <p className="mt-4 text-fog">
            Every meetup, workshop, demo night, and spotlight gets announced
            in the newsletter first.
          </p>
          <div className="mt-8 flex justify-center">
            <NewsletterForm ctaLabel="Join the newsletter" />
          </div>
        </div>
      </section>
    </>
  );
}
