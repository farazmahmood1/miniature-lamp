// Per-instance class overrides, merged onto each component's shared base classes with cn().

export type ListRowStyles = {
  className: string;
};
export type TextLinkStyles = {
  className: string;
  className2: string;
};

export const ListRow_styles: ListRowStyles[] = [
    { className: "before:w-[84.5px] before:origin-[42.2578px_17px]" },
    { className: "before:w-[60.3px] before:origin-[30.1484px_17px]" },
    { className: "before:w-[60.3px] before:origin-[30.1484px_17px]" },
    { className: "before:w-[84.5px] before:origin-[42.2578px_17px]" }
];
export const TextLink_styles: TextLinkStyles[] = [
    { className: "h-13.5 flex bg-accent max-lg:hidden", className2: "block" },
    { className: "h-13.5 flex text-color-001 bg-primary max-lg:hidden", className2: "block" },
    { className: "hidden min-w-0 text-color-001 bg-primary md:max-lg:h-10.5 md:max-lg:min-h-10.5 md:max-lg:flex md:max-lg:px-3.5", className2: "inline-block md:max-lg:block" }
];
