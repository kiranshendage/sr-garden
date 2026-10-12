// import Link from "next/link";

// export default function Footer() {
//   return (
//     <footer>
//       <div className="wrap">
//         <div className="footer-grid">
//           <div>
//             <div className="footer-brand">
//               <svg>
//                 <use href="#i-leaf" />
//               </svg>
//               <b>SR Garden Solution</b>
//             </div>
//             <p className="footer-tagline">&quot;We make your space green, healthy &amp; beautiful&quot;</p>
//           </div>
//           <div className="footer-links">
//             <Link href="/about">About</Link>
//             <Link href="/services">Services</Link>
//             <Link href="/scope">Scope of Work</Link>
//             <Link href="/gallery">Gallery</Link>
//             <Link href="/team">Team</Link>
//             <Link href="/blog">Blog</Link>
//             <Link href="/career">Career</Link>
//             <Link href="/contact">Contact</Link>
//           </div>
//         </div>
//         <div className="footer-bottom">
//           <span>© 2026 SR Garden Solution. All rights reserved.</span>
//           <span>Landscape · Garden Development · Irrigation · Maintenance</span>
//         </div>
//       </div>
//     </footer>
//   );
// }


import Link from "next/link";
import Image from "next/image";

const EXPLORE = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Garden Setup" },
  { href: "/gardening-service", label: "Gardening Service" },
  { href: "/rent-a-garden", label: "Rent a Garden" },
  { href: "/scope", label: "Scope of Work" },
];

const COMPANY = [
  { href: "/gallery", label: "Gallery" },
  { href: "/team", label: "Team" },
  { href: "/blog", label: "Blog" },
  { href: "/career", label: "Career" },
  { href: "/contact", label: "Contact" },
];

const WA = "https://wa.me/919422080519";
const PHONE_DISPLAY = "+91 94220 80519";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="ft">
      <div className="ft-top-wave" aria-hidden="true" />

      <div className="wrap">
        <div className="ft-grid">
          {/* Brand */}
          <div className="ft-brand-col">
            <Link href="/" className="ft-brand">
              <Image
                src="/logo.png"
                alt="SR Garden Solution"
                width={160}
                height={48}
                className="ft-logo"
              />
            </Link>
            <p className="ft-tagline">
              We make your space green, healthy &amp; beautiful.
            </p>
            <p className="ft-about">
              Landscape design, terrace gardens, irrigation and scheduled care
              across Maharashtra — from first sketch to years of upkeep.
            </p>

            <a
              className="ft-wa"
              href={WA + "?text=" + encodeURIComponent("Hi! I'd like to know more about SR Garden Solution.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="ft-wa-dot" aria-hidden="true" />
              WhatsApp {PHONE_DISPLAY}
            </a>
          </div>

          {/* Explore */}
          <div className="ft-col">
            <h4>Explore</h4>
            <ul>
              {EXPLORE.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="ft-col">
            <h4>Company</h4>
            <ul>
              {COMPANY.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="ft-col ft-contact-col">
            <h4>Get in touch</h4>
            <ul className="ft-contact-list">
              <li>
                <span className="ft-label">WhatsApp / Call</span>
                <a href={WA} target="_blank" rel="noopener noreferrer">
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <span className="ft-label">Service area</span>
                <span>Maharashtra · Homes, terraces &amp; estates</span>
              </li>
              <li>
                <span className="ft-label">Hours</span>
                <span>Mon – Sat · 9:00 AM – 7:00 PM</span>
              </li>
            </ul>

            <Link href="/contact" className="ft-contact-btn">
              Contact us
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="ft-bottom">
          <span>© {year} SR Garden Solution. All rights reserved.</span>
          <span className="ft-bottom-tags">
            Landscape · Garden Development · Irrigation · Maintenance
          </span>
        </div>
      </div>
    </footer>
  );
}