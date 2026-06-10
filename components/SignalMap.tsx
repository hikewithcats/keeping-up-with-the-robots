/*
 * Western Mass signal grid — stylized town-node map of the Pioneer Valley.
 * Positions are approximate-geographic, not cartographic.
 */

type Town = {
  name: string;
  x: number;
  y: number;
  big?: boolean; // larger node + ping animation
  labelDx?: number;
  labelDy?: number;
  anchor?: "start" | "end" | "middle";
};

const TOWNS: Town[] = [
  { name: "Shelburne Falls", x: 62, y: 62, labelDy: -12, anchor: "start", labelDx: -28 },
  { name: "Greenfield", x: 158, y: 52, big: true, labelDy: -12, anchor: "middle" },
  { name: "Deerfield", x: 152, y: 112, labelDx: 12, anchor: "start" },
  { name: "Amherst", x: 248, y: 192, big: true, labelDx: 13, anchor: "start" },
  { name: "Hadley", x: 200, y: 206, labelDy: -11, anchor: "middle" },
  { name: "Northampton", x: 146, y: 222, big: true, labelDx: -13, anchor: "end" },
  { name: "Florence", x: 118, y: 192, labelDx: -12, anchor: "end" },
  { name: "Easthampton", x: 134, y: 276, labelDx: -13, anchor: "end" },
  { name: "Belchertown", x: 300, y: 252, labelDx: 0, labelDy: 18, anchor: "middle" },
  { name: "South Hadley", x: 204, y: 296, labelDx: 14, anchor: "start" },
  { name: "Holyoke", x: 178, y: 342, big: true, labelDx: -13, anchor: "end" },
  { name: "Springfield", x: 196, y: 414, big: true, labelDx: 15, anchor: "start" },
];

const EDGES: [string, string][] = [
  ["Shelburne Falls", "Greenfield"],
  ["Greenfield", "Deerfield"],
  ["Deerfield", "Northampton"],
  ["Deerfield", "Amherst"],
  ["Florence", "Northampton"],
  ["Northampton", "Hadley"],
  ["Hadley", "Amherst"],
  ["Amherst", "Belchertown"],
  ["Northampton", "Easthampton"],
  ["Easthampton", "Holyoke"],
  ["Hadley", "South Hadley"],
  ["Belchertown", "South Hadley"],
  ["South Hadley", "Holyoke"],
  ["Holyoke", "Springfield"],
];

function town(name: string) {
  return TOWNS.find((t) => t.name === name)!;
}

export function SignalMap({ className }: { className?: string }) {
  return (
    <figure className={className}>
      <div className="relative border border-line bg-ink-2 bg-dots p-3">
        {/* corner brackets */}
        <Corner className="left-1.5 top-1.5" d="M1 9V1h8" />
        <Corner className="right-1.5 top-1.5" d="M1 1h8v8" />
        <Corner className="bottom-1.5 left-1.5" d="M1 1v8h8" />
        <Corner className="bottom-1.5 right-1.5" d="M9 1v8h-8" />

        <div className="flex items-center justify-between px-2 pt-1">
          <span className="kicker text-fog">Western_Mass_Signal_Grid</span>
          <span className="flex items-center gap-1.5 font-mono text-[0.6rem] uppercase tracking-widest text-signal">
            <span className="blink inline-block h-1.5 w-1.5 rounded-full bg-signal" />
            Live
          </span>
        </div>

        <svg
          viewBox="0 0 400 460"
          role="img"
          aria-label="Stylized map of Western Massachusetts towns connected as a network: Shelburne Falls, Greenfield, Deerfield, Amherst, Hadley, Northampton, Florence, Easthampton, Belchertown, South Hadley, Holyoke, and Springfield."
          className="mt-1 w-full"
        >
          {/* Connecticut River */}
          <path
            d="M168 18 C 172 70, 182 110, 172 160 C 162 210, 188 260, 196 310 C 204 360, 198 410, 206 452"
            fill="none"
            stroke="var(--color-line-bright)"
            strokeOpacity="0.45"
            strokeWidth="7"
            strokeLinecap="round"
          />

          {/* signal edges */}
          {EDGES.map(([a, b]) => {
            const ta = town(a);
            const tb = town(b);
            return (
              <g key={`${a}-${b}`}>
                <line
                  x1={ta.x}
                  y1={ta.y}
                  x2={tb.x}
                  y2={tb.y}
                  stroke="var(--color-line-bright)"
                  strokeWidth="1"
                />
                <line
                  className="signal-line"
                  x1={ta.x}
                  y1={ta.y}
                  x2={tb.x}
                  y2={tb.y}
                  stroke="var(--color-signal)"
                  strokeWidth="1.5"
                  strokeOpacity="0.8"
                />
              </g>
            );
          })}

          {/* nodes + labels */}
          {TOWNS.map((t) => (
            <g key={t.name}>
              {t.big && (
                <circle cx={t.x} cy={t.y} r="6" fill="var(--color-signal)" opacity="0.25">
                  <animate
                    attributeName="r"
                    values="5;13;5"
                    dur="3.2s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.35;0;0.35"
                    dur="3.2s"
                    repeatCount="indefinite"
                  />
                </circle>
              )}
              <circle
                cx={t.x}
                cy={t.y}
                r={t.big ? 4.5 : 3}
                fill={t.big ? "var(--color-signal)" : "var(--color-ink)"}
                stroke="var(--color-signal)"
                strokeWidth="1.5"
              />
              <text
                x={t.x + (t.labelDx ?? 0)}
                y={t.y + (t.labelDy ?? 4)}
                textAnchor={t.anchor ?? "start"}
                fill={t.big ? "var(--color-cream)" : "var(--color-fog)"}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: t.big ? "11px" : "10px",
                  letterSpacing: "0.04em",
                }}
              >
                {t.name}
              </text>
            </g>
          ))}
        </svg>

        <figcaption className="px-2 pb-1 font-mono text-[0.6rem] uppercase tracking-widest text-fog/70">
          12 towns · one dispatch · the whole Valley
        </figcaption>
      </div>
    </figure>
  );
}

function Corner({ className, d }: { className: string; d: string }) {
  return (
    <svg
      viewBox="0 0 10 10"
      className={`absolute h-2.5 w-2.5 text-signal ${className}`}
      aria-hidden="true"
    >
      <path d={d} fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
