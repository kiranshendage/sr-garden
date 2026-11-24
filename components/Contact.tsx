// // export default function Contact() {
// //   return (
// //     <section className="contact">
// //       <div className="wrap">
// //         <div className="contact-card">
// //           <p className="eyebrow" style={{ justifyContent: "center" }}>
// //             Let&apos;s Talk
// //           </p>
// //           <h2 style={{ marginTop: "18px" }}>Let&apos;s Grow Your Space</h2>
// //           <p>Tell us about your plot, terrace or balcony and we&apos;ll walk you through what&apos;s possible.</p>
// //           <div className="contact-actions">
// //             <a href="tel:9422080519" className="btn btn-primary">
// //               <svg>
// //                 <use href="#i-phone" />
// //               </svg>
// //               Call Now
// //             </a>
// //             <a href="mailto:amolmalegaonkar@yahoo.com" className="btn btn-ghost">
// //               <svg>
// //                 <use href="#i-mail" />
// //               </svg>
// //               Send an Email
// //             </a>
// //           </div>
// //           <div className="contact-lines">
// //             <div className="contact-line">
// //               <svg>
// //                 <use href="#i-phone" />
// //               </svg>
// //               <a href="tel:9422080519">94220 80519</a> / <a href="tel:8459926927">84599 26927</a>
// //             </div>
// //             <div className="contact-line">
// //               <svg>
// //                 <use href="#i-mail" />
// //               </svg>
// //               <a href="mailto:amolmalegaonkar@yahoo.com">amolmalegaonkar@yahoo.com</a>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }


// "use client";

// import { useState, type FormEvent } from "react";

// /**
//  * Contact section — SR Garden Solution.
//  *
//  * Keeps the existing "call / email now" card (reuses .contact-card,
//  * .contact-actions, .contact-lines, .btn-primary, .btn-ghost — all already
//  * defined in app/globals.css) and adds a real contact form below it.
//  *
//  * This site is a static export (`output: 'export'` in next.config.mjs), so
//  * there's no built-in backend to receive form submissions. On submit, this
//  * form builds a pre-filled `mailto:` link and opens the visitor's email
//  * app — no server, no API route, no third-party account needed, and it
//  * still lands the enquiry straight in your inbox.
//  *
//  * If you'd rather have submissions land silently in your inbox without
//  * opening the visitor's email app (recommended once you have a domain),
//  * swap the `onSubmit` handler below for a POST to a form service like
//  * Formspree or Web3Forms — both work fine from a static export since the
//  * form posts directly to their API, not to your own server.
//  */

// const OWNER_EMAIL = "amolmalegaonkar@yahoo.com";

// const PROJECT_TYPES = [
//   "Terrace Garden",
//   "Vertical Garden / Green Wall",
//   "Bungalow / Villa Garden",
//   "Garden Maintenance",
//   "Something Else",
// ];

// interface FormState {
//   name: string;
//   email: string;
//   phone: string;
//   projectType: string;
//   message: string;
// }

// const emptyForm: FormState = {
//   name: "",
//   email: "",
//   phone: "",
//   projectType: PROJECT_TYPES[0],
//   message: "",
// };

// const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// export default function Contact() {
//   const [form, setForm] = useState<FormState>(emptyForm);
//   const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
//   const [sent, setSent] = useState(false);

//   function update<K extends keyof FormState>(key: K, value: FormState[K]) {
//     setForm((f) => ({ ...f, [key]: value }));
//     if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
//   }

//   function validate(): boolean {
//     const next: Partial<Record<keyof FormState, string>> = {};
//     if (!form.name.trim()) next.name = "Please enter your name.";
//     if (!form.email.trim()) next.email = "Please enter your email.";
//     else if (!EMAIL_RE.test(form.email.trim())) next.email = "That email doesn't look right.";
//     if (!form.message.trim()) next.message = "Let us know a little about your space.";
//     else if (form.message.trim().length < 10)
//       next.message = "A few more details would help — at least 10 characters.";

//     setErrors(next);
//     return Object.keys(next).length === 0;
//   }

//   function handleSubmit(e: FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//     if (!validate()) return;

//     const subject = `New enquiry from ${form.name} — ${form.projectType}`;
//     const bodyLines = [
//       `Name: ${form.name}`,
//       `Email: ${form.email}`,
//       form.phone.trim() ? `Phone: ${form.phone}` : null,
//       `Project type: ${form.projectType}`,
//       "",
//       form.message,
//     ].filter(Boolean);

