import type { Metadata } from "next";
import Link from "next/link";

import { site } from "../../config/site";
import { services } from "../../config/services";
import { pageMetadata } from "../../lib/metadata";
import { primaryCta } from "../../config/navigation";
import PageHero from "../../components/ui/PageHero";

const MONO =
  "[font-family:'Suisse_Int'l_Mono',_monospace] text-[0.8125rem] font-normal leading-3.5 tracking-[-0.32px] uppercase";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description:
    "Codilated is a small, AI-first software studio. How we scope, how we build, what we refuse to do, and who ends up owning the work.",
  path: "/about",
});

/** The five stages every engagement runs through, whatever the practice. */
const PROCESS = [
  {
    step: "01",
    title: "Strategy",
    body: "Two weeks working out what is worth building. You get a scope, a sequence and a number, and an honest answer if the answer is less than you asked for.",
  },
  {
    step: "02",
    title: "Design",
    body: "Interfaces designed against real content and real edge cases, delivered as components engineers build from rather than pictures they interpret.",
  },
  {
    step: "03",
    title: "Development",
    body: "Typed, tested and reviewed, in your repository from the first commit, deployed through a pipeline your own team can run without us.",
  },
  {
    step: "04",
    title: "Launch",
    body: "Monitoring, error tracking and analytics wired in before release, so the first month produces evidence instead of opinions.",
  },
  {
    step: "05",
    title: "Growth",
    body: "A monthly block of iteration against what the evidence says, on a retainer you can end the moment the work stops earning it.",
  },
];

/** The commitments a client can hold us to. Stated plainly because most are unusual. */
const PRINCIPLES = [
  {
    title: "You own everything",
    body: "Code lands in your repository under your licence. Infrastructure runs in accounts you hold and pay for directly. Nothing here depends on us continuing to exist.",
  },
  {
    title: "We will talk you out of work",
    body: "Every audit we run names at least one thing that should stay manual, and more than one redesign has turned into two bug fixes. Selling you a bigger project is not the goal.",
  },
  {
    title: "Small team, senior only",
    body: "The people in the kickoff are the people writing the code. No account layer between you and the build, and nothing handed to a junior the week after you sign.",
  },
  {
    title: "Numbers or nothing",
    body: "Every engagement is agreed against a measurable outcome before it starts, and reported against that number afterwards, including the months it did not move.",
  },
];

export default function Page() {
  return (
    <div className="block relative" id="content">
      <PageHero
        eyebrow="About"
        title="A small studio that finishes things"
        gradient={{ from: 4, to: 5 }}
        intro={`${site.name} is an AI-first software studio. Ten practices, one team, and a strong preference for work that can be measured.`}
      />

      <main className="block bg-clr-1 pb-[10.2125rem] pt-20 text-foreground max-lg:pb-14 max-lg:pt-14">
        <div className="flex max-w-500 flex-col gap-24 px-10 max-lg:gap-16 max-lg:px-[0.9375rem]">
          {/* Positioning */}
          <section className="grid gap-5 grid-cols-12 max-lg:grid-cols-1 max-lg:gap-6" aria-labelledby="story">
            <div className="col-start-1 col-end-5 max-lg:[grid-column-start:initial] max-lg:[grid-column-end:initial]">
              <h2 id="story" className={`${MONO} text-muted-foreground`}>
                Why we exist
              </h2>
            </div>
            <div className="col-start-6 col-end-13 max-lg:[grid-column-start:initial] max-lg:[grid-column-end:initial]">
              <p className="block text-[2.125rem] font-light leading-[2.5rem] tracking-[-0.86px] text-balance max-md:text-[1.5625rem] max-md:leading-[1.8125rem]">
                Most software projects do not fail at the idea. They fail somewhere between the
                convincing demo and the Tuesday afternoon when three hundred strangers are using it.
              </p>
              <p className="mt-8 block text-lg leading-[1.6875rem] tracking-[0.18px] text-muted-foreground max-lg:text-[1.0625rem]">
                That gap is unglamorous work: permissions, cost control, evaluation, error states,
                the twelve edge cases nobody wrote down. It is also the work that decides whether a
                thing is a product or a prototype. We built {site.name} to do that part properly,
                and to be honest about it while we are doing it.
              </p>
              <p className="mt-6 block text-lg leading-[1.6875rem] tracking-[0.18px] text-muted-foreground max-lg:text-[1.0625rem]">
                AI is our flagship practice, but AI is only ever half a project. It has to plug into
                a website, a store, a brand and a way of getting in front of people, so we build
                those too, with the same team and the same standard.
              </p>
            </div>
          </section>

          {/* Process */}
          <section aria-labelledby="process">
            <h2 id="process" className={`${MONO} mb-10 text-muted-foreground max-lg:mb-6`}>
              How an engagement runs
            </h2>
            <ol className="grid gap-5 grid-cols-5 max-lg:grid-cols-1 max-lg:gap-[0.9375rem] md:max-lg:grid-cols-2 [list-style-type:none] list-outside">
              {PROCESS.map((phase) => (
                <li
                  className="flex flex-col gap-4 rounded-[10px] bg-surface p-6 max-lg:p-5"
                  key={phase.step}
                >
                  <span className={`${MONO} text-primary`}>{phase.step}</span>
                  <h3 className="block text-[1.375rem] font-normal leading-[1.875rem] tracking-[-0.56px]">
                    {phase.title}
                  </h3>
                  <p className="block text-[0.9375rem] leading-[1.375rem] text-muted-foreground">
                    {phase.body}
                  </p>
                </li>
              ))}
            </ol>
          </section>

          {/* Principles */}
          <section aria-labelledby="principles">
            <h2 id="principles" className={`${MONO} mb-10 text-muted-foreground max-lg:mb-6`}>
              What you can hold us to
            </h2>
            <dl className="grid gap-x-5 gap-y-12 grid-cols-2 max-lg:grid-cols-1 max-lg:gap-y-8">
              {PRINCIPLES.map((p) => (
                <div key={p.title}>
                  <dt className="mb-3 block text-[1.625rem] font-normal leading-[2.1875rem] tracking-[-0.64px] max-md:text-xl max-md:leading-[1.6875rem]">
                    {p.title}
                  </dt>
                  <dd className="block max-w-160 text-lg leading-[1.6875rem] tracking-[0.18px] text-muted-foreground max-lg:text-[1.0625rem]">
                    {p.body}
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          {/* Capability summary */}
          <section aria-labelledby="capabilities">
            <h2 id="capabilities" className={`${MONO} mb-8 text-muted-foreground`}>
              What we do
            </h2>
            <ul className="flex flex-wrap gap-3 [list-style-type:none] list-outside">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    className={`${MONO} inline-block rounded-full border border-solid border-clr-2 px-4 py-3 transition-colors duration-200 hover:bg-surface`}
                    href={s.href}
                  >
                    {s.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* CTA */}
          <section className="rounded-[15px] bg-color-001 p-12 text-background max-lg:p-6">
            <p className="mb-8 block max-w-180 text-[2.125rem] font-light leading-[2.5rem] tracking-[-0.86px] text-balance max-md:text-[1.5625rem] max-md:leading-[1.8125rem]">
              If any of that sounds like the way you want to work, the next step is a conversation.
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
  );
}
