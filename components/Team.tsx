// // import ScrollReveal from "./ScrollReveal";

// // const TEAM = [
// //   {
// //     name: "Calamaro Ruiz",
// //     role: "Maintenance Lead",
// //     desc: "Keeps gardens under contract pruned, fed and looking their best.",
// //     img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
// //   },
// // ];

// // export default function Team() {
// //   return (
// //     <section className="team-y">
// //       <div className="team-y-top">
// //         <div className="wrap team-y-head">
// //           <h2> MEET OUR TEAM </h2>
// //           <p>The people behind every garden we grow</p>
// //         </div>
// //       </div>

// //       <div className="wrap team-y-grid">
// //         {TEAM.map((m) => (
// //           <ScrollReveal key={m.name} className="team-y-card" as="div">
// //             <div className="team-y-avatar">
// //               <span className="team-y-ring" aria-hidden="true" />
// //               <img src={m.img} alt={m.name} loading="lazy" />
// //             </div>
// //             <h3>{m.name}</h3>
// //             <p className="team-y-role">{m.role}</p>
// //             <p className="team-y-desc">{m.desc}</p>
// //           </ScrollReveal>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // }

// import ScrollReveal from "./ScrollReveal";

// const FOUNDER = {
//   name: "Kiran Shendage",
//   role: "Founder & CEO",
//   desc: "Passionate about creating beautiful green spaces and delivering quality gardening solutions.",
//   img: "/founder.jpg",
// };

// export default function Team() {
//   return (
//     <section className="team-y">
//       <div className="team-y-top">
//         <div className="wrap team-y-head">
//           <h2>MEET OUR FOUNDER</h2>
//           <p>The vision and passion behind SR Garden Solution</p>
//         </div>
//       </div>

//       <div className="wrap team-y-grid">
//         <ScrollReveal
//           className="team-y-card"
//           as="div"
//         >
//           <div className="team-y-avatar">
//             <span
//               className="team-y-ring"
//               aria-hidden="true"
//             />
//             <img
//               src={FOUNDER.img}
//               alt={FOUNDER.name}
//               loading="lazy"
//             />
//           </div>

//           <h3>{FOUNDER.name}</h3>
//           <p className="team-y-role">{FOUNDER.role}</p>
//           <p className="team-y-desc">{FOUNDER.desc}</p>
//         </ScrollReveal>
//       </div>
//     </section>
//   );
// }


// import ScrollReveal from "./ScrollReveal";

// const DEFAULT_FOUNDER = {
//   name: "",
//   role: "Founder & CEO",
//   desc: "Passionate about creating beautiful green spaces and delivering quality gardening solutions.",
//   img: "/founder.jpg",
// };

// export default function Team({ founder = DEFAULT_FOUNDER }) {
//   return (
//     <section className="team-y" aria-labelledby="team-heading">
//       <div className="team-y-top">
//         <div className="wrap team-y-head">
//           <span className="team-y-badge">Leadership</span>
//           <h2 id="team-heading">MEET OUR FOUNDER</h2>
//           <p>The vision and passion behind SR Garden Solution</p>
//         </div>
//       </div>

//       <div className="wrap team-y-grid">
//         <ScrollReveal className="team-y-card" as="article">
//           <div className="team-y-avatar">
//             <span className="team-y-ring" aria-hidden="true" />
//             <img
//               src={founder.img}
//               alt={`${founder.name} - ${founder.role}`}
//               loading="lazy"
//               decoding="async"
//             />
//           </div>

//           <div className="team-y-content">
//             <h3>{founder.name}</h3>
//             <p className="team-y-role">{founder.role}</p>
//             <p className="team-y-desc">{founder.desc}</p>
//           </div>
//         </ScrollReveal>
//       </div>
//     </section>
//   );
// }


import ScrollReveal from "./ScrollReveal";
/* =========================================================
   EDIT ALL FOUNDER CONTENT HERE
   ========================================================= */
const FOUNDER = {
  name: "", // e.g. "Kiran Shendage" (leave empty to hide)
  role: "Founder & CEO",
  company: "SR Garden Solution",
  tagline: "Turning ordinary spaces into living, breathing gardens.",
  img: "/founder.jpg",

  bio: [
    "Passionate about creating beautiful green spaces and delivering quality gardening solutions, our founder started SR Garden Solution with a simple belief: every home and workplace deserves a touch of nature.",
    "With years of hands-on experience in landscaping, plant care, and garden design, he leads every project with attention to detail, honest advice, and a commitment to long-lasting results.",
  ],

  quote:
    "A garden is not just plants and soil. It is a place where people slow down, breathe, and feel at home. That is what we build for every client.",

  stats: [
    { value: "10+", label: "Years Experience" },
    { value: "500+", label: "Projects Completed" },
    { value: "450+", label: "Happy Clients" },
    { value: "25+", label: "Expert Team" },
  ],

  expertise: [
    { icon: "🌳", title: "Landscape Design", text: "Custom layouts that balance beauty, function, and budget." },
    { icon: "🌿", title: "Vertical Gardens", text: "Green walls for homes, offices, and commercial spaces." },
    { icon: "🏡", title: "Terrace Gardens", text: "Lightweight, waterproof rooftop garden setups." },
    { icon: "💧", title: "Irrigation Systems", text: "Drip and sprinkler systems that save water and time." },
    { icon: "🌱", title: "Lawn & Turf", text: "Natural and artificial lawn installation and care." },
    { icon: "✂️", title: "Garden Maintenance", text: "Regular upkeep so your garden stays healthy all year." },
  ],

  journey: [
    { year: "2014", title: "The Beginning", text: "Started working in nurseries and landscaping, learning plant care from the ground up." },
    { year: "2017", title: "First Big Projects", text: "Designed and executed residential gardens and society landscaping projects." },
    { year: "2020", title: "SR Garden Solution Founded", text: "Launched the company to offer complete, reliable gardening services under one roof." },
    { year: "Today", title: "Growing Strong", text: "Serving homes, offices, and commercial clients with a dedicated expert team." },
  ],

  values: [
    { title: "Quality First", text: "Healthy plants, durable materials, and work done right the first time." },
    { title: "Sustainability", text: "Eco-friendly practices, water-saving systems, and native plants." },
    { title: "Client Trust", text: "Transparent pricing, honest advice, and on-time delivery." },
  ],

  contact: {
    phone: "+919422080519", // replace with real number
    whatsapp: "919422080519", // country code + number, no "+"
    email: "info@srgardensolution.com",
  },
};

