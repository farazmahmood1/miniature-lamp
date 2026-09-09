export type FeatureCardData = {
  title: string;
  text: string;
  text2: string;
  text3: string;
};
/** A feature card. */
export default function FeatureCard({ d }: { d: FeatureCardData }) {
  return (
    <div className="grid gap-5 grid-cols-12">
      <div className="block col-start-[span_6] col-end-[span_6]">
        <h2 className="block text-[1.0625rem] font-normal leading-[1.4375rem] tracking-[0.17px]" data-component="heading">
          {d.title}
        </h2>
        {" "}
      </div>
      {" "}
      <div className="flex justify-center col-start-[span_2] col-end-[span_2] text-muted-foreground text-center">
        {d.text}
      </div>
      <div className="flex justify-center col-start-[span_2] col-end-[span_2] text-muted-foreground text-center">
        {d.text2}
      </div>
      <div className="flex justify-center col-start-[span_2] col-end-[span_2] text-muted-foreground text-center">
        {d.text3}
      </div>
      {" "}
    </div>
  );
}
