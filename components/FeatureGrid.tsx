const features = [
  {
    title: "AI Agents & Workflows",
    description:
      "Building autonomous agents, Claude Code pipelines, and multi-step AI systems.",
  },
  {
    title: "AI-Assisted Development",
    description:
      "Shipping code faster with Cursor, Copilot, Codex, and Claude Code.",
  },
  {
    title: "Automation & Integration",
    description:
      "Connecting AI to real business workflows with n8n, Make, custom APIs.",
  },
  {
    title: "AI Products & Startups",
    description:
      "Launching AI-powered SaaS, tools, and products as indie hackers or founders.",
  },
];

export function FeatureGrid() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="text-center text-2xl font-bold md:text-3xl">
          This is not an intro to ChatGPT.
        </h2>
        <p className="mx-auto mt-3 max-w-[600px] text-center text-[var(--color-text-muted)]">
          This community is for people who are building things with AI.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-lg border border-white/8 bg-[var(--color-bg-card)] p-6 transition-transform hover:-translate-y-0.5"
            >
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
