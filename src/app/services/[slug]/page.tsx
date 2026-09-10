import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  getService,
  templatedServiceSlugs,
  services,
} from "../../../config/services";
import { caseStudiesForService } from "../../../config/work";
import { SITE_ORIGIN, site } from "../../../config/site";
import { serviceMetadata } from "../../../lib/metadata";
import { primaryCta } from "../../../config/navigation";
import PageHero from "../../../components/ui/PageHero";
import ContentCard from "../../../components/ui/ContentCard";

const MONO =
  "[font-family:'Suisse_Int'l_Mono',_monospace] text-[0.8125rem] font-normal leading-3.5 tracking-[-0.32px] uppercase";

/**
 * Only the services without a hand-built page are rendered here. The other three
 * have their own folders, which take precedence over this dynamic segment.
 */
export function generateStaticParams() {
  return templatedServiceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  return service ? serviceMetadata(service) : {};
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const { detail } = service;
  const studies = caseStudiesForService(service.slug);
  const siblings = services
    .filter((s) => s.group === service.group && s.slug !== service.slug)
    .slice(0, 3);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.metaDescription,
    serviceType: service.name,
    provider: { "@id": `${SITE_ORIGIN}/#organization` },
    areaServed: { "@type": "Place", name: site.contact.areaServed },
    url: `${SITE_ORIGIN}${service.href}`,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: detail.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="block relative" id="content">
        <PageHero
          eyebrow={service.group === "ai" ? "AI & Automation" : "Web, Commerce & Growth"}
          title={detail.headline}
          intro={detail.intro}
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: service.shortName },
          ]}
        >
          <ul className={`flex flex-wrap gap-2 ${MONO} [list-style-type:none] list-outside`}>
            {detail.stack.map((tool) => (
              <li
                className="rounded-full border border-solid border-clr-8 px-3 py-2 opacity-80"
                key={tool}
              >
                {tool}
              </li>
            ))}
          </ul>
        </PageHero>

        <main className="block bg-clr-1 pb-[10.2125rem] pt-20 text-foreground max-lg:pb-14 max-lg:pt-14">
          <div className="flex max-w-500 flex-col gap-24 px-10 max-lg:gap-16 max-lg:px-[0.9375rem]">
            {/* What the engagement includes */}
            <section aria-labelledby="deliverables" className="grid gap-5 grid-cols-12 max-lg:grid-cols-1 max-lg:gap-8">
              <div className="col-start-1 col-end-5 max-lg:[grid-column-start:initial] max-lg:[grid-column-end:initial]">
                <h2 id="deliverables" className={`${MONO} text-muted-foreground`}>
                  What you get
                </h2>
              </div>
              <ul className="col-start-6 col-end-13 flex flex-col max-lg:[grid-column-start:initial] max-lg:[grid-column-end:initial] [list-style-type:none] list-outside">
                {detail.deliverables.map((item) => (
                  <li
                    className="flex gap-5 border-b border-solid border-b-clr-2 py-6 text-lg leading-[1.6875rem] tracking-[0.18px] first:pt-0 max-lg:py-5 max-lg:text-[1.0625rem]"
                    key={item}
                  >
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Related case studies, when this practice has shipped work */}
            {studies.length > 0 && (
              <section aria-labelledby="related-work">
                <h2 id="related-work" className={`${MONO} mb-8 text-muted-foreground`}>
                  Work from this practice
                </h2>
                <ul className="grid gap-5 grid-cols-3 max-lg:grid-cols-1 max-lg:gap-[0.9375rem] md:max-lg:grid-cols-2 [list-style-type:none] list-outside">
                  {studies.map((study) => (
                    <li className="list-item" key={study.slug}>
                      <ContentCard
                        href={`/work/${study.slug}`}
                        eyebrow={study.industry}
                        title={study.title}
                        description={study.summary}
                        meta={`${study.year} · ${study.duration}`}
                      />
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Objection handling */}
            <section aria-labelledby="faqs" className="grid gap-5 grid-cols-12 max-lg:grid-cols-1 max-lg:gap-8">
              <div className="col-start-1 col-end-5 max-lg:[grid-column-start:initial] max-lg:[grid-column-end:initial]">
                <h2 id="faqs" className={`${MONO} text-muted-foreground`}>
                  Common questions
                </h2>
              </div>
              <dl className="col-start-6 col-end-13 flex flex-col gap-10 max-lg:[grid-column-start:initial] max-lg:[grid-column-end:initial] max-lg:gap-8">
                {detail.faqs.map((faq) => (
                  <div key={faq.question}>
                    <dt className="mb-3 block text-[1.375rem] font-normal leading-[1.875rem] tracking-[-0.56px]">
                      {faq.question}
                    </dt>
                    <dd className="block text-lg leading-[1.6875rem] tracking-[0.18px] text-muted-foreground max-lg:text-[1.0625rem]">
                      {faq.answer}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>

            {/* Closing CTA */}
            <section className="rounded-[15px] bg-color-001 p-12 text-background max-lg:p-6">
              <p className="mb-8 block max-w-180 text-[2.125rem] font-light leading-[2.5rem] tracking-[-0.86px] text-balance max-md:text-[1.5625rem] max-md:leading-[1.8125rem]">
                Tell us about the {service.shortName} work you have in mind. We will tell
                you what it takes.
              </p>
              <Link
                className="h-13.5 min-h-13.5 inline-flex relative isolate px-5 rounded-[7px] justify-center items-center gap-2 overflow-hidden bg-primary text-color-001 cursor-pointer max-lg:h-10.5 max-lg:min-h-10.5 max-lg:px-3.5"
                href={`${primaryCta.href}?service=${service.slug}`}
              >
                <c-scramble-text class={`block z-2 ${MONO}`}>
                  {` ${primaryCta.label} `}
                </c-scramble-text>
              </Link>
            </section>

            {/* Neighbouring services */}
            {siblings.length > 0 && (
              <section aria-labelledby="siblings">
                <h2 id="siblings" className={`${MONO} mb-8 text-muted-foreground`}>
                  Often paired with
                </h2>
                <ul className="grid gap-5 grid-cols-3 max-lg:grid-cols-1 max-lg:gap-[0.9375rem] md:max-lg:grid-cols-2 [list-style-type:none] list-outside">
                  {siblings.map((s) => (
                    <li className="list-item" key={s.slug}>
                      <ContentCard
                        href={s.href}
                        eyebrow={s.shortName}
                        title={s.detail.headline}
                        description={s.summary}
                        meta="See the detail"
                        tag={s.tag}
                      />
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </main>
      </div>
    </>
  );
}
