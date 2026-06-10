export function SectionHeading({
  index,
  kicker,
  title,
  lead,
  tone = "dark",
  align = "left",
}: {
  index?: string;
  kicker: string;
  title: string;
  lead?: string;
  tone?: "dark" | "cream";
  align?: "left" | "center";
}) {
  const dark = tone === "dark";
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className={`kicker ${dark ? "text-signal" : "text-moss"}`}>
        {index ? `${index} ▸ ` : "▸ "}
        {kicker}
      </p>
      <h2
        className={`mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl ${
          dark ? "text-cream" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            dark ? "text-fog" : "text-ash"
          }`}
        >
          {lead}
        </p>
      )}
    </div>
  );
}
