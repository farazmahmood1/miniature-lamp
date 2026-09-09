import type { Metadata } from "next";
import Link from "next/link";

import { primaryNav } from "../config/navigation";
import { site } from "../config/site";

const MONO =
  "[font-family:'Suisse_Int'l_Mono',_monospace] text-[0.8125rem] font-normal leading-3.5 tracking-[-0.32px] uppercase";

export const metadata: Metadata = {
  title: "Page not found",
  description: `That page does not exist on ${site.name}. Here is the way back.`,
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="block relative" id="content">
      <main className="flex min-h-screen flex-col justify-center px-10 pt-40 pb-24 text-background max-lg:px-[0.9375rem] max-lg:pt-32">
        <div className="block w-full max-w-500">
          <p className={`${MONO} mb-8 text-primary`}>Error 404</p>

          <h1 className="mb-8 block max-w-200 [font-family:'ABC_Favorit_Trial',_sans-serif] text-[4.25rem] font-light leading-[4.4375rem] tracking-[-1.69px] text-balance max-md:text-[2.5rem] max-md:leading-10.5 max-md:tracking-[-1px]">
            That page is not here
          </h1>

          <p className="mb-12 block max-w-140 text-[1.0625rem] leading-[1.4375rem] opacity-70">
            It may have moved, or the link that sent you here may be out of date. Everything on
            the site is one click away below.
          </p>

          <nav aria-label="Site sections">
            <ul className="flex flex-wrap gap-3 [list-style-type:none] list-outside">
              <li>
                <Link
                  className={`${MONO} inline-block rounded-full bg-primary px-5 py-3.5 text-color-001`}
                  href="/"
                >
                  Home
                </Link>
              </li>
              {primaryNav.map((item) => (
                <li key={item.href}>
                  <Link
                    className={`${MONO} inline-block rounded-full border border-solid border-clr-8 px-5 py-3.5 transition-colors duration-200 hover:bg-color-003`}
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </main>
    </div>
  );
}
