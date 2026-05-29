import { stats } from "../../content";
import { AnimatedNumber } from "../ui/AnimatedNumber";
import { Reveal } from "../ui/Reveal";
import { SplitHeadline } from "../ui/SplitHeadline";

export function AboutStats() {
  return (
    <section className="about-section">
      <div className="section-shell about-grid">
        <Reveal>
          <p className="label">About Us</p>
          <SplitHeadline text="Precision manufacturing for a demanding world." italic="demanding" />
          <p>
            PT Korin Technomic is a specialized manufacturer of plastic injection components, serving the footwear,
            industrial, and consumer goods sectors across Indonesia and beyond. With state-of-the-art machinery and a
            skilled engineering team, we deliver components that meet demanding specifications.
          </p>
          <a href="#workflow" className="text-link">Learn More <span>-&gt;</span></a>
        </Reveal>
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.06}>
              <article className="stat-card">
                <strong><AnimatedNumber value={stat.numeric} suffix={stat.suffix} /></strong>
                <span>{stat.label}</span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
