import type { Metadata } from "next";

import { site, socials } from "../../config/site";
import { pageMetadata } from "../../lib/metadata";
import PageHero from "../../components/ui/PageHero";
import ContactForm from "../../components/contact/ContactForm";
import SocialIcon from "../../components/brand/SocialIcon";

const MONO =
  "[font-family:'Suisse_Int'l_Mono',_monospace] text-[0.8125rem] font-normal leading-3.5 tracking-[-0.32px] uppercase";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description: `Start a project with ${site.name}. Tell us what you are trying to build and we will tell you what it takes, usually within one working day.`,
  path: "/contact",
});

/** What happens after someone sends the form. Stated so nobody has to guess. */
const NEXT_STEPS = [
  {
    step: "01",
    title: "We reply within a working day",
    body: "A person reads it, not an autoresponder. If it is not something we should take on, we will say so and point you somewhere better.",
  },
  {
    step: "02",
    title: "A 30-minute call",
    body: "Enough to understand the problem, the constraints and the deadline. No deck, and nothing to prepare.",
  },
  {
    step: "03",
    title: "A written scope and a number",
    body: "Sequenced, with what is in and what is deliberately out. You are free to take it elsewhere.",
  },
];

export default function Page() {
  const telHref = `tel:${site.contact.phone.replace(/[^+\d]/g, "")}`;
  const waHref = `https://wa.me/${site.contact.phone.replace(/[^\d]/g, "")}`;

  return (
    <div className="block relative" id="content">
      <PageHero
        eyebrow="Contact"
        title="Tell us what you are building"
        gradient={{ from: 5, to: 5 }}
        intro="A short description is enough to start. We will ask the awkward questions on the call."
      />

      <main className="block bg-clr-1 pb-[10.2125rem] pt-20 text-foreground max-lg:pb-14 max-lg:pt-14">
        <div className="block max-w-500 px-10 max-lg:px-[0.9375rem]">
          <div className="grid gap-x-5 gap-y-16 grid-cols-12 max-lg:grid-cols-1 max-lg:gap-y-12">
            {/* Form */}
            <div className="col-start-1 col-end-8 max-lg:[grid-column-start:initial] max-lg:[grid-column-end:initial]">
              <h2 className={`${MONO} mb-8 text-muted-foreground`}>Project enquiry</h2>
              <ContactForm />
            </div>

            {/* Direct routes */}
            <div className="col-start-9 col-end-13 max-lg:[grid-column-start:initial] max-lg:[grid-column-end:initial]">
              <h2 className={`${MONO} mb-8 text-muted-foreground`}>Or reach us directly</h2>

              <ul className="flex flex-col gap-6 [list-style-type:none] list-outside">
                <li>
                  <p className={`${MONO} mb-2 text-muted-foreground`}>Email</p>
                  <a
                    className="block text-[1.375rem] leading-[1.875rem] tracking-[-0.56px] hover:underline"
                    href={`mailto:${site.contact.email}`}
                  >
                    {site.contact.email}
                  </a>
                </li>
                <li>
                  <p className={`${MONO} mb-2 text-muted-foreground`}>Phone</p>
                  <a
                    className="block text-[1.375rem] leading-[1.875rem] tracking-[-0.56px] hover:underline"
                    href={telHref}
                  >
                    {site.contact.phoneDisplay}
                  </a>
                </li>
                <li>
                  <p className={`${MONO} mb-2 text-muted-foreground`}>WhatsApp</p>
                  <a
                    className="block text-[1.375rem] leading-[1.875rem] tracking-[-0.56px] hover:underline"
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Message us
                  </a>
                </li>
                <li>
                  <p className={`${MONO} mb-2 text-muted-foreground`}>Where we work</p>
                  <p className="block text-[1.0625rem] leading-[1.4375rem] text-muted-foreground">
                    Remote, {site.contact.areaServed.toLowerCase()}. We overlap at least four hours
                    with your working day, whichever timezone that is.
                  </p>
                </li>
              </ul>

              <ul className="mt-10 flex gap-4 [list-style-type:none] list-outside">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      className="flex h-11 w-11 items-center justify-center rounded-[7px] bg-surface transition-colors duration-200 hover:bg-surface-2"
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

            {/* What happens next — anchor target for the "Book a call" CTA */}
            <section
              className="col-span-12 max-lg:[grid-column-start:initial] max-lg:[grid-column-end:initial]"
              id="book"
              aria-labelledby="next-steps"
            >
              <h2 id="next-steps" className={`${MONO} mb-10 text-muted-foreground max-lg:mb-6`}>
                What happens next
              </h2>
              <ol className="grid gap-5 grid-cols-3 max-lg:grid-cols-1 max-lg:gap-[0.9375rem] [list-style-type:none] list-outside">
                {NEXT_STEPS.map((s) => (
                  <li className="flex flex-col gap-4 rounded-[10px] bg-surface p-6 max-lg:p-5" key={s.step}>
                    <span className={`${MONO} text-primary`}>{s.step}</span>
                    <h3 className="block text-[1.375rem] font-normal leading-[1.875rem] tracking-[-0.56px]">
                      {s.title}
                    </h3>
                    <p className="block text-[0.9375rem] leading-[1.375rem] text-muted-foreground">
                      {s.body}
                    </p>
                  </li>
                ))}
              </ol>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
