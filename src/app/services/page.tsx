import type { Metadata } from "next";

import { serviceGroups } from "../../config/services";
import { pageMetadata } from "../../lib/metadata";
import PageHero from "../../components/ui/PageHero";
import ContentCard from "../../components/ui/ContentCard";

const MONO =
  "[font-family:'Suisse_Int'l_Mono',_monospace] text-[0.8125rem] font-normal leading-3.5 tracking-[-0.32px] uppercase";

export const metadata: Metadata = pageMetadata({
  title: "Services",
  description:
    "Ten practices under one roof: AI automation, conversational agents, custom AI products and analytics, plus the web, commerce, brand and growth work around them.",
  path: "/services",
});

export default function Page() {
  return (
    <div className="block relative" id="content">
      <PageHero
        eyebrow="Services"
        title="Ten practices, one team"
        gradient={{ from: 2, to: 3 }}
        intro="AI is the flagship. The rest is everything the AI has to plug into, built by the same people so nothing is lost in a handoff."
      />

      <main className="block bg-clr-1 pb-[10.2125rem] pt-20 text-foreground max-lg:pb-14 max-lg:pt-14">
        <div className="flex max-w-500 flex-col gap-20 px-10 max-lg:gap-14 max-lg:px-[0.9375rem]">
          {serviceGroups.map((group) => (
            <section key={group.title} aria-labelledby={`group-${group.title.replace(/\W+/g, "-")}`}>
              <div className="mb-10 flex items-baseline justify-between gap-5 max-lg:mb-6 max-lg:flex-col max-lg:gap-2">
                <h2
                  id={`group-${group.title.replace(/\W+/g, "-")}`}
                  className="block text-[2.125rem] font-light leading-[2.5rem] tracking-[-0.86px] max-md:text-[1.5625rem] max-md:leading-[1.8125rem] max-md:tracking-[-0.62px]"
                >
                  {group.title}
                </h2>
                <p className={`${MONO} text-muted-foreground`}>{group.caption}</p>
              </div>

              <ul className="grid gap-5 grid-cols-3 max-lg:gap-[0.9375rem] max-lg:grid-cols-1 md:max-lg:grid-cols-2 [list-style-type:none] list-outside">
                {group.items.map((service) => (
                  <li className="list-item" key={service.slug}>
                    <ContentCard
                      href={service.href}
                      eyebrow={service.shortName}
                      title={service.detail.headline}
                      description={service.summary}
                      meta="See the detail"
                      tag={service.tag}
                    />
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
