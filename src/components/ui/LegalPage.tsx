/**
 * Shared shell for the privacy and terms pages.
 *
 * Both are the same shape — a lead block and a run of headed sections — so they share
 * one layout and differ only in their content module.
 */

import type { ReactNode } from "react";
import PageHero from "./PageHero";

const MONO =
  "[font-family:'Suisse_Int'l_Mono',_monospace] text-[0.8125rem] font-normal leading-3.5 tracking-[-0.32px] uppercase";

export type LegalSection = {
  heading: string;
  /** Plain paragraphs, or a bulleted list. */
  body: (string | string[])[];
};

export default function LegalPage({
  eyebrow,
  title,
  updated,
  intro,
  sections,
  children,
}: {
  eyebrow: string;
  title: string;
  /** Human-readable date, e.g. "9 September 2026". */
  updated: string;
  intro: string;
  sections: LegalSection[];
  children?: ReactNode;
}) {
  return (
    <div className="block relative" id="content">
      <PageHero
        eyebrow={eyebrow}
        title={title}
        intro={intro}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: eyebrow }]}
      />

      <main className="block bg-clr-1 pb-[10.2125rem] pt-20 text-foreground max-lg:pb-14 max-lg:pt-14">
        <div className="block max-w-500 px-10 max-lg:px-[0.9375rem]">
          <div className="grid gap-5 grid-cols-12 max-lg:grid-cols-1 max-lg:gap-8">
            <div className="col-start-1 col-end-4 max-lg:[grid-column-start:initial] max-lg:[grid-column-end:initial]">
              <p className={`${MONO} sticky top-24.5 text-muted-foreground max-lg:static`}>
                Last updated {updated}
              </p>
            </div>

            <div className="col-start-5 col-end-12 max-lg:[grid-column-start:initial] max-lg:[grid-column-end:initial]">
              {sections.map((section) => (
                <section key={section.heading} className="mb-14 last:mb-0">
                  <h2 className="mb-5 block text-[1.625rem] font-normal leading-[2.1875rem] tracking-[-0.64px] max-md:text-xl max-md:leading-[1.6875rem]">
                    {section.heading}
                  </h2>
                  {section.body.map((block, i) =>
                    Array.isArray(block) ? (
                      <ul
                        key={i}
                        className="block my-[22.5px] pl-[29.3px] text-lg leading-[1.6875rem] tracking-[0.18px] [list-style-type:disc] list-outside text-muted-foreground max-lg:text-[1.0625rem]"
                      >
                        {block.map((item, j) => (
                          <li className="list-item my-[0.5625rem] pl-[0.425rem]" key={j}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p
                        key={i}
                        className="block my-[22.5px] text-lg leading-[1.6875rem] tracking-[0.18px] text-muted-foreground max-lg:my-[21.3px] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem]"
                      >
                        {block}
                      </p>
                    ),
                  )}
                </section>
              ))}
              {children}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
