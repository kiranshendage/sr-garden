"use client";

const WA_NUMBER = "919422080519";

function waLink(msg) {
  return (
    "https://wa.me/" +
    WA_NUMBER +
    "?text=" +
    encodeURIComponent(String(msg))
  );
}

const IMAGES = {
  typical:
    "https://images.unsplash.com/photo-1463320726281-696a485928c7?auto=format&fit=crop&w=1200&q=80",
  sun: [
    "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1459411552884-841db9b3aa2f?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80",
  ],
  replace: [
    "https://images.unsplash.com/photo-1466781783364-36c955e42a7f?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1463936573439-b112db2e8c0a?auto=format&fit=crop&w=400&q=80",
  ],
};

const PLANS = [
  {
    name: "Sapplo Mini (10 Plants)",
    tag: "Petite, compact & perfect for small spaces.",
    features: [
      "10 mixed plants",
      "10 aesthetic planters",
      "Soil + coco peat",
      "2 visits/month for pruning & health care",
      "Free replacements *",
    ],
    monthly: "₹1,850",
    quarterly: "₹4,825",
    note: "Deposit: ₹3,500 (refundable)",
  },
  {
    name: "Sapplo Bloom (15 Plants)",
    tag: "Lush, colourful & vibrant statement.",
    features: [
      "15 plants (Flowering + Foliage + Herbs mix)",
      "15 planters",
      "Soil + coco peat",
      "2 visits/month + grooming & pest care",
      "Free replacements *",
    ],
    monthly: "₹2,650",
    quarterly: "₹6,825",
    note: "Deposit: ₹5,000 (refundable)",
  },
];

const WHY = [
  {
    title: "Zero Upfront Cost",
    desc: "Skip the heavy one-time spend and start green today.",
    icon: "#i-sprout",
  },
  {
    title: "Guaranteed Plant Health",
    desc: "Trained visits, nutrition and great-looking foliage every week.",
    icon: "#i-shears",
  },
  {
    title: "Free Plant Replacement",
    desc: "We swap tired or damaged plants — on plan terms.",
    icon: "#i-plant",
  },
];

const TYPICAL = [
  { key: "Foliage", value: "ZZ, Aglaonema, Syngonium, Money Plant" },
  { key: "Structural", value: "Areca Palm, Yucca" },
  { key: "Flowering", value: "Anthurium, Bougainvillea" },
  { key: "Season plants", value: "Tulasi, Jamun, Marigold, Kalanchoe" },
];

const LIGHT = [
  { label: "Low Light", plants: "ZZ, Aglaonema, Syngonium" },
  { label: "Bright Light", plants: "Yucca, Areca, Bougainvillea" },
  { label: "Filtered Sun", plants: "Fiddle Leaf Fig, Anthurium" },
];

const REPLACEMENT = [
  "Free replacement for natural decline, disease or injury",
  "Chargeable if damaged due to pets, no sunlight, breakage or self-moving",
  "Moving feature: Sapplo shifts your garden safely",
  "Deposit: fully refundable after adjustments (if any)",
];

export default function RentAGarden() {
  return (
    <main className="rg-page">
      <section className="rg-hero">
        <div className="rg-hero-overlay" aria-hidden="true" />
        <div className="wrap rg-hero-inner">
          <p className="eyebrow rg-hero-eyebrow">Rent a Garden</p>
          <h1>Rent a Balcony Garden</h1>
          <p className="rg-hero-sub">
            With Sapplo, your balcony becomes more than a corner — it becomes
            your own low-lift sanctuary. Where nature grows closer, less
            watering and more time.
          </p>
          <div className="rg-hero-actions">
            <a
              className="rg-btn rg-btn-primary"
              href={waLink("Hi! I'd like to start with 10 Plants (Sapplo Mini).")}
              target="_blank"
              rel="noopener noreferrer"
            >
              Start with 10 Plants
            </a>
            <a
              className="rg-btn rg-btn-ghost"
              href={waLink("Hi! I'd like to start with 15 Plants (Sapplo Bloom).")}
              target="_blank"
              rel="noopener noreferrer"
            >
              Start with 15 Plants
            </a>
          </div>
        </div>
      </section>

      {/* <section className="rg-plans">
        <div className="wrap">
          <h2 className="rg-section-title">Sapplo Plans</h2>
          <div className="rg-plans-grid">
            {PLANS.map((p) => (
              <article key={p.name} className="rg-plan-card">
                <h3>{p.name}</h3>
                <p className="rg-plan-tag">{p.tag}</p>
                <ul className="rg-plan-features">
                  {p.features.map((f) => (
                    <li key={f}>
                      <span className="rg-leaf">▸</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="rg-plan-price">
                  <span>
                    <strong>{p.monthly}</strong> / MONTH
                  </span>
                  <span className="rg-price-divide">•</span>
                  <span>
                    <strong>{p.quarterly}</strong> / 3 MO.
                  </span>
                </div>
                <p className="rg-plan-note">{p.note}</p>
                <a
                  className="rg-book"
                  href={waLink("Hi! I'd like to book the " + p.name + " plan.")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Now
                </a>
              </article>
            ))}
          </div>
        </div>
      </section> */}

      <section className="rg-why">
        <div className="wrap">
          <h2 className="rg-section-title">Why Rent a Garden</h2>
          <div className="rg-why-grid">
            {WHY.map((w) => (
              <div key={w.title} className="rg-why-card">
                <div className="rg-why-icon">
                  <svg>
                    <use href={w.icon} />
                  </svg>
                </div>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rg-typical">
        <div className="wrap rg-typical-grid">
          <div className="rg-typical-image">
            <img src={IMAGES.typical} alt="Assorted balcony plants" />
          </div>
          <div className="rg-typical-copy">
            <h2 className="rg-section-title rg-left">Typical Plants</h2>
            <ul className="rg-typical-list">
              {TYPICAL.map((t) => (
                <li key={t.key}>
                  <strong>{t.key}:</strong> {t.value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="rg-sun">
        <div className="wrap">
          <h2 className="rg-section-title">Sunlight Guide</h2>
          <div className="rg-sun-grid">
            {LIGHT.map((l, i) => (
              <div key={l.label} className="rg-sun-card">
                <img src={IMAGES.sun[i]} alt={l.label + " plants"} />
                <div className="rg-sun-body">
                  <h4>{l.label}</h4>
                  <p>{l.plants}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rg-replace">
        <div className="wrap rg-replace-grid">
          <div>
            <h2 className="rg-section-title rg-left">
              Replacement &amp; Deposit
            </h2>
            <ul className="rg-replace-list">
              {REPLACEMENT.map((r) => (
                <li key={r}>
                  <span className="rg-leaf">▸</span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rg-replace-gallery">
            {IMAGES.replace.map((src, i) => (
              <img key={src} src={src} alt={"Garden detail " + (i + 1)} />
            ))}
          </div>
        </div>
      </section>

      <section className="rg-cta">
        <div className="wrap">
          <p className="rg-cta-eyebrow">Sapplo Rent a Garden</p>
          <h2>
            Bring home a beautiful balcony garden — without buying anything
          </h2>
          <a
            className="rg-cta-btn"
            href={waLink("Hi! I'd like to book a Sapplo Rent a Garden setup.")}
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a Garden Setup
          </a>
        </div>
      </section>
    </main>
  );
}