/**
 * The Codilated lockup: the stacked three-bar mark plus the wordmark.
 *
 * The mark is built from spans rather than an SVG so it inherits the header's colour
 * tokens and scales with the same breakpoint classes the rest of the chrome uses.
 * Both header and footer render this, so the lockup can only be wrong in one place.
 */

import { site } from "../../config/site";

export default function Wordmark({
  /** Hides the word, leaving the mark alone. Used where space is tight. */
  markOnly = false,
}: {
  markOnly?: boolean;
}) {
  return (
    <>
      <span
        className="w-6 h-6 flex flex-col justify-between max-lg:w-5.5 max-lg:h-5.5"
        aria-hidden="true"
      >
        <span className="h-1 flex justify-end">
          <span className="w-[1.1875rem] block rounded-md bg-primary" />
        </span>
        <span className="h-1 flex gap-[0.1875rem]">
          <span className="w-[0.8125rem] block rounded-md bg-primary" />
          <span className="w-1 block rounded-md bg-primary" />
        </span>
        <span className="h-1 flex justify-end">
          <span className="w-[1.1875rem] block rounded-md bg-primary" />
        </span>
      </span>
      {markOnly ? null : (
        <span className="block text-[1.625rem] leading-[2.4375rem] tracking-[-0.39px] max-lg:text-[1.375rem] max-lg:leading-[2.0625rem] max-lg:tracking-[-0.33px]">
          {site.name}
        </span>
      )}
    </>
  );
}
