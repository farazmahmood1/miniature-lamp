import { ImageResponse } from "next/og";
import { site } from "../config/site";

/**
 * The default social share card, rendered at build time.
 *
 * Deliberately typographic rather than photographic: it stays legible at the small
 * size a link preview actually renders, and it needs no asset pipeline.
 */

// Required by `output: export`: the image is rendered once at build time.
export const dynamic = "force-static";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${site.name} — ${site.tagline}`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#101421",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        {/* Lockup: the three-bar mark plus the wordmark. */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: "48px",
              height: "48px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <div style={{ width: "38px", height: "12px", borderRadius: "6px", background: "#FF488B" }} />
            </div>
            <div style={{ display: "flex", gap: "6px" }}>
              <div style={{ width: "26px", height: "12px", borderRadius: "6px", background: "#FF488B" }} />
              <div style={{ width: "8px", height: "12px", borderRadius: "6px", background: "#FF488B" }} />
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <div style={{ width: "38px", height: "12px", borderRadius: "6px", background: "#FF488B" }} />
            </div>
          </div>
          <div style={{ fontSize: "44px", letterSpacing: "-1px" }}>{site.name}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          <div
            style={{
              fontSize: "76px",
              lineHeight: 1.05,
              letterSpacing: "-2.5px",
              maxWidth: "900px",
            }}
          >
            Software and AI built to survive production
          </div>
          <div style={{ fontSize: "28px", opacity: 0.65, maxWidth: "820px", lineHeight: 1.35 }}>
            Strategy, design, engineering, launch and growth, from one team.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "24px",
            opacity: 0.55,
          }}
        >
          <div>codilated.com</div>
          <div>{site.contact.email}</div>
        </div>
      </div>
    ),
    size,
  );
}
