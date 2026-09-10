import Link from "next/link";
import Icon8 from "../svgs/svg-icon8";

/**
 * A blog teaser card in the home page's closing grid.
 *
 * The capture emitted this as a switch over three hardcoded variants, one per post,
 * each repeating the same markup with a different image and a baked-in title. Adding
 * a post meant adding a branch. It is now one layout driven by the post data, with
 * the artwork supplied per card.
 */

export type FeatureGridItemData = {
  /** Post slug. Used for the link. */
  variant: string;
  title: string;
  /** Display date, already formatted. */
  date: string;
  category: string;
  /** ISO date for the <time> element. */
  dateTime?: string;
  /** Card artwork. Falls back to the first of the captured images. */
  image?: { src: string; srcSet?: string };
};

const FALLBACK_IMAGES = [
  {
    src: "/assets/site/images/7cc0eedc2b69.jpg",
    srcSet:
      "/assets/site/images/7cec6ed59ff8.jpg 240w, /assets/site/images/b2a953597627.jpg 480w, /assets/site/images/931d05b09eb6.jpg 720w, /assets/site/images/7cc0eedc2b69.jpg 960w, /assets/site/images/9b60c7e691bd.jpg 1440w",
  },
  {
    src: "/assets/site/images/4d8a8180db80.jpg",
    srcSet: "/assets/site/images/3f516d703cfa.jpg 1440w, /assets/site/images/4d8a8180db80.jpg 1920w",
  },
  {
    src: "/assets/site/images/ca1833da6f43.jpg",
    srcSet: "/assets/site/images/191ec76fa273.jpg 1440w, /assets/site/images/ca1833da6f43.jpg 1920w",
  },
];

export default function FeatureGridItem({
  d,
  /** Rotates the fallback artwork so adjacent cards do not repeat an image. */
  index = 0,
}: {
  d: FeatureGridItemData;
  index?: number;
}) {
  const art = d.image ?? FALLBACK_IMAGES[index % FALLBACK_IMAGES.length];

  return (
    <div className="w-[386.7px] block max-md:w-[17.8125rem] max-lg:shrink-0 md:max-lg:w-[307.7px] 2xl:w-150">
      <div className="flex relative rounded-[10px] flex-col overflow-hidden h-full">
        <div className="flex relative justify-center items-center overflow-hidden aspect-[464/392]">
          <c-inner-parallax class="w-[386.7px] h-[326.7px] block absolute top-0 left-0 min-w-0 overflow-hidden max-md:w-[17.8125rem] max-md:h-[15.05rem] md:max-lg:w-[307.7px] md:max-lg:h-[16.25rem] 2xl:w-150 2xl:h-[506.9px]">
            <c-dato-image class="inline">
              <picture className="w-full h-[20.4375rem] block absolute transform-[matrix(1,0,0,1,0,-80)] max-md:h-[15.0625rem] max-lg:transform-[none] md:max-lg:h-65 2xl:h-[31.6875rem] 2xl:transform-[matrix(1,0,0,1,0,-108)]">
                {art.srcSet && (
                  <source className="inline" sizes="(max-width: 999px) 100vw, 33vw" srcSet={art.srcSet} />
                )}
                <img
                  loading="lazy"
                  decoding="async"
                  className="w-full h-[32.4375rem] block absolute -top-24 max-w-full overflow-clip object-cover align-middle max-md:h-[15.0625rem] max-lg:top-0 md:max-lg:h-65 2xl:h-[43.6875rem]"
                  data-component="image"
                  alt=""
                  src={art.src}
                />
              </picture>
            </c-dato-image>
          </c-inner-parallax>
        </div>

        <div className="flex pt-5 pb-7 px-5 flex-col grow gap-3.5 bg-background">
          <div className="flex justify-between items-center">
            <ul className="flex gap-3.5 [font-family:'Suisse_Int'l_Mono',_monospace] text-[0.8125rem] font-normal leading-3.5 tracking-[-0.32px] uppercase [list-style-type:none] list-outside">
              <li className="list-item">
                <time className="inline" dateTime={d.dateTime}>
                  {` ${d.date} `}
                </time>
              </li>
              <li className="list-item text-muted-foreground">{` ${d.category} `}</li>
            </ul>
            <span className="h-6 block opacity-0 shrink-0 [translate:4px]" aria-hidden="true">
              <Icon8 cid={`feature-grid-arrow-${index}`} />
            </span>
          </div>

          <h3 className="block text-[1.625rem] font-normal leading-[2.1875rem] tracking-[-0.64px] max-md:text-xl max-md:leading-[1.6875rem] max-md:tracking-[-0.5px] md:max-lg:text-[1.375rem] md:max-lg:leading-[1.875rem] md:max-lg:tracking-[-0.56px]">
            {` ${d.title} `}
          </h3>
        </div>

        {/* The whole card is the link; the visible title is decorative for it. */}
        <Link
          className="h-full block absolute top-0 inset-x-0 z-1 min-w-0 rounded-[10px] cursor-pointer"
          href={`/blog/${d.variant}`}
        >
          <span className="w-px h-px block absolute -m-px overflow-hidden whitespace-nowrap text-nowrap [clip-path:inset(50%)]">
            {d.title}
          </span>
        </Link>
      </div>
    </div>
  );
}
