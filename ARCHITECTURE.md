# Architecture

The Codilated marketing site. Next.js 15 App Router, statically exported, no server
at runtime.

## Stack

| Concern | Choice |
| --- | --- |
| Framework | Next.js 15 (App Router), React 19 |
| Styling | Tailwind CSS v4, with design tokens in `src/app/globals.css` |
| Motion | GSAP + Lenis (scroll), three.js (hero canvas), Lottie (map animation) |
| Output | `output: "export"` — a folder of static HTML in `out/` |

Because the export is static there is no server, no API route and no runtime image
optimisation. Anything that needs a backend (the contact form) either posts to an
external endpoint or degrades to a mail draft.

## Directory layout

```
src/
  app/                  Routes only. One folder per URL segment.
    layout.tsx          Chrome: metadata, JSON-LD, header, footer, preloader
    page.tsx            Home
    sections/           The home page's markup, split from its route file
    components/         Presentational pieces used by the home page
    svgs/               Inline SVG components used by the home page
    node-ids.ts         Per-instance element ids for the generated markup
    node-styles.ts      Per-instance class overrides, merged with cn()
    content.ts          Home page copy
    motion-spec.ts      Captured interaction/motion specs for the home page
    services/           Services index, three deep pages, and a [slug] template
    work/               Case-study index and [slug]
    blog/               Blog index and [slug]
    about|contact|pricing|privacy|terms/
  components/
    layout/             SiteHeader, SiteFooter, Preloader
    brand/              Wordmark, SocialIcon
    motion/             Runtime behaviours (see below)
    ui/                 PageHero, ContentCard, SplitTitle, LegalPage
    blog/               PostBody
    contact/            ContactForm
  config/               Single source of truth for content and structure
    site.ts             Brand, contact details, social links, origin
    navigation.ts       Routes, primary nav, footer columns, CTAs
    services.ts         The service catalogue
    work.ts             Case studies
    blog.ts             Posts
  lib/
    metadata.ts         Metadata builders, so no page hand-rolls its own
    utils.ts            cn()
  types/
    custom-elements.d.ts  JSX declarations for the design's <c-*> elements
```

### Routes only in `src/app`

`src/app` contains routes and the markup that belongs to exactly one route. Anything
shared lives under `src/components`. A folder inside `src/app` without a `page.tsx`
is colocated support code, not a URL.

## Where content comes from

Everything structural is defined once in `src/config` and read everywhere else:

- Adding a service to `services.ts` adds it to the header menu, the footer, the
  services index, the contact form's project-type field, the sitemap, `llms.txt`
  and the JSON-LD offer catalogue.
- Adding a case study to `work.ts` or a post to `blog.ts` generates its page, lists
  it on the relevant index, and adds it to the sitemap and `llms.txt`.

Nothing in the app hardcodes the company name, an email address or a phone number.

## The generated markup

Most of the home page and the three deep service pages came from a design capture
rather than being hand-written. That markup has three properties worth knowing:

1. **`data-cid` attributes.** Stable per-element ids. The motion runtimes resolve
   targets by them. Some routes use `data-node-id` instead; both are supported.
2. **Long inline Tailwind class strings.** These encode the captured computed styles
   at each breakpoint. They are verbose but exact, and editing them by hand is how
   the design drifts.
3. **`<c-*>` custom elements.** Presentational hooks. Four of them have behaviour
   attached at runtime; the rest are styling targets. All are declared in
   `src/types/custom-elements.d.ts`.

Because of this, prefer changing copy in `content.ts` or `src/config` over editing
the section markup.

## Motion runtimes

`src/components/motion` holds the client components that give the captured markup
its behaviour. Each renders nothing and attaches to elements already in the DOM.

| Component | What it does |
| --- | --- |
| `SmoothScroll` | Lenis smooth scroll, driving GSAP ScrollTrigger |
| `ScrambleTextRuntime` | Defines `<c-scramble-text>` — resolve-on-reveal text scramble |
| `ScrollReveal` | Replays captured entrance reveals, WAAPI animations and marquees |
| `InteractionRuntime` | Replays captured tabs, accordions, carousels and disclosures |
| `InteractiveDots` | Cursor-proximity dot grids |
| `CaseStudyCarousel` | Arrow and snap behaviour for the case-study rail |
| `StickyHeader` | Hides the navbar on scroll down, restores it on scroll up |
| `HeroCanvas` | The WebGL ribbon field behind the hero |
| `LottiePlayer` | Plays the map animation, paused when off screen |
| `CrosswordScramble` | The crossword grid on the AI Automation page |

`ScrollReveal` and `InteractionRuntime` are data-driven: each page passes a spec from
its `motion-spec.ts`. Those specs are captured style snapshots, not logic.

## SEO

- Metadata is built by `src/lib/metadata.ts`, so every page has a title, description,
  canonical URL, OpenGraph block and Twitter card.
- The social share image is generated at build time by `src/app/opengraph-image.tsx`.
- JSON-LD: Organization and WebSite in the root layout; Service and FAQPage on
  service pages; Article and BreadcrumbList on posts; BreadcrumbList on case studies.
- `sitemap.ts`, `robots.ts` and `llms.txt/route.ts` are all generated from config.

## Conventions

- Components are PascalCase files under `src/components`; colocated generated pieces
  keep their kebab-case filenames.
- No file is named after the tool that produced it.
- Type errors fail the build (`next.config.mjs`). Keep it that way.
