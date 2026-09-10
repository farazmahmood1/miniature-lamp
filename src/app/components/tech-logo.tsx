/**
 * Technology marks for the rail beneath the hero.
 *
 * Drawn inline rather than loaded as files so they inherit `currentColor` and stay
 * crisp at any size. Each is a monochrome reduction of the vendor's mark, paired
 * with the wordmark so the lockup is unambiguous even where the glyph is simplified.
 *
 * These are the tools we build with. The captured design ran client logos here;
 * Codilated is a young studio, so a wall of borrowed client marks would be a claim
 * we cannot make.
 */

export type TechName =
  | "nextjs"
  | "react"
  | "typescript"
  | "nodejs"
  | "postgres"
  | "openai"
  | "tailwind"
  | "shopify"
  | "wordpress"
  | "stripe"
  | "figma"
  | "vercel"
  | "aws"
  | "reactnative";

const S = { fill: "none", stroke: "currentColor", strokeWidth: 1.5 } as const;

const MARKS: Record<TechName, { label: string; glyph: React.ReactNode }> = {
  nextjs: {
    label: "Next.js",
    glyph: (
      <>
        <circle cx="12" cy="12" r="10.4" {...S} />
        <path d="M8.9 16.6V7.6l7.4 9.4" {...S} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.4 7.5v6.1" {...S} strokeLinecap="round" />
      </>
    ),
  },
  react: {
    label: "React",
    glyph: (
      <>
        <circle cx="12" cy="12" r="2" fill="currentColor" />
        <ellipse cx="12" cy="12" rx="10.6" ry="4.05" {...S} strokeWidth={1.2} />
        <ellipse
          cx="12"
          cy="12"
          rx="10.6"
          ry="4.05"
          {...S}
          strokeWidth={1.2}
          transform="rotate(60 12 12)"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="10.6"
          ry="4.05"
          {...S}
          strokeWidth={1.2}
          transform="rotate(120 12 12)"
        />
      </>
    ),
  },
  reactnative: {
    label: "React Native",
    glyph: (
      <>
        <circle cx="12" cy="12" r="2" fill="currentColor" />
        <ellipse cx="12" cy="12" rx="10.6" ry="4.05" {...S} strokeWidth={1.2} />
        <ellipse
          cx="12"
          cy="12"
          rx="10.6"
          ry="4.05"
          {...S}
          strokeWidth={1.2}
          transform="rotate(60 12 12)"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="10.6"
          ry="4.05"
          {...S}
          strokeWidth={1.2}
          transform="rotate(120 12 12)"
        />
      </>
    ),
  },
  typescript: {
    label: "TypeScript",
    glyph: (
      <>
        <rect x="1.6" y="1.6" width="20.8" height="20.8" rx="3.2" {...S} />
        {/* T */}
        <path d="M5.6 11.4h6.2M8.7 11.4v7.2" {...S} strokeLinecap="round" />
        {/* S */}
        <path
          d="M18.6 12.1a2.5 2.5 0 0 0-3.9 2c0 2.3 3.9 1.6 3.9 3.6a2.4 2.4 0 0 1-3.9 1.4"
          {...S}
          strokeLinecap="round"
        />
      </>
    ),
  },
  nodejs: {
    label: "Node.js",
    glyph: (
      /* The hexagon alone; the wordmark beside it carries the rest. */
      <path d="M12 1.9 21.4 7.2v9.6L12 22.1 2.6 16.8V7.2z" {...S} strokeLinejoin="round" />
    ),
  },
  postgres: {
    label: "Postgres",
    glyph: (
      /* The elephant head as a filled silhouette: dome, trunk and one raised ear.
         Strokes fall apart at this size, so this is drawn solid. */
      <path
        fill="currentColor"
        d="M12 2.2c-4.6 0-7.9 3-7.9 7.2 0 2.4.7 4 1.4 5.5.6 1.3.8 2.3.6 3.4-.2 1 .3 1.9 1.2 2.2 1 .3 1.9-.2 2.2-1.1.3-.9.2-1.8-.3-2.8 1 .6 2.1.9 3.2.9 1.3 0 2.5-.4 3.4-1.2-.2 1.3.1 2.5.9 3.3.7.8 1.7.9 2.4.3.8-.6 1-1.6.5-2.5-.9-1.7-.9-3.1-.3-4.7.6-1.6 1-2.8 1-4.2 0-4.2-3.4-6.3-8.3-6.3zm-2.6 5a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2z"
      />
    ),
  },
  openai: {
    label: "OpenAI",
    glyph: (
      <g {...S} strokeWidth={1.35} strokeLinecap="round" strokeLinejoin="round">
        {/* Six lobes at 60 degrees, the hexagonal knot reduced to its skeleton. */}
        {[0, 60, 120, 180, 240, 300].map((angle) => (
          <path
            key={angle}
            d="M12 12 12 4.6A4.3 4.3 0 0 1 18.4 8.3L12 12"
            transform={`rotate(${angle} 12 12)`}
          />
        ))}
      </g>
    ),
  },
  tailwind: {
    label: "Tailwind",
    glyph: (
      <>
        <path
          d="M7.1 9.6C7.9 6.4 9.9 4.8 12.7 4.8c4.1 0 4.6 3.1 6.7 3.6 1.4.35 2.6-.17 3.7-1.55-.8 3.2-2.8 4.8-5.6 4.8-4.1 0-4.6-3.1-6.7-3.6-1.4-.35-2.6.17-3.7 1.55z"
          fill="currentColor"
        />
        <path
          d="M1.2 16.7c.8-3.2 2.8-4.8 5.6-4.8 4.1 0 4.6 3.1 6.7 3.6 1.4.35 2.6-.17 3.7-1.55-.8 3.2-2.8 4.8-5.6 4.8-4.1 0-4.6-3.1-6.7-3.6-1.4-.35-2.6.17-3.7 1.55z"
          fill="currentColor"
        />
      </>
    ),
  },
  shopify: {
    label: "Shopify",
    glyph: (
      <>
        {/* Shopping bag with the handle notch. */}
        <path d="M5.2 6.9h13.6l1.3 13.9H3.9z" {...S} strokeLinejoin="round" />
        <path d="M8.7 9.6V6.4a3.3 3.3 0 0 1 6.6 0v3.2" {...S} strokeLinecap="round" />
      </>
    ),
  },
  wordpress: {
    label: "WordPress",
    glyph: (
      <>
        <circle cx="12" cy="12" r="10.4" {...S} />
        {/* The W, drawn as the two descending strokes the mark uses. */}
        <path
          d="M4.6 8.4 8.9 19.6l2.4-6.6M12.9 8.4l3.4 11.2 3.1-9.4"
          {...S}
          strokeWidth={1.35}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M4.6 8.4h4.9M12.9 8.4h5.2" {...S} strokeWidth={1.35} strokeLinecap="round" />
      </>
    ),
  },
  stripe: {
    label: "Stripe",
    glyph: (
      <>
        <rect x="1.8" y="1.8" width="20.4" height="20.4" rx="4.4" {...S} />
        <path
          d="M15.6 9.2c-1-.5-2-.8-3.1-.8-1.5 0-2.4.6-2.4 1.5 0 2.4 6.1 1.4 6.1 5.3 0 2.1-1.7 3.4-4.3 3.4-1.4 0-2.8-.3-4-.9"
          {...S}
          strokeWidth={1.4}
          strokeLinecap="round"
        />
      </>
    ),
  },
  figma: {
    label: "Figma",
    glyph: (
      <>
        {/* Three left half-capsules, one right half-capsule, one circle. */}
        <path d="M8.4 2.2h3.6v5.2H8.4a2.6 2.6 0 0 1 0-5.2z" {...S} />
        <path d="M12 2.2h3.6a2.6 2.6 0 0 1 0 5.2H12z" {...S} />
        <path d="M8.4 9.4h3.6v5.2H8.4a2.6 2.6 0 0 1 0-5.2z" {...S} />
        <path d="M8.4 16.6h3.6v2.6a2.6 2.6 0 1 1-3.6-2.6z" {...S} />
        <circle cx="15.6" cy="12" r="2.6" {...S} />
      </>
    ),
  },
  vercel: {
    label: "Vercel",
    glyph: <path d="M12 3.4 22.4 20.6H1.6z" fill="currentColor" />,
  },
  aws: {
    label: "AWS",
    glyph: (
      <>
        {/* The three-peak wordmark reduced to its letterforms, over the smile. */}
        <path
          d="M2.6 6.4 4.9 13l2.3-6.6M9.4 6.4l1.9 6.6 1.9-6.6 1.9 6.6 1.9-6.6"
          {...S}
          strokeWidth={1.35}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20.6 7.2c-.8-.5-1.7-.8-2.6-.8-1.2 0-1.9.5-1.9 1.2 0 1.9 4.7 1.1 4.7 4 0 1.5-1.3 2.5-3.2 2.5-1 0-2-.2-2.9-.7"
          {...S}
          strokeWidth={1.35}
          strokeLinecap="round"
        />
        <path
          d="M2 17.6c3.2 2.1 7 3.2 10.4 3.2 2.7 0 5.5-.6 8-1.8"
          {...S}
          strokeWidth={1.5}
          strokeLinecap="round"
        />
        <path d="M18.6 18.4c1.6-.7 3-.9 3.4-.4.3.4-.2 1.5-1 2.5" {...S} strokeWidth={1.4} />
      </>
    ),
  },
};

export default function TechLogo({ name }: { name: TechName }) {
  const mark = MARKS[name];
  if (!mark) return null;
  return (
    <>
      <svg
        viewBox="0 0 24 24"
        width="26"
        height="26"
        aria-hidden="true"
        className="shrink-0 max-md:w-5 max-md:h-5"
      >
        {mark.glyph}
      </svg>
      <span className="whitespace-nowrap">{mark.label}</span>
    </>
  );
}

export const TECH_LABELS = Object.fromEntries(
  Object.entries(MARKS).map(([k, v]) => [k, v.label]),
) as Record<TechName, string>;
