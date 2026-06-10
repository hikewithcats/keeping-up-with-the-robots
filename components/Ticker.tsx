import { tickerPhrases } from "@/content/site";

export function Ticker() {
  const row = (ariaHidden: boolean) => (
    <div
      aria-hidden={ariaHidden}
      className="flex shrink-0 items-center"
    >
      {tickerPhrases.map((phrase) => (
        <span
          key={phrase}
          className="flex items-center whitespace-nowrap font-mono text-xs font-medium uppercase tracking-[0.2em] text-ink"
        >
          <span className="px-5">{phrase}</span>
          <span className="text-ink/50">✶</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className="overflow-hidden border-y border-ink/20 bg-signal py-2.5">
      <div className="ticker-track flex w-max">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
