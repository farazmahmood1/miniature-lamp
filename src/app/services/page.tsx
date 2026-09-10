import type { Metadata } from "next";
import Link from "next/link";

import { serviceGroups, services } from "../../config/services";
import { site, SITE_ORIGIN } from "../../config/site";
import { primaryCta, routes } from "../../config/navigation";
import { pageMetadata } from "../../lib/metadata";
import RevealOnScroll from "../../components/motion/RevealOnScroll";
import TechLogo, { type TechName } from "../components/tech-logo";

export const metadata: Metadata = pageMetadata({
  title: "Services",
  description:
    "Ten practices under one roof: AI automation, conversational agents, custom AI products and analytics, plus the web, commerce, brand and growth work around them.",
  path: "/services",
});

/** The three plates in the imagery row. Placeholder abstracts until real work exists. */
const PLATES = [
  "/assets/site/images/4d8a8180db80.jpg",
  "/assets/site/images/b4e3c148cedf.jpg",
  "/assets/site/images/3f516d703cfa.jpg",
];

/** The stack the credential row shows. */
const STACK: TechName[] = [
  "nextjs",
  "react",
  "typescript",
  "nodejs",
  "postgres",
  "openai",
  "shopify",
  "stripe",
];

/** Where an enquiry actually goes. */
const ROUTES = [
  {
    label: "New project",
    body: "Tell us what is slow, manual or breaking. We reply with whether we are the right team and what the first two weeks would cost.",
    action: { label: primaryCta.label, href: routes.contact },
  },
  {
    label: "An existing system",
    body: "Something already built that needs extending, rescuing or making faster. We take these on as often as we start from nothing.",
    action: { label: "See the work", href: routes.work },
  },
  {
    label: "General enquiries",
    body: "Partnerships, press, or a question that does not fit a project brief.",
    action: { label: site.contact.email, href: `mailto:${site.contact.email}` },
  },
];

export default function Page() {
  const catalogueJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${site.name} services`,
    itemListElement: services.map((service, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: service.name,
      url: `${SITE_ORIGIN}${service.href}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(catalogueJsonLd) }}
      />

      <RevealOnScroll />

      <main className="sv" id="content">
        {/* Hero ------------------------------------------------------------- */}
        <header className="sv__hero">
          <h1 className="sv__display">
            Ten practices, one team, and nothing lost in a handoff
          </h1>
        </header>

        {/* Everything below the title sits on the white panel, the same dark-to-light
            hand-off /work and the service pages use. */}
        <div className="ct-panel">
          <div className="ct-panel__inner">

        {/* Mission ---------------------------------------------------------- */}
        <section data-reveal className="sv__band" aria-labelledby="sv-mission">
          <p className="sv__label" id="sv-mission">
            Services
          </p>
          <div className="sv__lede">
            <p>
              We think most software fails for the same reason: the people who decided
              what to build were not the people who had to build it, and neither of them
              had to live with it afterwards.
            </p>
            <p>
              So we keep the group small and the lines short. The people who scope your
              project are the people who write it, and they are still here when it is
              running in front of customers.
            </p>
          </div>
        </section>

        {/* What we build ---------------------------------------------------- */}
        <section data-reveal className="sv__band" aria-labelledby="sv-build">
          <p className="sv__label">What we build</p>
          <h2 className="sv__heading" id="sv-build">
            Built for the work that has to survive real users, not just a demo
          </h2>

          <div className="sv__plates">
            {PLATES.map((src, i) => (
              <figure key={src}>
                <img
                  src={src}
                  alt=""
                  width={800}
                  height={600}
                  loading={i === 0 ? "eager" : "lazy"}
                  decoding="async"
                />
              </figure>
            ))}
          </div>

          <div className="sv__copy">
            <p>
              AI is the flagship practice. Agent pipelines that read the messy inbound
              work a team does by hand, voice agents that hold a real conversation, and
              products with a model somewhere in the middle rather than bolted on the
              side.
            </p>
            <p>
              The rest of the list is everything the AI has to plug into. A storefront,
              a marketing site, a data pipeline, the brand around all of it. Built by
              the same people, which is why the seams are not where projects usually
              come apart.
            </p>
          </div>
        </section>

        {/* The catalogue ---------------------------------------------------- */}
        {serviceGroups.map((group) => (
          <section
            data-reveal
            className="sv__band sv__band--group"
            key={group.title}
            aria-labelledby={`sv-${group.title.replace(/\W+/g, "-")}`}
          >
            <div className="sv__group-head">
              <h2 className="sv__heading" id={`sv-${group.title.replace(/\W+/g, "-")}`}>
                {group.title}
              </h2>
              <p className="sv__label">{group.caption}</p>
            </div>

            <ul className="sv__list">
              {group.items.map((service) => (
                <li key={service.slug}>
                  <Link href={service.href}>
                    <span className="sv__list-name">
                      {service.shortName}
                      {service.tag && <em>{service.tag}</em>}
                    </span>
                    <span className="sv__list-body">{service.summary}</span>
                    <span className="sv__list-go" aria-hidden="true">
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none">
                        <path
                          d="M8 16 16 8M9 8h7v7"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}

        {/* Origin ----------------------------------------------------------- */}
        <section data-reveal className="sv__band" aria-labelledby="sv-start">
          <p className="sv__label">How it starts</p>
          <h2 className="sv__heading" id="sv-start">
            Two paid weeks, and a plan you could hand to anyone
          </h2>
          <div className="sv__copy">
            <p>
              Almost every engagement opens with discovery. We sit with the people who do
              the work today, rank what is worth building against what it costs, and write
              the technical approach down with the risky parts named rather than buried.
            </p>
            <p>
              You keep that document whether or not you hire us for the build. It is the
              cheapest way to find out that a project is smaller than you feared, or that
              we are the wrong team for it.
            </p>
          </div>
          <Link className="sv__button" href={primaryCta.href}>
            {primaryCta.label}
          </Link>
        </section>

        {/* Routes ----------------------------------------------------------- */}
        <section data-reveal className="sv__band" aria-labelledby="sv-routes">
          <p className="sv__label" id="sv-routes">
            Get in touch
          </p>
          <ul className="sv__routes">
            {ROUTES.map((route) => (
              <li key={route.label}>
                <h3>{route.label}</h3>
                <p>{route.body}</p>
                <Link href={route.action.href}>{route.action.label}</Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Stack ------------------------------------------------------------ */}
        <section data-reveal className="sv__band sv__band--stack" aria-labelledby="sv-stack">
          <p className="sv__label" id="sv-stack">
            Built on
          </p>
          <ul className="sv__stack">
            {STACK.map((name) => (
              <li key={name}>
                <TechLogo name={name} />
              </li>
            ))}
          </ul>
        </section>

          </div>
        </div>
      </main>
    </>
  );
}
