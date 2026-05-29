import { marqueeItems } from "../../content";

export function MarqueeText() {
  const copy = [...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <section className="marquee-bar" aria-label="Manufacturing capabilities">
      <div className="marquee-track">
        {copy.map((item, index) => (
          <span key={`${item}-${index}`}>{item}</span>
        ))}
      </div>
    </section>
  );
}
