import type { Metadata } from "next";
import Link from "next/link";
import { NewsletterForm } from "@/components/NewsletterForm";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "About — Helping Western Mass Keep Up With AI",
  description:
    "Why Keeping Up With The Robots exists: a practical, no-hype AI newsletter and community for Western Massachusetts, started by Patrick Hourihan.",
  alternates: { canonical: `${siteConfig.url}/about` },
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-dots border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
          <p className="kicker text-signal">▸ The_Mission</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl">
            Helping Western Mass keep up with AI — without the hype.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-fog sm:text-lg">
            AI is weird. We&apos;ll make it useful. This project exists so
            that the people who run things, make things, and sell things
            around here don&apos;t get left behind — or talked down to.
          </p>
        </div>
      </section>

      <section className="bg-cream text-ink">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                tone="cream"
                kicker="Why_this_exists"
                title="The gap is real."
              />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ash">
                <p>
                  AI is changing how work gets done — fast. But almost
                  everything written about it is aimed at Silicon Valley,
                  investors, or engineers. Meanwhile, the cafe owner in
                  Amherst, the contractor in Belchertown, and the nonprofit
                  operator in Greenfield are busy running real things.
                </p>
                <p>
                  They don&apos;t need another think piece. They need to know
                  which tools are worth their time, which prompts actually
                  work, and what people nearby are doing that they could do
                  too.
                </p>
              </div>
            </div>
            <div>
              <SectionHeading
                tone="cream"
                kicker="Why_local_matters"
                title="Figuring it out is better together."
              />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ash">
                <p>
                  A national newsletter can tell you what an AI tool does. A
                  local one can introduce you to the realtor in Northampton
                  who&apos;s already using it — and the workshop in the Valley
                  where you can learn it yourself.
                </p>
                <p>
                  Western Mass is full of smart, scrappy, independent people.
                  When they share what&apos;s working, everyone keeps up
                  faster.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
            <SectionHeading
              kicker="The_Human"
              title="About Patrick"
            />
            <div className="space-y-4 text-base leading-relaxed text-fog lg:pt-10">
              <p>
                Keeping Up With The Robots was started by Patrick Hourihan in
                Western Massachusetts as a way to help local people keep up
                with AI without getting buried in hype.
              </p>
              <p>
                Patrick uses AI tools hands-on to build websites, apps,
                automations, content systems, and business workflows. He
                started this project because small business owners, local
                professionals, and curious builders need a practical place to
                learn what&apos;s actually useful — and a way to meet others
                nearby who are figuring it out too. He&apos;s learning and
                testing right alongside everyone else; the newsletter is just
                where the notes get shared.
              </p>
              <p>
                Outside of this project, Patrick is involved locally through
                Belchertown Animal Control, BARC, and volunteer work with
                Dakin Humane Society.
              </p>
              <p>
                Want to say hi, share what you&apos;re building, or suggest a
                local use case?{" "}
                <Link
                  href="/contact"
                  className="text-signal underline-offset-4 hover:underline"
                >
                  Get in touch →
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream text-ink">
        <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
          <p className="kicker text-moss">▸ Keep_Up</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Join the people figuring it out.
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
