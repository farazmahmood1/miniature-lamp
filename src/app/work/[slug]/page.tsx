import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { caseStudies, getCaseStudy } from "../../../config/work";
import { getService } from "../../../config/services";
import { SITE_ORIGIN } from "../../../config/site";
import { caseStudyMetadata } from "../../../lib/metadata";
import { primaryCta } from "../../../config/navigation";
import PageHero from "../../../components/ui/PageHero";
import ContentCard from "../../../components/ui/ContentCard";

const MONO =
  "[font-family:'Suisse_Int'l_Mono',_monospace] text-[0.8125rem] font-normal leading-3.5 tracking-[-0.32px] uppercase";

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

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const service = getService(study.serviceSlug);
  const more = caseStudies.filter((c) => c.slug !== study.slug).slice(0, 3);

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

      <div className="block relative" id="content">
        <PageHero
          eyebrow={`${study.industry} · ${study.year}`}
          title={study.title}
          intro={study.summary}
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Work", href: "/work" },
            { label: study.client },
          ]}
        >
          <ul className={`flex flex-wrap gap-2 ${MONO} [list-style-type:none] list-outside`}>
            {study.tags.map((tag) => (
              <li
                className="rounded-full border border-solid border-clr-8 px-3 py-2 opacity-80"
                key={tag}
              >
                {tag}
              </li>
            ))}
          </ul>
        </PageHero>

        <main className="block bg-clr-1 pb-[10.2125rem] pt-20 text-foreground max-lg:pb-14 max-lg:pt-14">
          <div className="flex max-w-500 flex-col gap-24 px-10 max-lg:gap-16 max-lg:px-[0.9375rem]">
            {/* Headline numbers */}
            <section aria-label="Results">
              <dl className="grid gap-5 grid-cols-3 max-lg:gap-[0.9375rem] max-md:grid-cols-1">
                {study.results.map((result) => (
                  <div className="rounded-[10px] bg-surface p-6 max-lg:p-5" key={result.label}>
                    <dt className={`${MONO} mb-4 text-muted-foreground`}>{result.label}</dt>
                    <dd className="block [font-family:'ABC_Favorit_Trial',_sans-serif] text-[3.25rem] font-light leading-[3.375rem] tracking-[-1.29px] max-md:text-[2.5rem] max-md:leading-10.5">
                      {result.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>

            {/* Engagement facts */}
            <section aria-label="Engagement" className="grid gap-5 grid-cols-4 border-y border-solid border-y-clr-2 py-8 max-md:grid-cols-2 max-md:gap-8">
              {[
                { label: "Client", value: study.client },
                { label: "Industry", value: study.industry },
                { label: "Duration", value: study.duration },
                { label: "Practice", value: service?.shortName ?? "—" },
              ].map((fact) => (
                <div key={fact.label}>
                  <p className={`${MONO} mb-2 text-muted-foreground`}>{fact.label}</p>
                  <p className="block text-[1.0625rem] leading-[1.4375rem]">{fact.value}</p>
                </div>
              ))}
            </section>

            {/* The write-up */}
            {study.sections.map((section) => (
              <section
                className="grid gap-5 grid-cols-12 max-lg:grid-cols-1 max-lg:gap-6"
                key={section.heading}
                aria-labelledby={`s-${section.heading.replace(/\W+/g, "-")}`}
              >
                <div className="col-start-1 col-end-5 max-lg:[grid-column-start:initial] max-lg:[grid-column-end:initial]">
                  <h2
                    id={`s-${section.heading.replace(/\W+/g, "-")}`}
                    className="block sticky top-24.5 text-[2.125rem] font-light leading-[2.5rem] tracking-[-0.86px] text-balance max-lg:static max-lg:text-[1.5625rem] max-lg:leading-[1.8125rem]"
                  >
                    {section.heading}
                  </h2>
                </div>
                <div className="col-start-6 col-end-13 max-lg:[grid-column-start:initial] max-lg:[grid-column-end:initial]">
                  {section.body.map((paragraph, i) => (
                    <p
                      className="block my-[22.5px] text-lg font-normal leading-[1.6875rem] tracking-[0.18px] first:mt-0 max-lg:my-[21.3px] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem]"
                      key={i}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}

            {study.quote && (
              <blockquote className="rounded-[15px] bg-surface p-12 max-lg:p-6">
                <p className="mb-6 block text-[2.125rem] font-light leading-[2.5rem] tracking-[-0.86px] text-balance max-md:text-[1.5625rem] max-md:leading-[1.8125rem]">
                  {study.quote.text}
                </p>
                <footer className={`${MONO} text-muted-foreground`}>
                  {study.quote.author} · {study.quote.role}
                </footer>
              </blockquote>
            )}

            {/* Route back into the matching service */}
            {service && (
              <section className="rounded-[15px] bg-color-001 p-12 text-background max-lg:p-6">
                <p className="mb-8 block max-w-180 text-[2.125rem] font-light leading-[2.5rem] tracking-[-0.86px] text-balance max-md:text-[1.5625rem] max-md:leading-[1.8125rem]">
                  This was {service.shortName} work. Yours would start with the same
                  conversation.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    className="h-13.5 min-h-13.5 inline-flex relative isolate px-5 rounded-[7px] justify-center items-center gap-2 overflow-hidden bg-primary text-color-001 cursor-pointer max-lg:h-10.5 max-lg:min-h-10.5 max-lg:px-3.5"
                    href={`${primaryCta.href}?service=${service.slug}`}
                  >
                    <c-scramble-text class={`block z-2 ${MONO}`}>
                      {` ${primaryCta.label} `}
                    </c-scramble-text>
                  </Link>
                  <Link
                    className="h-13.5 min-h-13.5 inline-flex relative isolate px-5 rounded-[7px] justify-center items-center gap-2 overflow-hidden bg-color-003 cursor-pointer max-lg:h-10.5 max-lg:min-h-10.5 max-lg:px-3.5"
                    href={service.href}
                  >
                    <c-scramble-text class={`block z-2 ${MONO}`}>
                      {` ${service.shortName} `}
                    </c-scramble-text>
                  </Link>
                </div>
              </section>
            )}

            <section aria-labelledby="more-work">
              <h2 id="more-work" className={`${MONO} mb-8 text-muted-foreground`}>
                More work
              </h2>
              <ul className="grid gap-5 grid-cols-3 max-lg:grid-cols-1 max-lg:gap-[0.9375rem] md:max-lg:grid-cols-2 [list-style-type:none] list-outside">
                {more.map((c) => (
                  <li className="list-item" key={c.slug}>
                    <ContentCard
                      href={`/work/${c.slug}`}
                      eyebrow={c.industry}
                      title={c.title}
                      description={c.summary}
                      meta={`${c.year} · ${c.duration}`}
                    />
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
