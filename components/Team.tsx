// import ScrollReveal from "./ScrollReveal";

// const TEAM = [
//   { icon: "i-leaf", role: "Founder & Lead Designer", desc: "Plans every project from first site visit through to final planting." },
//   { icon: "i-trowel", role: "Site Supervisor", desc: "Runs installation on site, day to day, start to handover." },
//   { icon: "i-drop", role: "Irrigation Technician", desc: "Fits and services drip and sprinkler systems for every garden type." },
//   { icon: "i-shears", role: "Maintenance Team", desc: "Keeps gardens under contract pruned, fed and looking their best." },
// ];

// export default function Team() {
//   return (
//     <section className="team on-dark">
//       <div className="wrap">
//         <div className="services-head">
//           <p className="eyebrow">Our Team</p>
//           <h2>The People Behind Every Garden</h2>
//           <p>Design, installation and maintenance are handled by our own people — not subcontracted out.</p>
//         </div>
//         <div className="team-grid">
//           {TEAM.map((member) => (
//             <ScrollReveal key={member.role} className="team-card">
//               <div className="team-avatar">
//                 <svg>
//                   <use href={`#${member.icon}`} />
//                 </svg>
//               </div>
//               <h3>{member.role}</h3>
//               <p>{member.desc}</p>
//             </ScrollReveal>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import ScrollReveal from "./ScrollReveal";

const TEAM = [
  {
    name: "Indio Lempira",
    role: "Founder & Lead Designer",
    desc: "Plans every project from first site visit through to final planting.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Florinda Meza",
    role: "Site Supervisor",
    desc: "Runs installation on site, day to day, from start to final handover.",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Chico Morazan",
    role: "Irrigation Technician",
    desc: "Fits and services drip and sprinkler systems for every garden type.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Calamaro Ruiz",
    role: "Maintenance Lead",
    desc: "Keeps gardens under contract pruned, fed and looking their best.",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
  },
];

export default function Team() {
  return (
    <section className="team-y">
      <div className="team-y-top">
        <div className="wrap team-y-head">
          <h2> MEET OUR TEAM </h2>
          <p>The people behind every garden we grow</p>
        </div>
      </div>

      <div className="wrap team-y-grid">
        {TEAM.map((m) => (
          <ScrollReveal key={m.name} className="team-y-card" as="div">
            <div className="team-y-avatar">
              <span className="team-y-ring" aria-hidden="true" />
              <img src={m.img} alt={m.name} loading="lazy" />
            </div>
            <h3>{m.name}</h3>
            <p className="team-y-role">{m.role}</p>
            <p className="team-y-desc">{m.desc}</p>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}