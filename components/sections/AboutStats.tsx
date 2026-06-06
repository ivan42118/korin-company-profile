import { stats } from "../../content";
import { AnimatedNumber } from "../ui/AnimatedNumber";
import { Reveal } from "../ui/Reveal";
import { SplitHeadline } from "../ui/SplitHeadline";

export function AboutStats() {
  return (
    <>
      <section id="stats" className="stats-section">
        <div className="section-shell">
          <Reveal className="stats-section__header">
            <div>
              <p className="label">Manufacturing Snapshot</p>
              <h2>Built for precise production.</h2>
            </div>
            <p>
              A quick look at Korin&apos;s production capacity, process coverage, quality control, and response rhythm.
            </p>
          </Reveal>

          <div className="stats-section__grid">
            {stats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 0.06}>
                <article className="stat-card">
                  <span className="stat-card__index">{String(index + 1).padStart(2, "0")}</span>
                  <strong><AnimatedNumber value={stat.numeric} suffix={stat.suffix} /></strong>
                  <span className="stat-card__label">{stat.label}</span>
                  <p>{stat.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
        <Reveal className="section-shell about-grid">
          <div className="about-grid__lead">
            <p className="label">About Us</p>
            <SplitHeadline text="Precision manufacturing for a demanding world." />
          </div>
          <div className="about-grid__body">
            <p>
              PT Korin Technomic is a specialized manufacturer of plastic injection components, serving the footwear,
              industrial, and consumer goods sectors across Indonesia and beyond. With state-of-the-art machinery and a
              skilled engineering team, we deliver components that meet demanding specifications.
            </p>
            <div className="about-grid__facts">
              <div>
                <strong>1999</strong>
                <span>Established</span>
              </div>
              <div>
                <strong>2</strong>
                <span>Production plants</span>
              </div>
              <div>
                <strong>10+</strong>
                <span>Machine types</span>
              </div>
            </div>
            <a href="#machines" className="text-link">View Machines <span>-&gt;</span></a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
