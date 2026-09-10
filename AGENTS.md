# AGENTS.md

The Codilated marketing site: a statically exported Next.js 15 App Router project.
Read `ARCHITECTURE.md` for the full layout; this file covers how to work in it safely.

## Run

- `npm install`
- `npm run dev` — development server
- `npm run build` — production build and static export into `out/`
- `npm run start` — serve the built `out/` folder
- `npm run typecheck` — types only

Type errors fail the build. The project is currently at zero, so a new error is one
you introduced.

## Change content here first

Almost every content change is a config edit, not a markup edit:

| To change | Edit |
| --- | --- |
| Company name, email, phone, socials | `src/config/site.ts` |
| Nav, footer columns, CTA labels, routes | `src/config/navigation.ts` |
| Services, their copy, FAQs, stack chips | `src/config/services.ts` |
| Case studies | `src/config/work.ts` |
| Blog posts | `src/config/blog.ts` |
| Home page copy | `src/app/content.ts` |
| Pricing plans, comparison table, FAQs | `src/app/pricing/content.ts` |

Adding a service, case study or post generates its page and updates the nav, the
relevant index, the sitemap, `llms.txt` and the structured data automatically.

## Before launch

`src/config/work.ts` holds placeholder case studies. The client names, figures and
quotes are illustrative and must be replaced with real engagements, or removed,
before the site goes live. The file says so at the top.

## Handle with care

- **`src/app/sections/home-sections.tsx`** and the three
  `src/app/services/*/sections/capabilities-section.tsx` files came from a design
  capture. Their long inline Tailwind class strings encode exact per-breakpoint
  computed styles. Change copy freely; change classes only deliberately.
- **`node-ids.ts` / `node-styles.ts` / `node-meta.ts`** map per-element ids and class
  overrides onto that markup. Editing them by hand desynchronises the pair.
- **`motion-spec.ts`** files are captured style snapshots replayed by the motion
  runtimes. They are data. Do not hand-tune them.
- **`src/components/motion/`** is plumbing that attaches behaviour to markup already
  in the DOM. Each component renders nothing. Read the header comment before changing
  one.
- **`src/types/custom-elements.d.ts`** declares the design's `<c-*>` elements. A new
  custom element in the markup needs an entry here or the build fails.

## Conventions

- Routes and route-specific markup live in `src/app`. Anything shared lives in
  `src/components`.
- Never hardcode the company name, a contact detail or a URL origin. Import from
  `src/config/site.ts`.
- Never hand-roll page metadata. Use a builder from `src/lib/metadata.ts`.
- The site is a static export: no server actions, no API routes, no `next/image`
  optimisation, and every dynamic segment needs `generateStaticParams`.

## Routes

`/`, `/services`, `/services/[slug]` (ten services, three with hand-built pages),
`/work`, `/work/[slug]`, `/blog`, `/blog/[slug]`, `/about`, `/contact`, `/pricing`,
`/privacy`, `/terms`, plus `/sitemap.xml`, `/robots.txt`, `/llms.txt` and a generated
`/opengraph-image`.
