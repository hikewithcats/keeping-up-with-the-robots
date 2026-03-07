import { ImageResponse } from "next/og";

export const alt = "Keeping Up With The Robots — Western Mass AI Builders";
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
          alignItems: "center",
          justifyContent: "center",
          background: "#0A0A0F",
          padding: "60px 80px",
        }}
      >
        {/* Top accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            background: "#E94560",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              color: "#F5F5F5",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Build With AI.
          </div>
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              color: "#E94560",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginTop: 8,
            }}
          >
            Ship With Friends.
          </div>

          <div
            style={{
              fontSize: 24,
              color: "#A0A0B0",
              marginTop: 32,
              maxWidth: 700,
            }}
          >
            A builder-focused AI community for Western Massachusetts
          </div>

          <div
            style={{
              fontSize: 18,
              color: "#F5F5F5",
              marginTop: 48,
              opacity: 0.6,
              letterSpacing: "0.05em",
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
