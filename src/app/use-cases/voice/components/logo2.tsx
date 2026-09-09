import type { ReactNode } from "react";
export type Logo2Data = {
  href: string;
  label: string;
  dataicon: string;
  icon: ReactNode;
};
/** A logo. */
export default function Logo2({ d }: { d: Logo2Data }) {
  return (
    <li className="list-item">
      <a className="inline cursor-pointer" data-component="link" href={d.href} rel="noopener noreferrer" target="_blank">
        {" "}
        <span className="w-px h-px block absolute -m-px overflow-hidden whitespace-nowrap text-nowrap [clip-path:inset(50%)]">
          {d.label}
        </span>
        {" "}
        <span className="inline-block align-middle">
          {" "}
          <svg className="w-auto h-6.5 block overflow-hidden align-middle focus:outline-clr-8 focus:[outline-style:auto] focus:outline-[5px]" data-component="icon" aria-hidden="true" height="1em" viewBox="0 0 26 26" width="1em" focusable="false" data-icon={d.dataicon} fill="currentColor">{d.icon}</svg>
          {" "}
        </span>
        {" "}
      </a>
      {" "}
    </li>
  );
}
