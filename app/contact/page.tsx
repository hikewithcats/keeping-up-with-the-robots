import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact & Submit",
  description:
    "Suggest a local AI use case, ask a question, share what you're building, or offer to host, speak, or sponsor a Western Mass AI event.",
  alternates: { canonical: `${siteConfig.url}/contact` },
};

const reasons = [
  "Suggest a local AI use case",
  "Ask a question",
  "Tell us what you're building",
  "Offer to host an event",
  "Offer to sponsor",
  "Ask for help getting started",
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-dots border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
          <p className="kicker text-signal">▸ Open_Channel</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl">
            Say hello. Tell us what you&apos;re working on.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-fog sm:text-lg">
            This whole project runs on local signal. The more we hear from
            people around the Valley, the more useful the dispatch gets.
          </p>
          <ul className="mt-8 flex flex-wrap gap-2.5">
            {reasons.map((r) => (
              <li
                key={r}
                className="border border-line bg-ink-2 px-3.5 py-2 font-mono text-xs uppercase tracking-wider text-fog"
              >
                {r}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
          <ContactForm />
          <p className="mt-8 font-mono text-xs tracking-wide text-fog">
            Prefer email? Write to{" "}
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="text-signal underline-offset-4 hover:underline"
            >
              {siteConfig.contactEmail}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
