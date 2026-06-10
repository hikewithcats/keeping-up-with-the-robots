import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0e0a",
          borderRadius: 36,
        }}
      >
        <svg width="120" height="120" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="7" r="2.2" fill="#a3ff3c" />
          <line
            x1="16"
            y1="9.5"
            x2="16"
            y2="12"
            stroke="#a3ff3c"
            strokeWidth="2"
          />
          <rect
            x="7"
            y="12"
            width="18"
            height="14"
            rx="2.5"
            stroke="#f2efe2"
            strokeWidth="2"
          />
          <rect x="11" y="17" width="3.5" height="3.5" fill="#a3ff3c" />
          <rect x="17.5" y="17" width="3.5" height="3.5" fill="#a3ff3c" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
