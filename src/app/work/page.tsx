import type { Metadata } from "next";

import { caseStudies } from "../../config/work";
import { pageMetadata } from "../../lib/metadata";
import PageHero from "../../components/ui/PageHero";
import ContentCard from "../../components/ui/ContentCard";

export const metadata: Metadata = pageMetadata({
  title: "Work",
  description:
    "Case studies from Codilated: AI automation, voice agents, multi-tenant products, storefronts and forecasting, with the numbers each engagement was measured on.",
  path: "/work",
});

export default function Page() {
  return (
    <div className="block relative" id="content">
      <PageHero
        eyebrow="Work"
        title="Projects, and what they changed"
        gradient={{ from: 3, to: 4 }}
        intro="Each of these is written up the same way: the situation we walked into, what we built, and the numbers afterwards."
      />

      <main className="block bg-clr-1 pb-[10.2125rem] pt-20 text-foreground max-lg:pb-14 max-lg:pt-14">
        <div className="block max-w-500 px-10 max-lg:px-[0.9375rem]">
          <ul className="grid gap-5 grid-cols-2 max-lg:gap-[0.9375rem] max-lg:grid-cols-1 [list-style-type:none] list-outside">
            {caseStudies.map((study) => (
              <li className="list-item" key={study.slug}>
                <ContentCard
                  href={`/work/${study.slug}`}
                  eyebrow={`${study.industry} · ${study.year}`}
                  title={study.title}
                  description={study.summary}
                  meta={study.results[0] ? `${study.results[0].value} ${study.results[0].label.toLowerCase()}` : study.duration}
                />
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
