import type { ReactNode } from "react";
export type Logo3Data = {
  href: string;
  label: string;
  dataicon: string;
  icon: ReactNode;
};
/** A logo. */
export default function Logo3({ d, cids }: { d: Logo3Data; cids: string[] }) {
  return (
    <li data-cid={cids[0]} className="list-item">
      <a data-cid={cids[1]} className="inline cursor-pointer" data-component="link" href={d.href} rel="noopener noreferrer" target="_blank">
        {" "}
        <span data-cid={cids[2]} className="w-px h-px block absolute -m-px overflow-hidden whitespace-nowrap text-nowrap [clip-path:inset(50%)]">
          {d.label}
        </span>
        {" "}
        <span data-cid={cids[3]} className="inline-block align-middle">
          {" "}
          <svg data-cid={cids[4]} className="w-auto h-6.5 block overflow-hidden align-middle focus:outline-clr-9 focus:[outline-style:auto] focus:outline-[5px]" data-component="icon" aria-hidden="true" height="1em" viewBox="0 0 26 26" width="1em" focusable="false" data-icon={d.dataicon} fill="currentColor">{d.icon}</svg>
          {" "}
        </span>
        {" "}
      </a>
      {" "}
    </li>
  );
}
