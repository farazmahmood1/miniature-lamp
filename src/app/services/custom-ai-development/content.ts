/**
 * Copy for the Custom AI Development page.
 *
 * Only the rail lives here; this page's cards come from the section markup itself.
 * The shared header and footer supply the navigation the capture used to inline.
 */

/** Sticky rail beside the capability blocks. Anchors into the sections below. */
export type ListRow2DataItem = {
  href: string;
  label: string;
};
export const listRow2Data: ListRow2DataItem[] = [
  { href: "#prototype", label: "Working Prototype" },
  { href: "#multi-tenant", label: "Multi-Tenant" },
  { href: "#cost-control", label: "Cost Control" },
  { href: "#evaluation", label: "Evaluation" },
];
