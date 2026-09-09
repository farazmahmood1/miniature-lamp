// Per-instance class overrides, merged onto each component's shared base classes with cn().

export type ListRowStyles = {
  className2: string;
  className?: string;
};
export type TextLinkStyles = {
  className: string;
  className2: string;
};
export type TileStyles = {
  className: string;
  className2: string;
  className3?: string;
};
export type FeatureCardStyles = {
  className: string;
  className2: string;
};
export type ListRow2Styles = {
  className: string;
};

export const ListRow_styles: ListRowStyles[] = [
    { className2: "before:w-[84.5px] before:origin-[42.2578px_17px]" },
    { className2: "before:w-[60.3px] before:origin-[30.1484px_17px]" },
    { className: "underline", className2: "before:w-[60.3px] before:origin-[30.1484px_17px]" },
    { className2: "before:w-[84.5px] before:origin-[42.2578px_17px]" }
];
export const TextLink_styles: TextLinkStyles[] = [
    { className: "h-13.5 flex bg-accent max-lg:hidden", className2: "block" },
    { className: "h-13.5 flex text-color-001 bg-primary max-lg:hidden", className2: "block" },
    { className: "hidden min-w-0 text-color-001 bg-primary md:max-lg:h-10.5 md:max-lg:min-h-10.5 md:max-lg:flex md:max-lg:px-3.5", className2: "inline-block md:max-lg:block" }
];
export const Tile_styles: TileStyles[] = [
    { className: "text-background before:w-[7.7875rem] before:bg-muted-foreground max-lg:before:w-[7.475rem]", className2: "w-[7.7875rem] max-lg:w-[7.475rem]", className3: "whitespace-nowrap" },
    { className: "before:w-[9.2125rem] before:bg-surface max-lg:before:w-[8.8125rem]", className2: "w-[9.2125rem] max-lg:w-[8.8125rem]", className3: "whitespace-nowrap" },
    { className: "before:w-[109.1px] before:bg-surface max-lg:before:w-[6.5625rem]", className2: "w-[109.1px] max-lg:w-[6.5625rem]" },
    { className: "before:w-[174.1px] before:bg-surface max-lg:before:w-[10.3875rem]", className2: "w-[174.1px] md:max-lg:w-[10.3875rem]" },
    { className: "before:w-[8.65rem] before:bg-surface max-lg:before:w-[8.2875rem]", className2: "w-[8.65rem] md:max-lg:w-[8.2875rem]" }
];
export const FeatureCard_styles: FeatureCardStyles[] = [
    { className: "w-[175.5px]", className2: "aspect-[auto_2471/489]" },
    { className: "w-[17.525rem]", className2: "aspect-[auto_415/119]" },
    { className: "w-[151.3px]", className2: "aspect-[auto_900/364]" }
];
export const ListRow2_styles: ListRow2Styles[] = [
    { className: "underline" },
    { className: "hover:underline" },
    { className: "hover:underline" },
    { className: "hover:underline" }
];
