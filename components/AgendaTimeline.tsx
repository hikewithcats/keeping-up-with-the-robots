import { launchEvent } from "@/content/event";

export function AgendaTimeline() {
  return (
    <div className="space-y-0">
      {launchEvent.agenda.map((item, i) => (
        <div key={i} className="flex gap-4 py-4 border-b border-white/8 last:border-0">
          <span className="w-20 shrink-0 text-sm font-medium text-[var(--color-accent)]">
            {item.time}
          </span>
          <div>
            <p className="font-semibold">{item.title}</p>
            <p className="mt-1 text-sm text-[var(--color-text-muted)]">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
