/**
 * The site footer, used by every route.
 *
 * Replaces the six near-identical copies the capture produced (one per route folder).
 * Layout and classes come from the captured design; every link, label and contact
 * detail is read from `src/config`.
 */

import Link from "next/link";
import { site, socials } from "../../config/site";
import { footerColumns, legalLinks, primaryCta, secondaryCta } from "../../config/navigation";
import Wordmark from "../brand/Wordmark";
import SocialIcon from "../brand/SocialIcon";

const MONO =
  "[font-family:'Suisse_Int'l_Mono',_monospace] text-[0.8125rem] font-normal leading-3.5 tracking-[-0.32px] uppercase";

export default function SiteFooter({
  /** Closing line above the calls to action. Pages override it to stay on topic. */
  ctaHeading = "Tell us what you are trying to build. We will tell you what it takes.",
}: {
  ctaHeading?: string;
} = {}) {
  return (
    <footer className="block relative -mt-7.5 pt-7.5 text-background">
      <div className="block relative">
        <div className="flex relative z-1 max-w-500 pt-10 px-10 flex-col gap-20 max-lg:pt-7 max-lg:px-[0.9375rem] max-lg:gap-12">
          <div className="grid gap-5 grid-cols-2 max-lg:gap-10 max-lg:grid-cols-1">
            <div className="flex flex-col gap-8">
              <Link href="/" className="flex items-center gap-[0.9375rem]" aria-label={`${site.name} home`}>
                <Wordmark />
              </Link>

              <p className="max-w-90 text-[0.9375rem] leading-[1.375rem] opacity-65">
                {site.tagline}. We design, build and ship software that earns its keep,
                then stay on long enough to prove it.
              </p>

              <ul className="flex flex-col gap-2 [list-style-type:none] list-outside">
                <li>
                  <a className={`${MONO} hover:underline`} href={`mailto:${site.contact.email}`}>
                    {site.contact.email}
                  </a>
                </li>
                <li>
                  <a
                    className={`${MONO} hover:underline`}
                    href={`tel:${site.contact.phone.replace(/[^+\d]/g, "")}`}
                  >
                    {site.contact.phoneDisplay}
                  </a>
                </li>
              </ul>

              <ul className="flex gap-4 [list-style-type:none] list-outside">
                {socials.map((s) => (
                  <li key={s.label} className="list-item">
                    <a
                      className="w-6 h-6 flex items-center justify-center opacity-65 transition-opacity duration-200 hover:opacity-100"
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${site.name} on ${s.label}`}
                    >
                      <SocialIcon name={s.icon} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-y-20 gap-x-5 grid-cols-3 max-lg:gap-y-12 max-lg:gap-x-[0.9375rem] max-md:grid-cols-2">
              {footerColumns.map((col) => (
                <div className="block" key={col.title}>
                  <h2 className="block opacity-65 mb-5 text-[0.9375rem] font-normal leading-[1.25rem] tracking-[0.15px] max-lg:text-sm max-lg:leading-[1.125rem] max-lg:tracking-[0.14px]">
                    {col.title}
                  </h2>
                  <ul className="flex flex-col gap-2 [list-style-type:none] list-outside">
                    {col.links.map((link) => (
                      <li className="list-item" key={link.href}>
                        <Link className={`${MONO} inline-block hover:underline`} href={link.href}>
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="flex flex-col gap-6 col-span-3 max-md:col-span-2">
                <p className="w-full max-w-180 block text-[2.125rem] font-light leading-[2.5rem] tracking-[-0.86px] text-balance max-md:text-[1.5625rem] max-md:leading-[1.8125rem] max-md:tracking-[-0.62px] md:max-lg:text-[1.8125rem] md:max-lg:leading-[2.0625rem] md:max-lg:tracking-[-0.72px] 2xl:text-[2.5625rem] 2xl:leading-[2.9375rem] 2xl:tracking-[-1.03px]">
                  {ctaHeading}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    className="h-13.5 min-h-13.5 inline-flex relative isolate px-5 rounded-[7px] justify-center items-center gap-2 overflow-hidden text-color-001 bg-primary cursor-pointer max-lg:h-10.5 max-lg:min-h-10.5 max-lg:px-3.5"
                    href={primaryCta.href}
                  >
                    <c-scramble-text class={`block z-2 ${MONO}`}>
                      {` ${primaryCta.label} `}
                    </c-scramble-text>
                  </Link>
                  <Link
                    className="h-13.5 min-h-13.5 inline-flex relative isolate px-5 rounded-[7px] justify-center items-center gap-2 overflow-hidden bg-color-003 [backdrop-filter:blur(16px)] cursor-pointer max-lg:h-10.5 max-lg:min-h-10.5 max-lg:px-3.5"
                    href={secondaryCta.href}
                  >
                    <c-scramble-text class={`block z-2 ${MONO}`}>
                      {` ${secondaryCta.label} `}
                    </c-scramble-text>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-solid border-t-clr-8 grid py-7.5 gap-5 grid-cols-12 max-lg:items-end max-lg:gap-y-2 max-lg:gap-x-[0.9375rem] max-md:grid-cols-2">
            <div className="flex justify-end order-[2] col-start-[span_10] col-end-[span_10] max-lg:col-start-1 max-lg:[justify-content:initial] max-lg:order-[initial] max-lg:[grid-column-end:initial]">
              <ul className="flex gap-6 [list-style-type:none] list-outside max-lg:flex-col max-lg:gap-2">
                {legalLinks.map((link) => (
                  <li className="list-item" key={link.href}>
                    <Link
                      className={`${MONO} inline-block text-left whitespace-nowrap hover:underline`}
                      href={link.href}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="block order-[1] col-start-[span_2] col-end-[span_2] max-lg:col-start-2 max-lg:row-start-1 max-lg:text-right max-lg:order-[initial] max-lg:[grid-column-end:initial]">
              {` ${new Date().getFullYear()} © ${site.name} `}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
