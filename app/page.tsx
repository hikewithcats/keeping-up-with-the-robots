import type { Metadata } from "next";
import Link from "next/link";
import { NewsletterForm } from "@/components/NewsletterForm";
import { SignalMap } from "@/components/SignalMap";
import { Ticker } from "@/components/Ticker";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} | Western Mass AI Newsletter & Community`,
  description: siteConfig.description,
  alternates: { canonical: siteConfig.url },
};

const whatYouGet = [
  {
    tag: "Tool_Radar",
    title: "AI tools worth trying",
    body: "Plain-English breakdowns of tools that actually help with marketing, writing, operations, customer follow-up, research, design, websites, and admin work.",
  },
  {
    tag: "Prompt_File",
    title: "Prompts that actually help",
    body: "Simple prompts and workflows local businesses can copy, tweak, and use the same afternoon.",
  },
  {
    tag: "Field_Note",
    title: "Local AI use cases",
    body: "How people in Western Mass are using AI in real work — from content and customer service to automations and websites.",
  },
  {
    tag: "Automation",
    title: "Small business automation",
    body: "Ways to connect forms, email, spreadsheets, CRMs, calendars, invoices, and follow-up — without hiring a big tech team.",
  },
  {
    tag: "Meetup_Note",
    title: "Meetups & workshops",
    body: "Local events for people who want to learn, share what they're doing, and meet others using AI nearby.",
  },
  {
    tag: "Signal_Check",
    title: "No-hype AI news",
    body: "The AI updates that matter, translated into normal human language with a focus on small businesses.",
  },
];

const audiences = [
  "Small business owners",
  "Realtors & local salespeople",
  "Contractors & home services",
  "Wellness & health businesses",
  "Restaurants, cafes & hospitality",
  "Creators & freelancers",
  "Nonprofits & community orgs",
  "Students & local builders",
  "Founders & startup people",
  "Anyone AI-curious but overwhelmed",
];

const useCases = [
  "Write better emails and follow-ups",
  "Turn customer questions into FAQs",
  "Create social posts from one idea",
  "Summarize calls and meetings",
  "Build simple websites and landing pages",
  "Respond faster to leads",
  "Research competitors",
  "Draft proposals and estimates",
  "Create ads and flyers",
  "Organize messy notes",
  "Automate repetitive admin work",
  "Create SOPs and training docs",
  "Build internal tools",
  "Connect forms, spreadsheets, email, and calendars",
  "Analyze reviews and customer feedback",
];

const sampleIssue = [
  {
    tag: "Prompt",
    text: "Turn a messy customer voicemail into a clean follow-up email",
  },
  {
    tag: "Tool",
    text: "A simple way to create graphics without hiring a designer",
  },
  {
    tag: "Workflow",
    text: "Automatically collect website leads into a spreadsheet and draft a reply",
  },
  {
    tag: "Local idea",
    text: "How a realtor could use AI to create neighborhood guides",
  },
  {
    tag: "Meetup note",
    text: "Who's hosting, who's demoing, and where the Valley is gathering next",
  },
  {
    tag: "Signal check",
    text: "One important AI update, explained like a human wrote it",
  },
];

const eventFormats = [
  "AI for Small Business Owners",
  "Build Your First AI Workflow",
  "ChatGPT & Claude for Daily Business Tasks",
  "AI Tools for Realtors & Local Salespeople",
  "Automating Lead Follow-Up",
  "AI Content Systems for Local Businesses",
  "Local Builder Demo Night",
];

export default function HomePage() {
  return (
    <>
      {/* ── 1. Hero ──────────────────────────────────────────── */}
      <section className="bg-dots border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 pb-16 pt-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pt-20">
          <div>
            <p className="kicker text-signal">
              ▸ A local dispatch from the AI frontier
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              AI is moving fast.
              <br />
              <span className="text-signal">Western Mass</span> is keeping up.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-fog sm:text-lg">
              A practical local newsletter and community for small business
              owners, creators, operators, and builders using AI to save time,
              get customers, automate work, and stay ahead.
            </p>

            <div className="mt-8">
              <NewsletterForm showRole ctaLabel="Send me the AI dispatch" />
            </div>

            <a
              href="#covered"
              className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-fog transition-colors hover:text-signal"
            >
              See what we cover <span aria-hidden="true">↓</span>
            </a>
          </div>

          <SignalMap className="mx-auto w-full max-w-md lg:max-w-none" />
        </div>
      </section>

      <Ticker />

      {/* ── 3. What is this ─────────────────────────────────── */}
      <section className="bg-cream text-ink">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading
            tone="cream"
            index="01"
            kicker="What_is_this"
            title="A local field guide for the AI age."
            lead="Keeping Up With The Robots helps Western Mass small business owners, creators, and curious professionals figure out which AI tools are actually useful — and how people nearby are using them in real businesses, workflows, and projects."
          />
          <div className="mt-10 grid gap-px border border-cream-line bg-cream-line sm:grid-cols-3">
            {[
              ["This is not", "abstract AI news."],
              ["This is not", "just for software engineers."],
              [
                "This is",
                "practical ways to use AI in your work, right now.",
              ],
            ].map(([prefix, rest], i) => (
              <div key={rest} className="bg-cream-2 p-6">
                <p className="font-mono text-xs uppercase tracking-widest text-moss">
                  {i === 2 ? "✓" : "✗"} {prefix}
                </p>
                <p className="mt-2 text-lg font-bold leading-snug">{rest}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. What you'll get ──────────────────────────────── */}
      <section id="covered" className="border-t border-line scroll-mt-16">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading
            index="02"
            kicker="The_Dispatch"
            title="What lands in your inbox."
            lead="Every issue is built for busy people who don't have time to become AI influencers. What matters, what works, and who nearby is using it."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whatYouGet.map((card) => (
              <article
                key={card.tag}
                className="group border border-line bg-ink-2 p-6 transition-colors hover:border-signal/60"
              >
                <p className="kicker text-signal">▸ {card.tag}</p>
                <h3 className="mt-3 text-xl font-bold tracking-tight">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-fog">
                  {card.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Who it's for ─────────────────────────────────── */}
      <section className="bg-cream text-ink">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading
            tone="cream"
            index="03"
            kicker="Who_its_for"
            title="For people who run things, make things, and sell things."
            lead="You don't need to be technical. You just need to be curious about how AI can help you save time, work smarter, and connect with other people figuring it out."
          />
          <ul className="mt-10 flex flex-wrap gap-3">
            {audiences.map((a) => (
              <li
                key={a}
                className="border border-ink/25 bg-cream-2 px-4 py-2.5 font-mono text-xs uppercase tracking-wider text-ink"
              >
                {a}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 6. Use cases ────────────────────────────────────── */}
      <section className="bg-dots border-t border-line">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading
            index="04"
            kicker="Use_Cases"
            title="Not someday. Right now."
            lead="Things AI can already do for a local business — the kind of work we break down step by step in the newsletter."
          />
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((u, i) => (
              <li
                key={u}
                className="flex items-baseline gap-3 border border-line bg-ink-2 px-4 py-3.5"
              >
                <span className="font-mono text-[0.65rem] text-signal">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm text-cream">{u}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 7. Local advantage ──────────────────────────────── */}
      <section className="bg-cream text-ink">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            tone="cream"
            index="05"
            kicker="The_Local_Advantage"
            title="AI is global. Figuring it out is better locally."
            lead="There are a million AI newsletters. Most are written for Silicon Valley, investors, or engineers. This one is for Western Mass — the business owners, builders, students, creators, and community people trying to understand what actually matters here, from Amherst and Northampton to Greenfield, Holyoke, and Springfield."
          />
          <ul className="grid gap-px border border-cream-line bg-cream-line sm:grid-cols-2">
            {[
              "Local examples",
              "Local meetups",
              "Local collaborators",
              "Local workshops",
              "Local business problems",
              "Local people building useful things",
            ].map((item) => (
              <li
                key={item}
                className="bg-cream-2 px-5 py-4 text-sm font-semibold"
              >
                <span className="mr-2 text-moss">▸</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 8. Community ────────────────────────────────────── */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading
            index="06"
            kicker="The_Community"
            title="Meet other people using AI in Western Mass."
            lead="The newsletter is the front door. The community is where people connect, swap tools, share workflows, ask questions, find collaborators, and learn what others nearby are building."
          />
          <div className="mt-10 flex flex-wrap gap-3">
            {[
              "Newsletter",
              "Meetups",
              "Workshops",
              "Local demos",
              "Builder & operator spotlights",
              "Discord space — coming soon",
              "Local directory — in the works",
            ].map((item) => (
              <span
                key={item}
                className="border border-line bg-ink-2 px-4 py-2.5 font-mono text-xs uppercase tracking-wider text-fog"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
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
      </section>

      {/* ── 9. Sample issue ─────────────────────────────────── */}
      <section className="bg-cream text-ink">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading
            tone="cream"
            index="07"
            kicker="Sample_Issue"
            title="A typical issue might include:"
            lead="One tool, one prompt, one local use case, one workflow, one event note, one update that matters. Short enough to actually read."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {sampleIssue.map((item) => (
              <article
                key={item.tag}
                className="border border-ink/20 bg-cream-2 p-5 shadow-[4px_4px_0_0_var(--color-ink)] transition-transform hover:-translate-y-0.5"
              >
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-moss">
                  ▸ {item.tag}
                </p>
                <p className="mt-2.5 font-semibold leading-snug">
                  &ldquo;{item.text}&rdquo;
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. Events ──────────────────────────────────────── */}
      <section className="bg-dots border-t border-line">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading
            index="08"
            kicker="Events"
            title="Workshops, demos, and local AI nights."
            lead="Future events will focus on practical ways to use AI — not abstract lectures. Expect live demos, real workflows, small business examples, and conversations with people using AI in the wild."
          />
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {eventFormats.map((f) => (
              <li
                key={f}
                className="border border-line bg-ink-2 px-5 py-4 text-sm font-semibold"
              >
                {f}
              </li>
            ))}
            <li className="flex items-center border border-dashed border-signal/50 px-5 py-4 font-mono text-xs uppercase tracking-widest text-signal">
              Dates &amp; venues coming soon
            </li>
          </ul>
          <p className="mt-8 text-sm text-fog">
            Join the newsletter to hear about events first —{" "}
            <Link
              href="/events"
              className="text-signal underline-offset-4 hover:underline"
            >
              or see what we&apos;re planning →
            </Link>
          </p>
        </div>
      </section>

      {/* ── 11. About Patrick ───────────────────────────────── */}
      <section className="bg-cream text-ink">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
            <SectionHeading
              tone="cream"
              index="09"
              kicker="The_Human"
              title="Started by Patrick Hourihan"
            />
            <div className="space-y-4 text-base leading-relaxed text-ash lg:pt-10">
              <p>
                Keeping Up With The Robots was started by Patrick Hourihan in
                Western Massachusetts as a way to help local people keep up
                with AI without getting buried in hype.
              </p>
              <p>
                Patrick uses AI tools hands-on to build websites, apps,
                automations, content systems, and business workflows. He
                created this project because small business owners, local
                professionals, and curious builders need a practical place to
                learn what&apos;s actually useful — and a way to meet others
                nearby who are figuring it out too.
              </p>
              <p>
                Outside of this project, Patrick is involved locally through
                Belchertown Animal Control, BARC, and volunteer work with
                Dakin Humane Society.
              </p>
              <Link
                href="/about"
                className="inline-block font-mono text-xs font-semibold uppercase tracking-widest text-moss underline-offset-4 hover:underline"
              >
                More about the project →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 12. Final CTA ───────────────────────────────────── */}
      <section
        id="signup"
        className="border-t border-line bg-dots scroll-mt-16"
      >
        <div className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
          <p className="kicker text-signal">▸ Last_Call</p>
          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Don&apos;t let AI become one more thing you &ldquo;should probably
            figure out.&rdquo;
          </h2>
          <p className="mt-4 text-base leading-relaxed text-fog sm:text-lg">
            Join the local newsletter for practical tools, prompts, workflows,
            events, and examples from Western Mass.
          </p>
          <div className="mt-8 flex justify-center">
            <NewsletterForm
              ctaLabel="Join the newsletter"
              microcopy="Useful, local, and written for normal people who are busy running real things."
            />
          </div>
        </div>
      </section>
    </>
  );
}
