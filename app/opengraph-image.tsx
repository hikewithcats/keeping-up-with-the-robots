import { ImageResponse } from "next/og";

export const alt =
  "Keeping Up With The Robots — Western Mass AI Newsletter & Community";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0e0a",
          backgroundImage:
            "radial-gradient(circle, #243024 2px, transparent 2px)",
          backgroundSize: "48px 48px",
          padding: "64px 80px",
        }}
      >
        {/* Top bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 22,
              color: "#aab7a6",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
            }}
          >
            &gt;&gt; Western_Mass_AI_Dispatch
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              fontSize: 22,
              color: "#a3ff3c",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
            }}
          >
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: 12,
                background: "#a3ff3c",
              }}
            />
            Live
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 78,
              fontWeight: 800,
              color: "#f2efe2",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            AI is moving fast.
          </div>
          <div
            style={{
              fontSize: 78,
              fontWeight: 800,
              color: "#a3ff3c",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            Western Mass is keeping up.
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#aab7a6",
              marginTop: 28,
              maxWidth: 900,
            }}
          >
            A practical local AI newsletter & community for small business
            owners, creators, operators, and builders.
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "2px solid #243024",
            paddingTop: 28,
          }}
        >
          <div style={{ display: "flex", fontSize: 24, color: "#f2efe2" }}>
            Keeping Up With The Robots
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              color: "#a3ff3c",
              letterSpacing: "0.1em",
            }}
          >
            KEEPINGUPWITHTHEROBOTS.COM
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
