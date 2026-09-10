"use client";

/**
 * The pricing FAQ.
 *
 * Built on <details>, so every answer is in the markup and readable with scripting
 * unavailable, and so the browser handles the semantics. The only thing this adds is
 * the height transition, which <details> cannot do on its own, and closing siblings
 * when one opens.
 */

import { useRef } from "react";

export default function FaqAccordion({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  const rootRef = useRef<HTMLDivElement>(null);

  const onToggle = (e: React.SyntheticEvent<HTMLDetailsElement>) => {
    if (!e.currentTarget.open) return;
    const root = rootRef.current;
    if (!root) return;
    for (const el of Array.from(root.querySelectorAll("details"))) {
      if (el !== e.currentTarget) el.open = false;
    }
  };

  return (
    <div className="pr-faq" ref={rootRef}>
      {items.map((item) => (
        <details className="pr-faq__item" key={item.question} onToggle={onToggle}>
          <summary>
            <span>{item.question}</span>
            <span className="pr-faq__sign" aria-hidden="true">
              <svg viewBox="0 0 16 16" width="14" height="14" fill="none">
                <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
              </svg>
            </span>
          </summary>
          <div className="pr-faq__body">
            <p>{item.answer}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