//     const mailtoUrl = `mailto:${OWNER_EMAIL}?subject=${encodeURIComponent(
//       subject
//     )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

//     window.location.href = mailtoUrl;
//     setSent(true);
//   }

//   return (
//     <section className="contact">
//       <div className="wrap contact-page-grid">
//         {/* ---- existing call / email card ---- */}
//         <div className="contact-card">
//           <p className="eyebrow" style={{ justifyContent: "center" }}>
//             Let&apos;s Talk
//           </p>
//           <h2 style={{ marginTop: "18px" }}>Let&apos;s Grow Your Space</h2>
//           <p>Tell us about your plot, terrace or balcony and we&apos;ll walk you through what&apos;s possible.</p>
//           <div className="contact-actions">
//             <a href="tel:9422080519" className="btn btn-primary">
//               <svg>
//                 <use href="#i-phone" />
//               </svg>
//               Call Now
//             </a>
//             <a href={`mailto:${OWNER_EMAIL}`} className="btn btn-ghost">
//               <svg>
//                 <use href="#i-mail" />
//               </svg>
//               Send an Email
//             </a>
//           </div>
//           <div className="contact-lines">
//             <div className="contact-line">
//               <svg>
//                 <use href="#i-phone" />
//               </svg>
//               <a href="tel:9422080519">94220 80519</a> / <a href="tel:8459926927">84599 26927</a>
//             </div>
//             <div className="contact-line">
//               <svg>
//                 <use href="#i-mail" />
//               </svg>
//               <a href={`mailto:${OWNER_EMAIL}`}>{OWNER_EMAIL}</a>
//             </div>
//           </div>
//         </div>

//         {/* ---- new enquiry form ---- */}
//         <div className="contact-form-card">
//           <p className="eyebrow">Send an Enquiry</p>
//           <h2>Or Write to Us Directly</h2>
//           <p className="contact-form-lede">
//             Fill this in and we&apos;ll open it up in your email app, ready to send straight
//             to our inbox.
//           </p>

//           {sent ? (
//             <div className="contact-form-success" role="status">
//               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <path d="M20 6 9 17l-5-5" />
//               </svg>
//               <div>
//                 <strong>Your email app should now be open.</strong>
//                 <p>Just hit send there and we&apos;ll get back to you shortly.</p>
//                 <button
//                   type="button"
//                   className="contact-form-reset"
//                   onClick={() => {
//                     setSent(false);
//                     setForm(emptyForm);
//                   }}
//                 >
//                   Send another message
//                 </button>
//               </div>
//             </div>
//           ) : (
//             <form className="contact-form" onSubmit={handleSubmit} noValidate>
//               <div className="cf-row">
//                 <div className="cf-field">
//                   <label htmlFor="cf-name">Your Name</label>
//                   <input
//                     id="cf-name"
//                     type="text"
//                     value={form.name}
//                     onChange={(e) => update("name", e.target.value)}
//                     placeholder="Jane Doe"
//                     aria-invalid={!!errors.name}
//                     aria-describedby={errors.name ? "cf-name-error" : undefined}
//                   />
//                   {errors.name && (
//                     <span className="cf-error" id="cf-name-error">
//                       {errors.name}
//                     </span>
//                   )}
//                 </div>
//                 <div className="cf-field">
//                   <label htmlFor="cf-email">Email</label>
//                   <input
//                     id="cf-email"
//                     type="email"
//                     value={form.email}
//                     onChange={(e) => update("email", e.target.value)}
//                     placeholder="jane@example.com"
//                     aria-invalid={!!errors.email}
//                     aria-describedby={errors.email ? "cf-email-error" : undefined}
//                   />
//                   {errors.email && (
//                     <span className="cf-error" id="cf-email-error">
//                       {errors.email}
//                     </span>
//                   )}
//                 </div>
//               </div>

//               <div className="cf-row">
//                 <div className="cf-field">
//                   <label htmlFor="cf-phone">Phone (optional)</label>
//                   <input
//                     id="cf-phone"
//                     type="tel"
//                     value={form.phone}
//                     onChange={(e) => update("phone", e.target.value)}
//                     placeholder="98765 43210"
//                   />
//                 </div>
//                 <div className="cf-field">
//                   <label htmlFor="cf-project">Project Type</label>
//                   <select
//                     id="cf-project"
//                     value={form.projectType}
//                     onChange={(e) => update("projectType", e.target.value)}
//                   >
//                     {PROJECT_TYPES.map((type) => (
//                       <option key={type} value={type}>
//                         {type}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//               </div>

