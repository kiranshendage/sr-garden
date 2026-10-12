// import ScrollReveal from "./ScrollReveal";

// export default function About() {
//   return (
//     <section className="about">
//       <div className="section-orb"></div>
//       <div className="wrap about-grid">
//         <div>
//           <p className="eyebrow">Who We Are</p>
//           <h2>Two hands, a plan, and plants that are built to last</h2>
//           <p className="body-text">
//             SR Garden Solution designs and builds outdoor spaces the way they&apos;re meant
//             to be lived in — lawns you&apos;ll actually sit on, terrace gardens that survive
//             the rooftop heat, and green walls that make the most of a balcony. Every job
//             carries through from first sketch to years of upkeep, so the space you&apos;re
//             handed keeps its shape.
//           </p>
//           <p className="body-text">
//             Homes, terraces and bungalow plots across Maharashtra come to us for the same
//             reason: a garden that&apos;s planned properly stays beautiful long after
//             installation day.
//           </p>
//         </div>
//         <div className="pillars">
//           <ScrollReveal className="pillar">
//             <span className="num">01</span>
//             <h3>Design</h3>
//             <p>A layout suited to your site&apos;s light, space and how you&apos;ll use it.</p>
//           </ScrollReveal>
//           <ScrollReveal className="pillar">
//             <span className="num">02</span>
//             <h3>Plant</h3>
//             <p>Sourced plants, pots and material, installed to spec.</p>
//           </ScrollReveal>
//           <ScrollReveal className="pillar">
//             <span className="num">03</span>
//             <h3>Irrigate</h3>
//             <p>Drip and sprinkler systems so nothing goes thirsty.</p>
//           </ScrollReveal>
//           <ScrollReveal className="pillar">
//             <span className="num">04</span>
//             <h3>Maintain</h3>
//             <p>Scheduled visits that keep it looking like day one.</p>
//           </ScrollReveal>
//         </div>
//       </div>
//     </section>
//   );
// }

import ScrollReveal from "./ScrollReveal";

const PILLARS = [
  {
    num: "01",
    icon: "#i-trowel",
    title: "Design",
    desc: "A layout suited to your site’s light, space and how you’ll use it.",
  },
  {
    num: "02",
    icon: "#i-sprout",
    title: "Plant",
    desc: "Sourced plants, pots and material, installed to spec.",
  },
  {
    num: "03",
    icon: "#i-drop",
    title: "Irrigate",
    desc: "Drip and sprinkler systems so nothing goes thirsty.",
  },
  {
    num: "04",
    icon: "#i-shears",
    title: "Maintain",
    desc: "Scheduled visits that keep it looking like day one.",
  },
];

const HIGHLIGHTS = [
  { value: "Design → Care", label: "One team, full cycle" },
  { value: "MH-wide", label: "Homes & terraces" },
  { value: "On schedule", label: "Maintenance that shows up" },
];

export default function About() {
  return (
    <section className="ab">
      <div className="ab-orb ab-orb-1" aria-hidden="true" />
      <div className="ab-orb ab-orb-2" aria-hidden="true" />

      <div className="wrap">
        {/* Top: story + visual */}
        <div className="ab-top">
          <div className="ab-copy">
            <p className="eyebrow">Who We Are</p>
            <h2>
              Two hands, a plan, and plants
              <br />
              that are <em>built to last</em>
            </h2>

            <p className="ab-lede">
              SR Garden Solution designs and builds outdoor spaces the way
              they’re meant to be lived in — lawns you’ll actually sit on,
              terrace gardens that survive rooftop heat, and green walls that
              make the most of a balcony.
            </p>
            <p className="ab-body">
              Every job carries through from first sketch to years of upkeep, so
              the space you’re handed keeps its shape. Homes, terraces and
              bungalow plots across Maharashtra come to us for the same reason:
              a garden that’s planned properly stays beautiful long after
              installation day.
            </p>

            <div className="ab-highlights">
              {HIGHLIGHTS.map((h) => (
                <div key={h.label} className="ab-hl">
                  <b>{h.value}</b>
                  <span>{h.label}</span>
                </div>
              ))}
            </div>

            <div className="ab-actions">
              <a href="/about" className="ab-btn ab-btn-primary">
                More about us
              </a>
              <a
                href="https://wa.me/919422080519?text=Hi!%20I%27d%20like%20to%20know%20more%20about%20SR%20Garden."
                target="_blank"
                rel="noopener noreferrer"
                className="ab-btn ab-btn-ghost"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="ab-visual">
            <div className="ab-visual-main">
              <img
                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1000&q=80"
                alt="Garden designed and maintained by SR Garden Solution"
                loading="lazy"
              />
            </div>
            <div className="ab-visual-side">
              <img
                src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=600&q=80"
                alt="Planting detail"
                loading="lazy"
              />
              <div className="ab-visual-card">
                <span className="ab-visual-card-icon">
                  <svg>
                    <use href="#i-check" />
                  </svg>
                </span>
                <div>
                  <b>From sketch to season</b>
                  <span>Design, plant, irrigate, maintain</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pillars */}
        <div className="ab-pillars-head">
          <p className="eyebrow">How we work</p>
          <h3>Four steps. One continuous handoff.</h3>
        </div>

        <div className="ab-pillars">
          {PILLARS.map((p, i) => (
            <ScrollReveal key={p.num} className="ab-pillar">
              <div className="ab-pillar-top">
                <span className="ab-pillar-num">{p.num}</span>
                {i < PILLARS.length - 1 && (
                  <span className="ab-pillar-line" aria-hidden="true" />
                )}
              </div>
              <div className="ab-pillar-icon">
                <svg>
                  <use href={p.icon} />
                </svg>
              </div>
              <h4>{p.title}</h4>
              <p>{p.desc}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}