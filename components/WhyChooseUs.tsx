import ScrollReveal from "./ScrollReveal";

const REASONS = [
  {
    num: "01",
    icon: "#i-sprout",
    title: "One team, every stage",
    desc: "The people who design your garden are the same people who plant, wire and maintain it.",
  },
  {
    num: "02",
    icon: "#i-terrace",
    title: "Built for Indian rooftops & balconies",
    desc: "Terrace and vertical garden work accounts for heat, wind and drainage from day one.",
  },
  {
    num: "03",
    icon: "#i-shears",
    title: "Maintenance that's actually scheduled",
    desc: "Ongoing care plans, not a one-time visit that's forgotten by the next season.",
  },
  {
    num: "04",
    icon: "#i-cart",
    title: "Everything sourced in-house",
    desc: "Plants, pots, soil and hardscape material — supplied and delivered by us.",
  },
];

const STATS = [
  { value: "10+", label: "Years of experience" },
  { value: "500+", label: "Gardens delivered" },
  { value: "11", label: "Services in-house" },
  { value: "100%", label: "Scheduled care visits" },
];

export default function WhyChooseUs() {
  return (
    <section className="why2 on-dark">
      <div className="why2-orb why2-orb-1" aria-hidden="true" />
      <div className="why2-orb why2-orb-2" aria-hidden="true" />

      <div className="wrap">
        {/* Top: copy + image */}
        <div className="why2-top">
          <div className="why2-copy">
            <p className="eyebrow">Why SR Garden Solution</p>
            <h2>
              Built for the <em>long run</em>,<br />
              not just installation day
            </h2>
            <p className="why2-lede">
              Most gardens fail after handover. Ours don't — because the same
              team that plans your space keeps it healthy, season after season.
            </p>

            <a
              className="why2-cta"
              href="https://wa.me/919422080519?text=Hi!%20I%27d%20like%20to%20discuss%20my%20garden."
              target="_blank"
              rel="noopener noreferrer"
            >
              Talk to our team
              <svg viewBox="0 0 20 20" aria-hidden="true">
                <path
                  d="M4 10h11m0 0-4-4m4 4-4 4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          <div className="why2-visual">
            <img
              src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=900&q=80"
              alt="Lush maintained garden"
              loading="lazy"
            />
            <div className="why2-visual-badge">
              <b>Season-proof</b>
              <span>care plans included</span>
            </div>
          </div>
        </div>

        {/* Reason cards */}
        <div className="why2-grid">
          {REASONS.map((r) => (
            <ScrollReveal key={r.num} className="why2-card">
              <span className="why2-num">{r.num}</span>
              <div className="why2-icon">
                <svg>
                  <use href={r.icon} />
                </svg>
              </div>
              <h3>{r.title}</h3>
              <p>{r.desc}</p>
            </ScrollReveal>
          ))}
        </div>

        {/* Stats band */}
        <div className="why2-stats">
          {STATS.map((s) => (
            <div key={s.label} className="why2-stat">
              <b>{s.value}</b>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}