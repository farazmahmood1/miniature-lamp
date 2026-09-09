import type { Metadata } from "next";
import Link from "next/link";

import { site, SITE_ORIGIN } from "../../config/site";
import { pageMetadata } from "../../lib/metadata";
import { primaryCta } from "../../config/navigation";
import PageHero from "../../components/ui/PageHero";
import { engagements, priceFactors, pricingFaqs, comparison } from "./content";

const MONO =
  "[font-family:'Suisse_Int'l_Mono',_monospace] text-[0.8125rem] font-normal leading-3.5 tracking-[-0.32px] uppercase";

export const metadata: Metadata = pageMetadata({
  title: "Pricing",
  description: `How ${site.name} prices work: a paid discovery, fixed-scope projects and monthly retainers, with what each one suits and what moves the number.`,
  path: "/pricing",
});

export default function Page() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: pricingFaqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="block relative" id="content">
        <PageHero
          eyebrow="Pricing"
          title="Priced before the work starts"
          gradient={{ from: 3, to: 4 }}
          intro="Three ways to work with us. Every one of them ends with a written number before anybody opens an editor."
        />

        <main className="block bg-clr-1 pb-[10.2125rem] pt-20 text-foreground max-lg:pb-14 max-lg:pt-14">
          <div className="flex max-w-500 flex-col gap-24 px-10 max-lg:gap-16 max-lg:px-[0.9375rem]">
            {/* Engagement models */}
            <section aria-labelledby="models">
              <h2 id="models" className="sr-only">
                Engagement models
              </h2>
              <ul className="grid gap-5 grid-cols-3 max-lg:gap-[0.9375rem] max-lg:grid-cols-1 [list-style-type:none] list-outside">
                {engagements.map((plan) => (
                  <li
                    className={`flex flex-col gap-8 rounded-[15px] p-8 max-lg:p-6 ${
                      plan.featured
                        ? "bg-color-001 text-background"
                        : "bg-surface text-foreground"
                    }`}
                    key={plan.slug}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <p className={MONO}>{plan.name}</p>
                      {plan.badge && (
                        <span
                          className={`${MONO} shrink-0 rounded-full bg-primary px-2 py-1 text-color-001`}
                          style={{ fontSize: "10px", letterSpacing: "0.04em" }}
                        >
                          {plan.badge}
                        </span>
                      )}
                    </div>

                    <div>
                      <p className="block [font-family:'ABC_Favorit_Trial',_sans-serif] text-[2.75rem] font-light leading-[3rem] tracking-[-1.1px] max-md:text-[2.25rem] max-md:leading-[2.5rem]">
                        {plan.price}
                      </p>
                      <p className={`${MONO} mt-3 opacity-60`}>{plan.priceNote}</p>
                    </div>

                    <p className="block text-[1.0625rem] leading-[1.4375rem] opacity-80">
                      {plan.description}
                    </p>

                    <ul className="flex flex-col gap-3 [list-style-type:none] list-outside">
                      {plan.includes.map((item) => (
                        <li className="flex gap-3 text-[0.9375rem] leading-[1.375rem]" key={item}>
                          <span
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                            aria-hidden="true"
                          />
                          <span className="opacity-80">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto">
                      <p className={`${MONO} mb-5 opacity-60`}>Best for {plan.bestFor}</p>
                      <Link
                        className={`h-13.5 min-h-13.5 flex relative isolate w-full px-5 rounded-[7px] justify-center items-center gap-2 overflow-hidden cursor-pointer max-lg:h-11 max-lg:min-h-11 ${
                          plan.featured
                            ? "bg-primary text-color-001"
                            : "bg-muted-foreground text-background"
                        }`}
                        href={plan.href}
                      >
                        <c-scramble-text class={`block z-2 ${MONO}`}>
                          {` ${plan.cta} `}
                        </c-scramble-text>
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            {/* Comparison */}
            <section aria-labelledby="compare">
              <h2
                id="compare"
                className="mb-10 block text-[2.125rem] font-light leading-[2.5rem] tracking-[-0.86px] max-lg:mb-6 max-md:text-[1.5625rem] max-md:leading-[1.8125rem]"
              >
                How they differ
              </h2>

              {/* Scrolls inside itself rather than pushing the page sideways. */}
              <div className="overflow-x-auto rounded-[10px] bg-surface">
                <table className="w-full min-w-160 border-collapse text-left">
                  <caption className="sr-only">
                    Comparison of the discovery, project and retainer engagement models
                  </caption>
                  <thead>
                    <tr>
                      <th scope="col" className={`${MONO} p-5 text-muted-foreground`}>
                        &nbsp;
                      </th>
                      {engagements.map((plan) => (
                        <th scope="col" className={`${MONO} p-5`} key={plan.slug}>
                          {plan.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {comparison.map((row) => (
                      <tr className="border-t border-solid border-t-clr-2" key={row.label}>
                        <th
                          scope="row"
                          className="p-5 text-[0.9375rem] font-normal leading-[1.375rem] text-muted-foreground"
                        >
                          {row.label}
                        </th>
                        {row.values.map((value, i) => (
                          <td className="p-5 text-[0.9375rem] leading-[1.375rem]" key={i}>
                            {value}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* What moves the number */}
            <section
              aria-labelledby="factors"
              className="grid gap-5 grid-cols-12 max-lg:grid-cols-1 max-lg:gap-8"
            >
              <div className="col-start-1 col-end-5 max-lg:[grid-column-start:initial] max-lg:[grid-column-end:initial]">
                <h2 id="factors" className={`${MONO} text-muted-foreground`}>
                  What moves the number
                </h2>
              </div>
              <dl className="col-start-6 col-end-13 flex flex-col max-lg:[grid-column-start:initial] max-lg:[grid-column-end:initial]">
                {priceFactors.map((factor) => (
                  <div
                    className="border-b border-solid border-b-clr-2 py-6 first:pt-0 max-lg:py-5"
                    key={factor.title}
                  >
                    <dt className="mb-2 block text-[1.375rem] font-normal leading-[1.875rem] tracking-[-0.56px]">
                      {factor.title}
                    </dt>
                    <dd className="block text-[1.0625rem] leading-[1.4375rem] text-muted-foreground">
                      {factor.body}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>

            {/* FAQ */}
            <section
              aria-labelledby="faqs"
              className="grid gap-5 grid-cols-12 max-lg:grid-cols-1 max-lg:gap-8"
            >
              <div className="col-start-1 col-end-5 max-lg:[grid-column-start:initial] max-lg:[grid-column-end:initial]">
                <h2 id="faqs" className={`${MONO} text-muted-foreground`}>
                  Common questions
                </h2>
              </div>
              <dl className="col-start-6 col-end-13 flex flex-col gap-10 max-lg:[grid-column-start:initial] max-lg:[grid-column-end:initial] max-lg:gap-8">
                {pricingFaqs.map((faq) => (
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

            {/* CTA */}
            <section className="rounded-[15px] bg-color-001 p-12 text-background max-lg:p-6">
              <p className="mb-8 block max-w-180 text-[2.125rem] font-light leading-[2.5rem] tracking-[-0.86px] text-balance max-md:text-[1.5625rem] max-md:leading-[1.8125rem]">
                Not sure which of these fits? Describe the problem and we will tell you which one
                we would recommend, including when the answer is none of them.
              </p>
              <Link
                className="h-13.5 min-h-13.5 inline-flex relative isolate px-5 rounded-[7px] justify-center items-center gap-2 overflow-hidden bg-primary text-color-001 cursor-pointer max-lg:h-10.5 max-lg:min-h-10.5 max-lg:px-3.5"
                href={primaryCta.href}
              >
                <c-scramble-text class={`block z-2 ${MONO}`}>
                  {` ${primaryCta.label} `}
                </c-scramble-text>
              </Link>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
