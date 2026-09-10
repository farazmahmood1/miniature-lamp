import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  caseStudies,
  getCaseStudy,
  overviewOf,
  challengeOf,
  impactOf,
  narrativeOf,
  nextCaseStudy,
} from "../../../config/work";
import { getService } from "../../../config/services";
import { SITE_ORIGIN } from "../../../config/site";
import { caseStudyMetadata } from "../../../lib/metadata";
import { primaryCta } from "../../../config/navigation";
import RevealOnScroll from "../../../components/motion/RevealOnScroll";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  return study ? caseStudyMetadata(study) : {};
}

/**
 * A case study, laid out as an editorial piece on the dark ground rather than as a
 * page of body copy: title and tags, hero, overview, the phases the engagement ran
 * through, the challenge, the numbers, the impact, the stack, and the next project.
 *
 * The narrative fields are derived from `sections` (see `overviewOf` and friends in
 * `config/work.ts`) so the page and the write-up cannot drift apart. Artwork is
 * abstract placeholder imagery; swapping in real screenshots is an edit to `images`.
 */
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const service = getService(study.serviceSlug);
  const next = nextCaseStudy(study.slug);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_ORIGIN },
      { "@type": "ListItem", position: 2, name: "Work", item: `${SITE_ORIGIN}/work` },
      {
        "@type": "ListItem",
        position: 3,
        name: study.title,
        item: `${SITE_ORIGIN}/work/${study.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <RevealOnScroll />

      <main className="cs" id="content">
        {/* Title ------------------------------------------------------------ */}
        <header className="cs__head">
          <nav aria-label="Breadcrumb" className="cs__crumbs">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/work">Work</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{study.client}</span>
          </nav>

          <p className="cs__kicker">
            <span className="cs__dot" aria-hidden="true" />
            {study.industry} · {study.year}
          </p>

          <h1 className="cs__title">{study.title}</h1>

          <ul data-reveal className="cs__chips">
            {study.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </header>

        {/* Hero ------------------------------------------------------------- */}
        <figure data-reveal className="cs__hero">
          <img src={study.images.hero} alt="" width={1600} height={900} decoding="async" />
        </figure>

        {/* Overview --------------------------------------------------------- */}
        <section data-reveal className="cs__section" aria-labelledby="cs-overview">
          <p className="cs__label" id="cs-overview">
            Project overview
          </p>
          <div className="cs__split">
            <p className="cs__lede">{overviewOf(study)}</p>
            <dl className="cs__meta">
              <div>
                <dt>Client</dt>
                <dd>{study.client}</dd>
              </div>
              <div>
                <dt>Location</dt>
                <dd>{study.location}</dd>
              </div>
              <div>
                <dt>Duration</dt>
                <dd>{study.duration}</dd>
              </div>
              <div>
                <dt>Practice</dt>
                <dd>{service?.shortName ?? "—"}</dd>
              </div>
            </dl>
          </div>
        </section>

        {/* Process ---------------------------------------------------------- */}
        <section data-reveal className="cs__section" aria-labelledby="cs-process">
          <h2 className="cs__display" id="cs-process">
            How the engagement ran
          </h2>
          <ol className="cs__phases">
            {study.phases.map((phase, i) => (
              <li className="cs__phase" key={phase.name}>
                <span className="cs__phase-no" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="cs__phase-head">
                  <span className="cs__phase-name">{phase.name}</span>
                  <span className="cs__phase-time">{phase.duration}</span>
                </span>
                <ul className="cs__phase-items">
                  {phase.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>

        {/* Challenge -------------------------------------------------------- */}
        <section data-reveal className="cs__section cs__section--center" aria-labelledby="cs-challenge">
          <p className="cs__label" id="cs-challenge">
            The challenge
          </p>
          <p className="cs__statement">{challengeOf(study)}</p>
          {service && (
            <Link className="cs__ghost" href={service.href}>
              {service.shortName}
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" aria-hidden="true">
                <path
                  d="M8 16 16 8M9 8h7v7"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          )}
        </section>

        {/* Gallery ---------------------------------------------------------- */}
        <section data-reveal className="cs__gallery" aria-label="Project imagery">
          {study.images.gallery.map((src) => (
            <figure key={src}>
              <img src={src} alt="" width={1200} height={800} loading="lazy" decoding="async" />
            </figure>
          ))}
        </section>

        {/* Results ---------------------------------------------------------- */}
        <section data-reveal className="cs__section" aria-labelledby="cs-results">
          <p className="cs__label" id="cs-results">
            What changed
          </p>
          <dl className="cs__results">
            {study.results.map((result) => (
              <div key={result.label}>
                <dt>{result.value}</dt>
                <dd>{result.label}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* The write-up ----------------------------------------------------- */}
        <section data-reveal className="cs__section" aria-label="Write-up">
          <div className="cs__body">
            {narrativeOf(study).map((section) => (
              <article className="cs__article" key={section.heading}>
                <h2>{section.heading}</h2>
                <div>
                  {section.body.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Impact ----------------------------------------------------------- */}
        <section data-reveal className="cs__section cs__section--center" aria-labelledby="cs-impact">
          <p className="cs__label" id="cs-impact">
            The impact
          </p>
          <p className="cs__statement">{impactOf(study)}</p>
        </section>

        {study.quote && (
          <section data-reveal className="cs__section" aria-label="Client quote">
            <blockquote className="cs__quote">
              <p>{study.quote.text}</p>
              <footer>
                {study.quote.author} · {study.quote.role}
              </footer>
            </blockquote>
          </section>
        )}

        {/* Stack ------------------------------------------------------------ */}
        {service && (
          <section data-reveal className="cs__section" aria-labelledby="cs-stack">
            <p className="cs__label" id="cs-stack">
              Tech stack
            </p>
            <ul className="cs__stack">
              {service.detail.stack.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Next ------------------------------------------------------------- */}
        <section data-reveal className="cs__next" aria-labelledby="cs-next">
          <p className="cs__label" id="cs-next">
            Ready for the next one?
          </p>

          <Link className="cs__next-link" href={`/work/${next.slug}`}>
            <span className="cs__next-name">{next.client}</span>
            <span className="cs__next-badge" aria-hidden="true">
              <span>Next project</span>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
                <path
                  d="M5 12h13M12 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Link>
          <p className="cs__next-title">{next.title}</p>

          <div className="cs__actions">
            <Link
              className="cs__cta"
              href={service ? `${primaryCta.href}?service=${service.slug}` : primaryCta.href}
            >
              {primaryCta.label}
            </Link>
            <Link className="cs__ghost" href="/work">
              All work
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