//               <div className="cf-field">
//                 <label htmlFor="cf-message">Tell us about your space</label>
//                 <textarea
//                   id="cf-message"
//                   rows={5}
//                   value={form.message}
//                   onChange={(e) => update("message", e.target.value)}
//                   placeholder="Size, location, what you're picturing — anything helps."
//                   aria-invalid={!!errors.message}
//                   aria-describedby={errors.message ? "cf-message-error" : undefined}
//                 />
//                 {errors.message && (
//                   <span className="cf-error" id="cf-message-error">
//                     {errors.message}
//                   </span>
//                 )}
//               </div>

//               <button type="submit" className="btn btn-primary cf-submit">
//                 <svg>
//                   <use href="#i-mail" />
//                 </svg>
//                 Send Enquiry
//               </button>
//             </form>
//           )}
//         </div>
//       </div>

//       <style jsx>{`
//         .contact-page-grid {
//           display: grid;
//           grid-template-columns: 0.9fr 1.1fr;
//           gap: 32px;
//           align-items: start;
//         }
//         @media (max-width: 860px) {
//           .contact-page-grid {
//             grid-template-columns: 1fr;
//           }
//         }

//         .contact-form-card {
//           background: #fff;
//           border: 1px solid var(--line);
//           border-radius: var(--radius);
//           padding: 36px 34px;
//           box-shadow: 0 14px 30px -24px rgba(20, 40, 18, 0.2);
//         }
//         .contact-form-card h2 {
//           font-size: clamp(22px, 2.6vw, 28px);
//           margin-top: 10px;
//           color: var(--ink);
//         }
//         .contact-form-lede {
//           color: var(--ink-soft);
//           font-size: 14.5px;
//           margin: 10px 0 26px;
//           line-height: 1.6;
//         }

//         .cf-row {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 18px;
//         }
//         @media (max-width: 480px) {
//           .cf-row {
//             grid-template-columns: 1fr;
//           }
//         }

//         .cf-field {
//           display: flex;
//           flex-direction: column;
//           margin-bottom: 18px;
//         }
//         .cf-field label {
//           font-size: 13px;
//           font-weight: 700;
//           color: var(--ink);
//           margin-bottom: 7px;
//         }
//         .cf-field input,
//         .cf-field select,
//         .cf-field textarea {
//           font: inherit;
//           font-size: 14.5px;
//           color: var(--ink);
//           background: var(--cream);
//           border: 1px solid var(--line);
//           border-radius: 10px;
//           padding: 12px 14px;
//           resize: vertical;
//           transition: border-color 0.2s ease, box-shadow 0.2s ease;
//         }
//         .cf-field input:focus,
//         .cf-field select:focus,
//         .cf-field textarea:focus {
//           outline: none;
//           border-color: var(--gold-bright);
//           box-shadow: 0 0 0 3px rgba(124, 174, 69, 0.18);
//         }
//         .cf-field input[aria-invalid="true"],
//         .cf-field textarea[aria-invalid="true"] {
//           border-color: #c0392b;
//         }
//         .cf-error {
//           font-size: 12.5px;
//           color: #c0392b;
//           margin-top: 6px;
//         }

//         .cf-submit {
//           width: 100%;
//           justify-content: center;
//           margin-top: 6px;
//           border: none;
//           cursor: pointer;
//         }
//         .cf-submit svg {
//           width: 16px;
//           height: 16px;
//         }

//         .contact-form-success {
//           display: flex;
//           align-items: flex-start;
//           gap: 14px;
//           background: var(--cream);
//           border: 1px solid var(--line);
//           border-radius: 12px;
//           padding: 22px;
//         }
//         .contact-form-success svg {
//           width: 22px;
//           height: 22px;
//           color: var(--gold);
//           flex: none;
//           margin-top: 2px;
//         }
//         .contact-form-success strong {
//           display: block;
//           color: var(--ink);
//           font-size: 15px;
//         }
//         .contact-form-success p {
//           font-size: 13.5px;
//           color: var(--ink-soft);
//           margin-top: 4px;
//         }
//         .contact-form-reset {
//           display: inline-block;
//           margin-top: 10px;
//           background: none;
//           border: none;
//           color: var(--gold);
//           font-weight: 700;
//           font-size: 13px;
//           cursor: pointer;
//           text-decoration: underline;
//           padding: 0;
//         }
//         @media (max-width: 860px) {
//           .contact-form-success {
//             flex-wrap: wrap;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }
// //sssssssssssss




