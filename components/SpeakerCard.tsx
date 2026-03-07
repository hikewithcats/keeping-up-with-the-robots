export function SpeakerCard({
  name,
  bio,
  topic,
}: {
  name: string;
  bio: string;
  topic: string;
  confirmed?: boolean;
}) {
  return (
    <div className="rounded-lg border border-white/8 bg-[var(--color-bg-card)] p-6">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-secondary)] text-lg font-bold">
        {name.split(" ").map((w) => w[0]).join("")}
      </div>
      <h3 className="font-semibold">{name}</h3>
      <p className="mt-1 text-sm font-medium text-[var(--color-accent)]">
        {topic}
      </p>
      <p className="mt-2 text-sm text-[var(--color-text-muted)]">{bio}</p>
    </div>
  );
}
