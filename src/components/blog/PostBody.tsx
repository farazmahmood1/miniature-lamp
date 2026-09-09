/**
 * Renders a post's block list with the article typography from the design.
 *
 * The class strings are lifted verbatim from the captured article layout, so a post
 * written in `src/config/blog.ts` sets exactly like the design intended without
 * anyone hand-writing markup per post.
 */

import type { PostBlock } from "../../config/blog";

const PARAGRAPH =
  "block my-[22.5px] text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [word-break:break-word] [overflow-wrap:anywhere] max-lg:my-[21.3px] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]";

const HEADING =
  "block mt-[3.1875rem] mb-[25.5px] text-[1.625rem] font-normal leading-[2.1875rem] tracking-[-0.64px] max-md:mt-10 max-md:mb-5 max-md:text-xl max-md:leading-[1.6875rem] max-md:tracking-[-0.5px] md:max-lg:mt-[44.7px] md:max-lg:mb-[22.3px] md:max-lg:text-[1.375rem] md:max-lg:leading-[1.875rem] md:max-lg:tracking-[-0.56px] 2xl:mt-[3.6875rem] 2xl:mb-[29.5px] 2xl:text-3xl 2xl:leading-[2.5rem] 2xl:tracking-[-0.74px]";

const LIST =
  "block my-[22.5px] pl-[29.3px] text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [list-style-type:disc] list-outside max-lg:my-[21.3px] max-lg:pl-[1.725rem] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]";

const LIST_ITEM =
  "list-item my-[0.5625rem] pl-[0.425rem] [word-break:break-word] [overflow-wrap:anywhere] max-lg:my-[8.5px] max-lg:pl-[0.4rem]";

const QUOTE =
  "block my-10 border-l-2 border-solid border-l-primary pl-6 text-[1.375rem] font-light leading-[2rem] tracking-[-0.3px] text-balance max-lg:my-8 max-lg:pl-5 max-lg:text-[1.1875rem] max-lg:leading-[1.75rem]";

const CODE =
  "block my-8 p-5 rounded-[10px] overflow-x-auto bg-color-001 text-background [font-family:'Suisse_Int'l_Mono',_monospace] text-[0.8125rem] leading-[1.375rem] whitespace-pre max-lg:my-6 max-lg:p-4";

export default function PostBody({ blocks }: { blocks: PostBlock[] }) {
  return (
    <div className="w-full max-w-[66.8rem] block leading-7">
      <div className="block max-w-[66.8rem]">
        {blocks.map((block, i) => {
          switch (block.type) {
            case "heading":
              return (
                <h2 key={i} className={HEADING}>
                  {block.text}
                </h2>
              );
            case "list":
              return (
                <ul key={i} className={LIST}>
                  {block.items.map((item, j) => (
                    <li key={j} className={LIST_ITEM}>
                      {item}
                    </li>
                  ))}
                </ul>
              );
            case "quote":
              return (
                <blockquote key={i} className={QUOTE}>
                  {block.text}
                </blockquote>
              );
            case "code":
              return (
                <pre key={i} className={CODE} tabIndex={0}>
                  <code>{block.code}</code>
                </pre>
              );
            default:
              return (
                <p key={i} className={PARAGRAPH}>
                  {block.text}
                </p>
              );
          }
        })}
      </div>
    </div>
  );
}
