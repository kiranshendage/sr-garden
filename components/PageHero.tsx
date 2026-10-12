// interface PageHeroProps {
//   eyebrow?: string;
//   title: string;
//   subtitle?: string;
// }

// /**
//  * Compact inner-page banner — title only.
//  * Background matches Testimonials (cream-dim).
//  */
// export default function PageHero({ title }: PageHeroProps) {
//   return (
//     <section className="page-hero">
//       <div className="page-hero-orb page-hero-orb-1" aria-hidden="true" />
//       <div className="page-hero-orb page-hero-orb-2" aria-hidden="true" />
//       <div className="wrap">
//         <h1 className="page-hero-title eyebrow">{title}</h1>
//       </div>
//     </section>
//   );
// }


interface PageHeroProps {
  title: string;
}

export default function PageHero({ title }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="page-hero-orb page-hero-orb-1" aria-hidden="true" />
      <div className="page-hero-orb page-hero-orb-2" aria-hidden="true" />

      <div className="wrap">
        <h1 className="page-hero-title">{title}</h1>
      </div>
    </section>
  );
}