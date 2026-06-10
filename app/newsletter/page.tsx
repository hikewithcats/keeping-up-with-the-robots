import type { Metadata } from "next";
import { NewsletterForm } from "@/components/NewsletterForm";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "The Western Mass AI Newsletter",
  description:
    "A free, practical AI newsletter for Western Mass small business owners, creators, and operators. Tools, prompts, local use cases, automations, and no-hype AI updates.",
  alternates: { canonical: `${siteConfig.url}/newsletter` },
};

const youGet = [
  {
    tag: "Tool_Radar",
    text: "One AI tool worth trying, explained in plain English — what it does, what it costs, and whether it's worth your time.",
  },
  {
    tag: "Prompt_File",
    text: "One prompt you can copy, tweak, and use the same day — for follow-ups, marketing, admin, proposals, and more.",
  },
  {
    tag: "Field_Note",
    text: "One local use case — how someone in the Valley is actually using AI in a real business or project.",
  },
  {
    tag: "Workflow",
    text: "One workflow breakdown — connecting forms, spreadsheets, email, calendars, and follow-up without a tech team.",
  },
  {
    tag: "Meetup_Note",
    text: "One local note — upcoming meetups, workshops, demos, and people worth knowing in Western Mass.",
  },
  {
    tag: "Signal_Check",
    text: "One important AI update translated into normal human language, focused on what it means for small businesses.",
  },
];

export default function NewsletterPage() {
  return (
    <>
      <section className="bg-dots border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
          <p className="kicker text-signal">▸ The_Dispatch</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl">
            The Western Mass AI newsletter for people who actually have work
            to do.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-fog sm:text-lg">
            Less hype. More workflows. One useful email at a time, written for
            people running businesses — not writing think pieces.
          </p>
          <div className="mt-8">
            <NewsletterForm
              showRole
              ctaLabel="Help me keep up"
              microcopy="One useful email at a time. No spam. No guru nonsense. Unsubscribe whenever."
            />
          </div>
        </div>
      </section>

      <section className="bg-cream text-ink">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading
            tone="cream"
            kicker="What_you_get"
            title="Six things. Every issue. That's it."
            lead="Each dispatch is short enough to read with your coffee and useful enough to act on before lunch."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {youGet.map((item) => (
              <article
                key={item.tag}
                className="border border-ink/20 bg-cream-2 p-5 shadow-[4px_4px_0_0_var(--color-ink)]"
              >
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-moss">
                  ▸ {item.tag}
                </p>
                <p className="mt-2.5 text-sm leading-relaxed">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading
            kicker="Who_its_for"
            title="Written for the Valley, not the valley."
            lead="Small business owners, realtors, contractors, wellness businesses, restaurants, creators, freelancers, nonprofits, students, and founders across Western Mass — Amherst, Northampton, Easthampton, Hadley, Greenfield, Holyoke, Springfield, Belchertown, and the towns in between. If you're curious about AI but allergic to hype, you're the reader."
          />
          <div className="mt-10 border border-line bg-ink-2 p-6 sm:p-8">
            <p className="kicker text-signal">▸ The_Promise</p>
            <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-fog">
              <li>✓ Free, and stays free.</li>
              <li>✓ Plain English. No jargon walls.</li>
              <li>✓ Local examples over abstract takes.</li>
              <li>✗ No spam, no selling your email, no fake urgency.</li>
              <li>✗ No &ldquo;unlock the power of AI&rdquo; nonsense.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-cream text-ink">
        <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
          <p className="kicker text-moss">▸ Ready</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Get the next dispatch.
          </h2>
          <div className="mt-8 flex justify-center">
            <NewsletterForm
              variant="cream"
              ctaLabel="Join the newsletter"
              microcopy="Free. Local. Practical. No hype."
            />
          </div>
        </div>
      </section>
    </>
  );
}
