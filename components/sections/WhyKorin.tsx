import { whyKorin } from "../../content";
import { Reveal } from "../ui/Reveal";
import { SplitHeadline } from "../ui/SplitHeadline";

export function WhyKorin() {
  return (
    <section id="capabilities" className="why-section">
      <div className="section-shell">
        <Reveal className="section-heading">
          <p className="label">Why Choose Us</p>
          <SplitHeadline text="The Korin Advantage." italic="Advantage" />
        </Reveal>
        <div className="why-grid">
          {whyKorin.map((item, index) => {
            const Icon = item.Icon;
            return (
              <Reveal key={item.title} delay={index * 0.04}>
                <article className="why-card">
                  <Icon size={40} aria-hidden="true" />
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
