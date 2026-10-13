import React from "react";
import ScrollReveal from "./ScrollReveal";

const SERVICES = [
  {
    title: "Landscape Services",
    desc: "End-to-end landscape design and execution for homes, estates, and commercial spaces.",
    img: "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=800&q=80",
    icon: "#i-trowel",
  },
  {
    title: "Garden Development",
    desc: "From bare ground to a thriving garden. Layout, soil prep, and custom planting schemes.",
    img: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=800&q=80",
    icon: "#i-sprout",
  },
  {
    title: "Garden Material Supply",
    desc: "Quality soil, mulch, stones, pots, and garden essentials delivered straight to your site.",
    img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80",
    icon: "#i-plant",
  },
  {
    title: "Vertical Garden / Green Wall",
    desc: "Living walls and vertical gardens for balconies, facades, and indoor spaces.",
    img: "https://images.unsplash.com/photo-1533038590840-1cbea676a5eb?auto=format&fit=crop&w=800&q=80",
    icon: "#i-terrace",
  },
  {
    title: "Irrigation Systems",
    desc: "Smart drip and sprinkler systems designed for automatic and water-efficient care.",
    img: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=800&q=80",
    icon: "#i-shears",
  },
  {
    title: "Garden Maintenance",
    desc: "Regular upkeep, pruning, feeding, and seasonal care so your garden stays healthy.",
    img: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80",
    icon: "#i-tree",
  },
  {
    title: "Green Wall Pots & Media",
    desc: "Pre-filled green wall pots and custom soil mixes formulated for vertical plants.",
    img: "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?auto=format&fit=crop&w=800&q=80",
    icon: "#i-plant",
  },
  {
    title: "Plant Pots Supply",
    desc: "Ceramic, terracotta, fiber, and designer pots matched to your style and space.",
    img: "https://images.unsplash.com/photo-1485955900004-4bfe574ae70c?auto=format&fit=crop&w=800&q=80",
    icon: "#i-sprout",
  },
  {
    title: "Terrace Garden Care",
    desc: "Specialist upkeep for rooftop gardens, container care, and waterproofing awareness.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    icon: "#i-terrace",
  },
  {
    title: "Bungalow Garden Care",
    desc: "Complete garden care for villas and estates — lawns, borders, and trees.",
    img: "https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=800&q=80",
    icon: "#i-tree",
  },
  {
    title: "Tree Cutting & Relocation",
    desc: "Safe pruning, felling, and professional tree moving with proper equipment and care.",
    img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80",
    icon: "#i-shears",
  },
  {
    title: "Tree Replantation",
    desc: "Expert replanting of trees with root-ball protection, soil prep, and aftercare for high survival rates.",
    img: "https://images.unsplash.com/photo-1542601098-3add4deb2f21?auto=format&fit=crop&w=800&q=80",
    icon: "#i-sprout",
  },
];

export default function Services() {
  return (
    <section className="sv3-section">
      <div className="sv3-orb sv3-orb-1" aria-hidden="true" />
      <div className="sv3-orb sv3-orb-2" aria-hidden="true" />

      <div className="sv3-wrap">
        <div className="sv3-head">
          <span className="sv3-eyebrow">Our Services</span>
          <h2 className="sv3-title">
            Complete Landscaping Services
            <br className="sv3-br" />
            for Every Garden Dream
          </h2>
          <p className="sv3-lede">
            From design to daily care — we plan, plant, and maintain gardens for
            homes, terraces, and estates.
          </p>
        </div>

        <div className="sv3-grid">
          {SERVICES.map((s) => (
            <ScrollReveal key={s.title} className="sv3-card">
              <div className="sv3-card-image">
                <img src={s.img} alt={s.title} loading="lazy" />
                <div className="sv3-card-icon">
                  <svg aria-hidden="true">
                    <use href={s.icon} />
                  </svg>
                </div>
              </div>

              <div className="sv3-card-body">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}