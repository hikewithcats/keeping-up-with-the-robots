const values = [
  {
    title: "Builder-First",
    description:
      "This community is for people who make things. Show your work, share your process, help each other ship.",
  },
  {
    title: "Show Don't Tell",
    description:
      "Demos over decks. Working prototypes over pitch slides. We celebrate what's built, not what's theorized.",
  },
  {
    title: "Local Roots, Global Ambition",
    description:
      "Based in Western Mass, connected to the world. We build for real markets from the Pioneer Valley.",
  },
  {
    title: "Inclusive Expertise",
    description:
      "Whether you're a senior engineer or just wrote your first AI prompt, you're welcome here. Curiosity is the only requirement.",
  },
];

export function CommunityValues() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {values.map((v) => (
        <div key={v.title} className="rounded-lg border border-white/8 bg-[var(--color-bg-card)] p-6">
          <h3 className="text-lg font-semibold">{v.title}</h3>
          <p className="mt-2 text-sm text-[var(--color-text-muted)]">
            {v.description}
          </p>
        </div>
      ))}
    </div>
  );
}
