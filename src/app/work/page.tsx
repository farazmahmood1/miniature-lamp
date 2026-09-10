import type { Metadata } from "next";
import Link from "next/link";

import { caseStudies } from "../../config/work";
import { SITE_ORIGIN } from "../../config/site";
import { primaryCta } from "../../config/navigation";
import { pageMetadata } from "../../lib/metadata";
import RevealOnScroll from "../../components/motion/RevealOnScroll";
import ZoomField from "../../components/motion/ZoomField";
import WorkIndex from "./work-index";

export const metadata: Metadata = pageMetadata({
  title: "Work",
  description:
    "Case studies from Codilated: AI automation, voice agents, multi-tenant products, storefronts and forecasting, with the numbers each engagement was measured on.",
  path: "/work",
});

/** Every case study, as an item list, so the index is legible to search engines. */
const listJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Codilated case studies",
  itemListElement: caseStudies.map((study, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: study.title,
    url: `${SITE_ORIGIN}/work/${study.slug}`,
  })),
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(listJsonLd) }}
      />

      <RevealOnScroll />

      <main className="cs" id="content">
        <div className="wk-hero">
          <ZoomField className="wk-hero__field" />

          <header className="cs__head wk-hero__copy">
            <p className="cs__kicker">
              <span className="cs__dot" aria-hidden="true" />
              Work
            </p>

            <h1 className="cs__title">Projects, and what they changed</h1>

            <p className="cs__intro">
              Each of these is written up the same way: the situation we walked into, what
              we built, and the numbers afterwards.
            </p>
          </header>
        </div>

        <section data-reveal className="cs__section" aria-label="Case studies">
          <WorkIndex />
        </section>

        <section data-reveal className="cs__next" aria-labelledby="work-cta">
          <p className="cs__label" id="work-cta">
            Start yours
          </p>
          <p className="cs__statement">Tell us what is slow, and we will scope the fix.</p>
          <div className="cs__actions">
            <Link className="cs__cta" href={primaryCta.href}>
              {primaryCta.label}
            </Link>
            <Link className="cs__ghost" href="/services">
              All services
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
