// import ScrollReveal from "./ScrollReveal";

// export default function Services() {
//   return (
//     <section className="services on-dark">
//       <div className="section-orb"></div>
//       <div className="section-orb o2"></div>
//       <div className="wrap">
//         <div className="services-head">
//           <p className="eyebrow">Our Services</p>
//           <h2>What We Grow For You</h2>
//           <p>From a single vertical wall to a full bungalow garden under contract — eleven services, one team, start to finish.</p>
//         </div>

//         <div className="services-grid">
//       <ScrollReveal className="service-card">
//         <div className="icon-badge">
//           <svg><use href="#i-trowel"/></svg>
//         </div>
//         <h3>Landscape Services</h3>
//         <p>Full design and build for lawns, pathways and outdoor living areas.</p>
//       </ScrollReveal>
//       <ScrollReveal className="service-card">
//         <div className="icon-badge">
//           <svg><use href="#i-sprout"/></svg>
//         </div>
//         <h3>Garden Development</h3>
//         <p>From bare plot to blooming garden, planned and planted end to end.</p>
//       </ScrollReveal>
//       <ScrollReveal className="service-card">
//         <div className="icon-badge">
//           <svg><use href="#i-cart"/></svg>
//         </div>
//         <h3>Garden Material Supply</h3>
//         <p>Soil, compost, mulch and hardscape material delivered ready to use.</p>
//       </ScrollReveal>
//       <ScrollReveal className="service-card">
//         <div className="icon-badge">
//           <svg><use href="#i-wall"/></svg>
//         </div>
//         <h3>Vertical Garden / Green Wall</h3>
//         <p>Living walls that bring a garden to spaces with no ground to plant in.</p>
//       </ScrollReveal>
//       <ScrollReveal className="service-card">
//         <div className="icon-badge">
//           <svg><use href="#i-drop"/></svg>
//         </div>
//         <h3>Irrigation</h3>
//         <p>Drip and sprinkler systems that keep every bed watered on schedule.</p>
//       </ScrollReveal>
//       <ScrollReveal className="service-card">
//         <div className="icon-badge">
//           <svg><use href="#i-shears"/></svg>
//         </div>
//         <h3>Garden Maintenance</h3>
//         <p>Regular pruning, feeding and upkeep so the garden stays at its best.</p>
//       </ScrollReveal>
//       <ScrollReveal className="service-card">
//         <div className="icon-badge">
//           <svg><use href="#i-pot"/></svg>
//         </div>
//         <h3>Ready-to-Use Pots &amp; Mixing Media</h3>
//         <p>Pre-mixed growing media and pots, ready to plant straight out of the bag.</p>
//       </ScrollReveal>
//       <ScrollReveal className="service-card">
//         <div className="icon-badge">
//           <svg><use href="#i-plant"/></svg>
//         </div>
//         <h3>All Types of Plants &amp; Pots Supply</h3>
//         <p>A full range of plants and pots sourced and delivered to site.</p>
//       </ScrollReveal>
//       <ScrollReveal className="service-card">
//         <div className="icon-badge">
//           <svg><use href="#i-terrace"/></svg>
//         </div>
//         <h3>Terrace Garden Maintenance</h3>
//         <p>Upkeep built for rooftop conditions — wind, heat and drainage.</p>
//       </ScrollReveal>
//       <ScrollReveal className="service-card">
//         <div className="icon-badge">
//           <svg><use href="#i-bungalow"/></svg>
//         </div>
//         <h3>Bungalow Garden Maintenance</h3>
//         <p>Ongoing care for larger home gardens, on a schedule that suits you.</p>
//       </ScrollReveal>
//       <ScrollReveal className="service-card">
//         <div className="icon-badge">
//           <svg><use href="#i-tree"/></svg>
//         </div>
//         <h3>Tree Cutting &amp; Transplantation</h3>
//         <p>Safe pruning, removal and relocation of trees and mature plants.</p>
//       </ScrollReveal>
//         </div>
//       </div>
//     </section>
//   );
// }
import ScrollReveal from "./ScrollReveal";

const SERVICES = [
  {
    title: "Integrative System Services",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc bibendum incidunt et labore et dolore magna.",
    img: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=900&q=80",
    icon: "#i-trowel",
  },
  {
    title: "Garden Installation & Planting",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc bibendum incidunt et labore et dolore magna.",
    img: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80",
    icon: "#i-sprout",
  },
  {
    title: "Tree & Shrub Care",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc bibendum incidunt et labore et dolore magna.",
    img: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=900&q=80",
    icon: "#i-tree",
  },
  {
    title: "Lawn Care & Maintenance",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc bibendum incidunt et labore et dolore magna.",
    img: "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=900&q=80",
    icon: "#i-shears",
  },
  {
    title: "Outdoor Living Spaces",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc bibendum incidunt et labore et dolore magna.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
    icon: "#i-terrace",
  },
  {
    title: "Seasonal Garden Maintenance",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc bibendum incidunt et labore et dolore magna.",
    img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=900&q=80",
    icon: "#i-plant",
  },
];

export default function Services() {
  return (
    <section className="sv3">
      <div className="sv3-orb sv3-orb-1" aria-hidden="true" />
      <div className="sv3-orb sv3-orb-2" aria-hidden="true" />

      <div className="wrap">
        <div className="sv3-head">
          <p className="sv3-eyebrow">Services</p>
          <h2>
            Complete Landscaping Services
            <br />
            for Every Garden Dream
          </h2>
          <p className="sv3-lede">
            From design to daily care — we plan, plant and maintain gardens for
            homes, terraces and estates. One team, one call, start to finish.
          </p>
        </div>

        <div className="sv3-grid">
          {SERVICES.map((s) => (
            <ScrollReveal key={s.title} className="sv3-card">
              <div className="sv3-card-header">
                <span className="sv3-card-icon">
                  <svg>
                    <use href={s.icon} />
                  </svg>
                </span>
                <h3>{s.title}</h3>
              </div>

              <div className="sv3-card-image">
                <img src={s.img} alt={s.title} loading="lazy" />
              </div>

              <div className="sv3-card-body">
                <p>{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}