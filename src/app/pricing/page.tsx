import type { Metadata } from "next";
import Link from "next/link";

import { site } from "../../config/site";
import { pageMetadata } from "../../lib/metadata";
import { primaryCta, secondaryCta } from "../../config/navigation";
import RevealOnScroll from "../../components/motion/RevealOnScroll";
import { engagements, priceFactors, pricingFaqs, comparison, formatPrice } from "./content";
import Plans from "./plans";
import Estimator from "./estimator";
import FaqAccordion from "./faq-accordion";

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

      <RevealOnScroll />

      <main className="cs pr" id="content">
        {/* Hero -------------------------------------------------------------- */}
        <header className="cs__head pr-hero">
          <div className="pr-hero__copy">
            <p className="cs__kicker">
              <span className="cs__dot" aria-hidden="true" />
              Pricing
            </p>

            <h1 className="cs__title">Priced before the work starts</h1>

            <p className="pr-hero__intro">
              Three ways to work with us. Every one of them ends with a written number
              before anybody opens an editor.
            </p>

            <div className="cs__actions pr-hero__actions">
              <Link className="cs__cta" href={primaryCta.href}>
                {primaryCta.label}
              </Link>
              <Link className="cs__ghost" href={secondaryCta.href}>
                {secondaryCta.label}
              </Link>
            </div>
          </div>

          {/* The floating summary card: the three entry points at a glance. */}
          <aside className="pr-rate" aria-label="Starting points">
            <p className="pr-rate__label">Starting at</p>
            <ul className="pr-rate__list">
              {engagements.map((plan) => (
                <li key={plan.slug}>
                  <span className="pr-rate__name">{plan.name}</span>
                  <span className="pr-rate__value">
                    {plan.pricePrefix}
                    {formatPrice(plan.amount)}
                    {plan.priceSuffix}
                  </span>
                </li>
              ))}
            </ul>
            <p className="pr-rate__foot">No hourly billing. No surprise invoices.</p>
          </aside>
        </header>

        {/* Plans ------------------------------------------------------------- */}
        <section data-reveal className="cs__section" aria-labelledby="pr-plans">
          <h2 className="sr-only" id="pr-plans">
            Engagement models
          </h2>
          <Plans />
        </section>

        {/* Comparison -------------------------------------------------------- */}
        <section data-reveal className="cs__section" aria-labelledby="pr-compare">
          <p className="cs__label">Compare</p>
          <h2 className="cs__display" id="pr-compare">
            Detailed plan comparison
          </h2>

          <div className="pr-table-wrap">
            <table className="pr-table">
              <caption className="sr-only">
                How the three engagement models compare
              </caption>
              <thead>
                <tr>
                  <th scope="col">
                    <span className="sr-only">Attribute</span>
                  </th>
                  {engagements.map((plan) => (
                    <th scope="col" key={plan.slug}>
                      <span className="pr-table__plan">{plan.name}</span>
                      <span className="pr-table__price">
                        {plan.pricePrefix}
                        {formatPrice(plan.amount)}
                        {plan.priceSuffix}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.label}>
                    <th scope="row">{row.label}</th>
                    {row.values.map((value, i) => (
                      <td key={`${row.label}-${i}`}>{value}</td>
                    ))}
                  </tr>
                ))}
                <tr>
                  <th scope="row">Get started</th>
                  {engagements.map((plan) => (
                    <td key={`cta-${plan.slug}`}>
                      <Link className="pr-table__cta" href={plan.href}>
                        {plan.cta}
                      </Link>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Estimator --------------------------------------------------------- */}
        <section data-reveal className="cs__section" aria-labelledby="pr-estimate">
          <p className="cs__label">Estimate</p>
          <h2 className="cs__display" id="pr-estimate">
            Work out roughly what yours costs
          </h2>
          <Estimator />
        </section>

        {/* Price factors ----------------------------------------------------- */}
        <section data-reveal className="cs__section" aria-labelledby="pr-factors">
          <p className="cs__label">What moves the number</p>
          <h2 className="cs__display" id="pr-factors">
            Four things that change the price
          </h2>
          <ul className="pr-factors">
            {priceFactors.map((factor, i) => (
              <li key={factor.title}>
                <span className="pr-factors__no" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3>{factor.title}</h3>
                <p>{factor.body}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* FAQ --------------------------------------------------------------- */}
        <section data-reveal className="cs__section" aria-labelledby="pr-faq">
          <p className="cs__label">Questions</p>
          <h2 className="cs__display" id="pr-faq">
            Before you ask
          </h2>
          <FaqAccordion items={pricingFaqs} />
        </section>

        {/* CTA --------------------------------------------------------------- */}
        <section data-reveal className="cs__next" aria-labelledby="pr-cta">
          <p className="cs__label" id="pr-cta">
            Next step
          </p>
          <p className="cs__statement">
            Tell us what is slow, and we will scope the fix.
          </p>
          <div className="cs__actions">
            <Link className="cs__cta" href={primaryCta.href}>
              {primaryCta.label}
            </Link>
            <Link className="cs__ghost" href="/work">
              See the work
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
