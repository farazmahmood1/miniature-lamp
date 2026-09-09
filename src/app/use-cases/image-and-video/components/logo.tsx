import type { ReactNode } from "react";
import type { LogoStyles } from "../_styles";
export type LogoData = {
  icon: ReactNode;
  kind?: string;
};
/** A logo. */
export default function Logo({ d, styles }: { d: LogoData; styles: LogoStyles }) {
  return (
    <div className={styles.className}>
      <div className={styles.className2}>
        <svg className={styles.className3} aria-hidden="true" fill="none" height="222" viewBox="0 0 222 222" width="222" xmlns="http://www.w3.org/2000/svg" data-component={d.kind}>{d.icon}</svg>
        {" "}
      </div>
      {" "}
    </div>
  );
}