"use client";

import { useState, type FormEvent } from "react";

const WHATSAPP_NUMBER = "919422080519";

const PROJECT_TYPES = [
  "Terrace Garden",
  "Vertical Garden / Green Wall",
  "Bungalow / Villa Garden",
  "Garden Maintenance",
  "Something Else",
];

interface FormState {
  name: string;
  phone: string;
  projectType: string;
  message: string;
}

const emptyForm: FormState = {
  name: "",
  phone: "",
  projectType: PROJECT_TYPES[0],
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<
    Partial<Record<keyof FormState, string>>
  >({});

  function update<K extends keyof FormState>(
    key: K,
    value: FormState[K]
  ) {
    setForm((f) => ({ ...f, [key]: value }));

    if (errors[key]) {
      setErrors((e) => ({ ...e, [key]: undefined }));
    }
  }

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {};

    if (!form.name.trim()) {
      next.name = "Please enter your name.";
    }

    if (form.phone.trim() && !/^[0-9+\-\s]{10,15}$/.test(form.phone.trim())) {
      next.phone = "Please enter a valid phone number.";
    }

    if (!form.message.trim()) {
      next.message = "Please tell us about your garden project.";
    } else if (form.message.trim().length < 10) {
      next.message = "Please enter at least 10 characters.";
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!validate()) return;

    const message = [
      "Hello SR Garden Solution!",
      "",
      `Name: ${form.name}`,
      form.phone.trim() ? `Phone: ${form.phone}` : null,
      `Project Type: ${form.projectType}`,
      "",
      `Project Details: ${form.message}`,
    ]
      .filter(Boolean)
      .join("\n");

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  const defaultMessage =
    "Hello, I am interested in your garden services. Please share more details.";

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    defaultMessage
  )}`;

  return (
    <section className="contact">
      <div className="wrap contact-page-grid">

        {/* Contact Information */}
        <div className="contact-card">
          <p
            className="eyebrow"
            style={{ justifyContent: "center" }}
          >
            Let&apos;s Talk
          </p>

          <h2 style={{ marginTop: "18px" }}>
            Let&apos;s Grow Your Space
          </h2>

          <p>
            Tell us about your plot, terrace or balcony and
            we&apos;ll walk you through what&apos;s possible.
          </p>

          <div className="contact-actions">

            {/* Call Now */}
            <a
              href="tel:9422080519"
              className="btn btn-primary"
            >
              <svg>
                <use href="#i-phone" />
              </svg>
              Call Now
            </a>

            {/* WhatsApp */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.52 3.48A11.87 11.87 0 0 0 12.04 0C5.46 0 .1 5.36.1 11.94c0 2.1.55 4.16 1.6 5.98L0 24l6.24-1.64a11.9 11.9 0 0 0 5.8 1.48h.01c6.58 0 11.94-5.36 11.94-11.94 0-3.19-1.24-6.2-3.47-8.42ZM12.05 21.8a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.71.97.99-3.62-.24-.37a9.88 9.88 0 1 1 8.37 4.61Zm5.43-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.48-1.75-1.65-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.48.71.31 1.26.5 1.69.64.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
              </svg>
              WhatsApp Us
            </a>
          </div>

          <div className="contact-lines">
            <div className="contact-line">
              <svg>
                <use href="#i-phone" />
              </svg>

              <a href="tel:9422080519">
                94220 80519
              </a>
              {" / "}
              <a href="tel:8459926927">
                84599 26927
              </a>
            </div>
          </div>
        </div>

        {/* WhatsApp Enquiry Form */}
        <div className="contact-form-card">
          <p className="eyebrow">Send an Enquiry</p>

          <h2>Tell Us About Your Project</h2>

          <p className="contact-form-lede">
            Fill in your details and send your garden enquiry
            directly to us on WhatsApp.
          </p>

          <form
            className="contact-form"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="cf-row">
              <div className="cf-field">
                <label htmlFor="cf-name">Your Name</label>

                <input
                  id="cf-name"
                  type="text"
                  value={form.name}
                  onChange={(e) =>
                    update("name", e.target.value)
                  }
                  placeholder="Your Name"
                  aria-invalid={!!errors.name}
                />

                {errors.name && (
                  <span className="cf-error">
                    {errors.name}
                  </span>
                )}
              </div>

              <div className="cf-field">
                <label htmlFor="cf-phone">
                  Phone Number (Optional)
                </label>

                <input
                  id="cf-phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) =>
                    update("phone", e.target.value)
                  }
                  placeholder="98765 43210"
                  aria-invalid={!!errors.phone}
                />

                {errors.phone && (
                  <span className="cf-error">
                    {errors.phone}
                  </span>
                )}
              </div>
            </div>

            <div className="cf-field">
              <label htmlFor="cf-project">
                Project Type
              </label>

              <select
                id="cf-project"
                value={form.projectType}
                onChange={(e) =>
                  update("projectType", e.target.value)
                }
              >
                {PROJECT_TYPES.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div className="cf-field">
              <label htmlFor="cf-message">
                Tell Us About Your Space
              </label>

              <textarea
                id="cf-message"
                rows={5}
                value={form.message}
                onChange={(e) =>
                  update("message", e.target.value)
                }
                placeholder="Size, location, and what you're picturing..."
                aria-invalid={!!errors.message}
              />

              {errors.message && (
                <span className="cf-error">
                  {errors.message}
                </span>
              )}
            </div>

            <button
              type="submit"
              className="btn btn-whatsapp cf-submit"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.52 3.48A11.87 11.87 0 0 0 12.04 0C5.46 0 .1 5.36.1 11.94c0 2.1.55 4.16 1.6 5.98L0 24l6.24-1.64a11.9 11.9 0 0 0 5.8 1.48h.01c6.58 0 11.94-5.36 11.94-11.94 0-3.19-1.24-6.2-3.47-8.42ZM12.05 21.8a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.71.97.99-3.62-.24-.37a9.88 9.88 0 1 1 8.37 4.61Zm5.43-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.48-1.75-1.65-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.48.71.31 1.26.5 1.69.64.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
              </svg>
              Send Enquiry on WhatsApp
            </button>
          </form>
        </div>
      </div>

      <style jsx>{`
        .contact-page-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 32px;
          align-items: start;
        }

        @media (max-width: 860px) {
          .contact-page-grid {
            grid-template-columns: 1fr;
          }
        }

        .contact-actions .btn-whatsapp {
          background: #25d366;
          color: #fff;
          border: 1px solid #25d366;
        }

        .contact-actions .btn-whatsapp:hover {
          background: #1ebe5d;
          border-color: #1ebe5d;
          color: #fff;
        }

        .contact-actions .btn-whatsapp svg,
        .cf-submit svg {
          width: 18px;
          height: 18px;
          flex-shrink: 0;
        }

        .contact-form-card {
          background: #fff;
          border: 1px solid var(--line);
          border-radius: var(--radius);
          padding: 36px 34px;
          box-shadow: 0 14px 30px -24px rgba(20, 40, 18, 0.2);
        }

        .contact-form-card h2 {
          font-size: clamp(22px, 2.6vw, 28px);
          margin-top: 10px;
          color: var(--ink);
        }

        .contact-form-lede {
          color: var(--ink-soft);
          font-size: 14.5px;
          margin: 10px 0 26px;
          line-height: 1.6;
        }

        .cf-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }

        @media (max-width: 480px) {
          .cf-row {
            grid-template-columns: 1fr;
          }
        }

        .cf-field {
          display: flex;
          flex-direction: column;
          margin-bottom: 18px;
        }

        .cf-field label {
          font-size: 13px;
          font-weight: 700;
          color: var(--ink);
          margin-bottom: 7px;
        }

        .cf-field input,
        .cf-field select,
        .cf-field textarea {
          font: inherit;
          font-size: 14.5px;
          color: var(--ink);
          background: var(--cream);
          border: 1px solid var(--line);
          border-radius: 10px;
          padding: 12px 14px;
          resize: vertical;
          transition: border-color 0.2s ease,
            box-shadow 0.2s ease;
        }

        .cf-field input:focus,
        .cf-field select:focus,
        .cf-field textarea:focus {
          outline: none;
          border-color: var(--gold-bright);
          box-shadow: 0 0 0 3px rgba(124, 174, 69, 0.18);
        }

        .cf-field input[aria-invalid="true"],
        .cf-field textarea[aria-invalid="true"] {
          border-color: #c0392b;
        }

        .cf-error {
          font-size: 12.5px;
          color: #c0392b;
          margin-top: 6px;
        }

        .cf-submit {
          width: 100%;
          justify-content: center;
          margin-top: 6px;
          border: none;
          cursor: pointer;
          background: #25d366;
          color: #fff;
        }

        .cf-submit:hover {
          background: #1ebe5d;
          color: #fff;
        }
      `}</style>
    </section>
  );
}