/* ========================================================= */

export default function Team({ founder = FOUNDER }) {
  const altText = founder.name
    ? `${founder.name}, ${founder.role} of ${founder.company}`
    : `${founder.role} of ${founder.company}`;

  return (
    <section className="fp" aria-labelledby="fp-heading">
      {/* ================= HERO BANNER ================= */}
      <div className="fp-hero">
        <div className="wrap fp-hero-inner">
          <span className="fp-badge">Leadership</span>
          <h2 id="fp-heading">MEET OUR FOUNDER</h2>
          <p>The vision and passion behind {founder.company}</p>
        </div>
      </div>

      {/* ================= FOUNDER PROFILE CARD ================= */}
      <div className="wrap fp-card-wrap">
        <ScrollReveal as="article" className="fp-card">
          {/* Photo side */}
          <div className="fp-photo">
            <div className="fp-avatar">
              <span className="fp-ring" aria-hidden="true" />
              <img src={founder.img} alt={altText} loading="lazy" decoding="async" />
              <span className="fp-exp-chip">
                <strong>{founder.stats[0]?.value}</strong>
                <small>Years</small>
              </span>
            </div>
          </div>

          {/* Content side */}
          <div className="fp-info">
            <p className="fp-role">{founder.role}</p>
            {founder.name && <h3 className="fp-name">{founder.name}</h3>}
            <p className="fp-tagline">{founder.tagline}</p>
            <span className="fp-line" aria-hidden="true" />

            {founder.bio.map((para, i) => (
              <p key={i} className="fp-bio">
                {para}
              </p>
            ))}

            <div className="fp-actions">
              <a href={`tel:${founder.contact.phone}`} className="fp-btn fp-btn-primary">
                Call Now
              </a>
              <a
                href={`https://wa.me/${founder.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="fp-btn fp-btn-outline"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* ================= STATS ================= */}
      <div className="wrap">
        <ScrollReveal as="div" className="fp-stats">
          {founder.stats.map((s) => (
            <div key={s.label} className="fp-stat">
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </ScrollReveal>
      </div>

      {/* ================= QUOTE ================= */}
      <div className="wrap">
        <ScrollReveal as="blockquote" className="fp-quote">
          <span className="fp-quote-mark" aria-hidden="true">“</span>
          <p>{founder.quote}</p>
          {/* <footer>
            {founder.name ? `${founder.name}, ` : ""}
            {founder.role}
          </footer> */}
        </ScrollReveal>
      </div>

     

      {/* ================= JOURNEY / TIMELINE ================= */}
      <div className="wrap fp-section">
        <div className="fp-section-head">
          <span className="fp-eyebrow">Experience</span>
          <h3>The Journey So Far</h3>
        </div>

        <ol className="fp-timeline">
          {founder.journey.map((step) => (
            <ScrollReveal as="li" key={step.year + step.title} className="fp-step">
              <span className="fp-step-dot" aria-hidden="true" />
              <span className="fp-step-year">{step.year}</span>
              <h4>{step.title}</h4>
              <p>{step.text}</p>
            </ScrollReveal>
          ))}
        </ol>
      </div>

      {/* ================= VALUES ================= */}
      <div className="wrap fp-section">
        <div className="fp-section-head">
          <span className="fp-eyebrow">Our Promise</span>
          <h3>Values That Guide Every Project</h3>
        </div>

        <div className="fp-values">
          {founder.values.map((v, i) => (
            <ScrollReveal as="div" key={v.title} className="fp-value">
              <span className="fp-value-num">{String(i + 1).padStart(2, "0")}</span>
              <h4>{v.title}</h4>
              <p>{v.text}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* ================= CTA ================= */}
      <div className="wrap">
        <ScrollReveal as="div" className="fp-cta">
          <div>
            <h3>Let's Build Your Dream Garden</h3>
            <p>Talk directly with our team for a free consultation and site visit.</p>
          </div>
          {/* <div className="fp-cta-actions">
            <a href={`tel:${founder.contact.phone}`} className="fp-btn fp-btn-white">
              Book Free Consultation
            </a>
            <a href={`mailto:${founder.contact.email}`} className="fp-btn fp-btn-ghost">
              Email Us
            </a>
          </div> */}
        </ScrollReveal>
      </div>
    </section>
  );
}