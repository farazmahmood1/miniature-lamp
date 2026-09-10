/**
 * The standard lead block for a section page.
 *
 * Uses the display type, mono eyebrow and grid rhythm the captured design
 * establishes, so pages written by hand sit alongside the generated ones without
 * looking like a different site.
 */

import type { ReactNode } from "react";
import Link from "next/link";
import SplitTitle from "./SplitTitle";

const MONO =
  "[font-family:'Suisse_Int'l_Mono',_monospace] text-[0.8125rem] font-normal leading-3.5 tracking-[-0.32px] uppercase";

export const HERO_TITLE_CLASS =
  "block [font-family:'ABC_Favorit_Trial',_sans-serif] text-[4.25rem] font-light leading-[4.4375rem] tracking-[-1.69px] text-balance max-md:text-[2.5rem] max-md:leading-10.5 max-md:tracking-[-1px] md:max-lg:text-[3.25rem] md:max-lg:leading-[3.375rem] md:max-lg:tracking-[-1.29px] 2xl:text-[5.5rem] 2xl:leading-[5.75rem] 2xl:tracking-[-2.19px]";

export type Crumb = { label: string; href?: string };

export default function PageHero({
  eyebrow,
  title,
  intro,
  breadcrumbs,
  /** Zero-based word range painted with the brand gradient. */
  gradient,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  breadcrumbs?: Crumb[];
  gradient?: { from: number; to: number };
  children?: ReactNode;
}) {
  return (
    <section className="block relative pt-40 pb-20 text-background max-lg:pt-32 max-lg:pb-14">
      <div className="block max-w-500 px-10 max-lg:px-[0.9375rem]">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className={`flex flex-wrap gap-2 ${MONO} opacity-65 [list-style-type:none] list-outside`}>
              {breadcrumbs.map((crumb, i) => (
                <li className="flex items-center gap-2" key={`${crumb.label}-${i}`}>
                  {crumb.href ? (
                    <Link className="hover:underline" href={crumb.href}>
                      {crumb.label}
                    </Link>
                  ) : (
                    <span aria-current="page">{crumb.label}</span>
                  )}
                  {i < breadcrumbs.length - 1 && <span aria-hidden="true">/</span>}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <h2 className="flex mb-10 items-center gap-2 max-lg:mb-6">
          <span className="w-1.5 h-1.5 block bg-primary [clip-path:inset(0%_round_7px)]" />
          <span className={MONO}>{eyebrow}</span>
        </h2>

        <div className="grid items-end gap-y-10 gap-x-5 grid-cols-12 max-lg:gap-x-[0.9375rem] max-md:grid-cols-1">
          <div className="block col-start-1 col-end-9 max-md:[grid-column-start:initial] max-md:[grid-column-end:initial] md:max-lg:col-end-13">
            <SplitTitle text={title} as="h1" className={HERO_TITLE_CLASS} gradient={gradient} />
          </div>

          {intro && (
            <div className="block col-start-10 col-end-13 max-md:[grid-column-start:initial] max-md:[grid-column-end:initial] md:max-lg:col-start-1 md:max-lg:col-end-13">
              <p className="block max-w-100 text-[1.0625rem] font-normal leading-[1.4375rem] tracking-[0.17px] text-balance lg:ml-auto max-lg:leading-[1.375rem]">
                {intro}
              </p>
            </div>
          )}
        </div>

        {children && <div className="mt-14 max-lg:mt-10">{children}</div>}
      </div>
    </section>
  );
}
