import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = site.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
          color: "white",
          padding: "80px",
          fontFamily: "system-ui",
        }}
      >
        <div style={{ fontSize: 32, opacity: 0.7 }}>{site.name}</div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            marginTop: 20,
            lineHeight: 1.2,
            maxWidth: 900,
          }}
        >
          {site.tagline}
        </div>
        <div style={{ fontSize: 28, marginTop: 30, opacity: 0.8 }}>
          {site.url.replace(/^https?:\/\//, "")}
        </div>
      </div>
    ),
    { ...size }
  );
}
