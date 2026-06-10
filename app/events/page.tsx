import type { Metadata } from "next";
import Link from "next/link";
import { NewsletterForm } from "@/components/NewsletterForm";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "AI Workshops & Events in Western Mass",
  description:
    "Practical AI events for Western Mass businesses and builders — workshops, live demos, and local AI nights around the Pioneer Valley. Dates and venues coming soon.",
  alternates: { canonical: `${siteConfig.url}/events` },
};

const formats = [
  {
    title: "AI for Small Business Owners",
    body: "A practical walkthrough of what AI can do for a local business right now — marketing, follow-up, admin, and operations.",
  },
  {
    title: "Build Your First AI Workflow",
    body: "Hands-on: connect a form, a spreadsheet, an email, and an AI step. Leave with something running.",
  },
  {
    title: "ChatGPT & Claude for Daily Business Tasks",
    body: "Real prompts for real work — emails, proposals, summaries, social posts, and customer questions.",
  },
  {
    title: "AI Tools for Realtors & Local Salespeople",
    body: "Listings, follow-ups, neighborhood guides, and lead responses — done faster without losing the personal touch.",
  },
  {
    title: "Automating Lead Follow-Up",
    body: "Stop losing leads to slow replies. Build a follow-up system that runs while you're on the job.",
  },
  {
    title: "AI Content Systems for Local Businesses",
    body: "Turn one idea into a month of posts, emails, and flyers — with a system, not a grind.",
  },
  {
    title: "Local Builder Demo Night",
    body: "Western Mass people demoing what they've actually built — apps, automations, tools, and experiments.",
  },
];

export default function EventsPage() {
  return (
    <>
      <section className="bg-dots border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
          <p className="kicker text-signal">▸ Field_Events</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl">
            Practical AI events for Western Mass businesses and builders.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-fog sm:text-lg">
            Workshops, demos, and local AI nights — beginner-friendly but not
            basic. Live demos, real workflows, small business examples, and
            conversations with people using AI in the wild.
          </p>
          <div className="mt-8 inline-flex items-center gap-3 border border-dashed border-signal/60 bg-ink-2 px-5 py-3.5">
            <span className="blink inline-block h-2 w-2 rounded-full bg-signal" />
            <span className="font-mono text-xs uppercase tracking-widest text-signal">
              Dates &amp; venues coming soon — join the newsletter to hear
              first
            </span>
          </div>
        </div>
      </section>

      <section className="bg-cream text-ink">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading
            tone="cream"
            kicker="Event_Formats"
            title="The kind of events we're building."
            lead="No abstract lectures. Every format is designed so you leave with something you can use on Monday."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {formats.map((f, i) => (
              <article
                key={f.title}
                className="border border-ink/20 bg-cream-2 p-6"
              >
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-moss">
                  Format_{String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2.5 text-lg font-bold leading-snug tracking-tight">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ash">
                  {f.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2">
          <div>
            <SectionHeading
              kicker="Get_Involved"
              title="Want to host, speak, sponsor, or demo?"
              lead="We're looking for Western Mass venues, speakers with practical stories, sponsors who get the no-hype ethos, and builders who want to show what they've made. If that's you, say hello."
            />
            <Link
              href="/contact"
              className="mt-8 inline-block border border-signal px-6 py-3 font-mono text-xs font-semibold uppercase tracking-widest text-signal transition-colors hover:bg-signal hover:text-ink"
            >
              Get in touch
            </Link>
          </div>
          <div className="border border-line bg-ink-2 p-6 sm:p-8">
            <p className="kicker text-signal">▸ Hear_First</p>
            <h3 className="mt-3 text-xl font-bold tracking-tight">
              Event announcements land in the newsletter first.
            </h3>
            <div className="mt-6">
              <NewsletterForm ctaLabel="Notify me" microcopy={null} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
