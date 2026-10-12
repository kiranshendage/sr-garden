// export default function Contact() {
//   return (
//     <section className="contact">
//       <div className="wrap">
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
//             <a href="mailto:amolmalegaonkar@yahoo.com" className="btn btn-ghost">
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
//               <a href="mailto:amolmalegaonkar@yahoo.com">amolmalegaonkar@yahoo.com</a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { useState, type FormEvent } from "react";

/**
 * Contact section — SR Garden Solution.
 *
 * Keeps the existing "call / email now" card (reuses .contact-card,
 * .contact-actions, .contact-lines, .btn-primary, .btn-ghost — all already
 * defined in app/globals.css) and adds a real contact form below it.
 *
 * This site is a static export (`output: 'export'` in next.config.mjs), so
 * there's no built-in backend to receive form submissions. On submit, this
 * form builds a pre-filled `mailto:` link and opens the visitor's email
 * app — no server, no API route, no third-party account needed, and it
 * still lands the enquiry straight in your inbox.
 *
 * If you'd rather have submissions land silently in your inbox without
 * opening the visitor's email app (recommended once you have a domain),
 * swap the `onSubmit` handler below for a POST to a form service like
 * Formspree or Web3Forms — both work fine from a static export since the
 * form posts directly to their API, not to your own server.
 */

const OWNER_EMAIL = "amolmalegaonkar@yahoo.com";

const PROJECT_TYPES = [
  "Terrace Garden",
  "Vertical Garden / Green Wall",
  "Bungalow / Villa Garden",
  "Garden Maintenance",
  "Something Else",
];

interface FormState {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
}

const emptyForm: FormState = {
  name: "",
  email: "",
  phone: "",
  projectType: PROJECT_TYPES[0],
  message: "",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [sent, setSent] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.trim()) next.email = "Please enter your email.";
    else if (!EMAIL_RE.test(form.email.trim())) next.email = "That email doesn't look right.";
    if (!form.message.trim()) next.message = "Let us know a little about your space.";
    else if (form.message.trim().length < 10)
      next.message = "A few more details would help — at least 10 characters.";

    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validate()) return;

    const subject = `New enquiry from ${form.name} — ${form.projectType}`;
    const bodyLines = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.phone.trim() ? `Phone: ${form.phone}` : null,
      `Project type: ${form.projectType}`,
      "",
      form.message,
    ].filter(Boolean);

    const mailtoUrl = `mailto:${OWNER_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    window.location.href = mailtoUrl;
    setSent(true);
  }

  return (
    <section className="contact">
      <div className="wrap contact-page-grid">
        {/* ---- existing call / email card ---- */}
        <div className="contact-card">
          <p className="eyebrow" style={{ justifyContent: "center" }}>
            Let&apos;s Talk
          </p>
          <h2 style={{ marginTop: "18px" }}>Let&apos;s Grow Your Space</h2>
          <p>Tell us about your plot, terrace or balcony and we&apos;ll walk you through what&apos;s possible.</p>
          <div className="contact-actions">
            <a href="tel:9422080519" className="btn btn-primary">
              <svg>
                <use href="#i-phone" />
              </svg>
              Call Now
            </a>
            <a href={`mailto:${OWNER_EMAIL}`} className="btn btn-ghost">
              <svg>
                <use href="#i-mail" />
              </svg>
              Send an Email
            </a>
          </div>
          <div className="contact-lines">
            <div className="contact-line">
              <svg>
                <use href="#i-phone" />
              </svg>
              <a href="tel:9422080519">94220 80519</a> / <a href="tel:8459926927">84599 26927</a>
            </div>
            <div className="contact-line">
              <svg>
                <use href="#i-mail" />
              </svg>
              <a href={`mailto:${OWNER_EMAIL}`}>{OWNER_EMAIL}</a>
            </div>
          </div>
        </div>

        {/* ---- new enquiry form ---- */}
        <div className="contact-form-card">
          <p className="eyebrow">Send an Enquiry</p>
          <h2>Or Write to Us Directly</h2>
          <p className="contact-form-lede">
            Fill this in and we&apos;ll open it up in your email app, ready to send straight
            to our inbox.
          </p>

          {sent ? (
            <div className="contact-form-success" role="status">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 6 9 17l-5-5" />
              </svg>
              <div>
                <strong>Your email app should now be open.</strong>
                <p>Just hit send there and we&apos;ll get back to you shortly.</p>
                <button
                  type="button"
                  className="contact-form-reset"
                  onClick={() => {
                    setSent(false);
                    setForm(emptyForm);
                  }}
                >
                  Send another message
                </button>
              </div>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="cf-row">
                <div className="cf-field">
                  <label htmlFor="cf-name">Your Name</label>
                  <input
                    id="cf-name"
                    type="text"
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    placeholder="Jane Doe"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "cf-name-error" : undefined}
                  />
                  {errors.name && (
                    <span className="cf-error" id="cf-name-error">
                      {errors.name}
                    </span>
                  )}
                </div>
                <div className="cf-field">
                  <label htmlFor="cf-email">Email</label>
                  <input
                    id="cf-email"
                    type="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    placeholder="jane@example.com"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "cf-email-error" : undefined}
                  />
                  {errors.email && (
                    <span className="cf-error" id="cf-email-error">
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>

              <div className="cf-row">
                <div className="cf-field">
                  <label htmlFor="cf-phone">Phone (optional)</label>
                  <input
                    id="cf-phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    placeholder="98765 43210"
                  />
                </div>
                <div className="cf-field">
                  <label htmlFor="cf-project">Project Type</label>
                  <select
                    id="cf-project"
                    value={form.projectType}
                    onChange={(e) => update("projectType", e.target.value)}
                  >
                    {PROJECT_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="cf-field">
                <label htmlFor="cf-message">Tell us about your space</label>
                <textarea
                  id="cf-message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  placeholder="Size, location, what you're picturing — anything helps."
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "cf-message-error" : undefined}
                />
                {errors.message && (
                  <span className="cf-error" id="cf-message-error">
                    {errors.message}
                  </span>
                )}
              </div>

              <button type="submit" className="btn btn-primary cf-submit">
                <svg>
                  <use href="#i-mail" />
                </svg>
                Send Enquiry
              </button>
            </form>
          )}
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
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
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
        }
        .cf-submit svg {
          width: 16px;
          height: 16px;
        }

        .contact-form-success {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          background: var(--cream);
          border: 1px solid var(--line);
          border-radius: 12px;
          padding: 22px;
        }
        .contact-form-success svg {
          width: 22px;
          height: 22px;
          color: var(--gold);
          flex: none;
          margin-top: 2px;
        }
        .contact-form-success strong {
          display: block;
          color: var(--ink);
          font-size: 15px;
        }
        .contact-form-success p {
          font-size: 13.5px;
          color: var(--ink-soft);
          margin-top: 4px;
        }
        .contact-form-reset {
          display: inline-block;
          margin-top: 10px;
          background: none;
          border: none;
          color: var(--gold);
          font-weight: 700;
          font-size: 13px;
          cursor: pointer;
          text-decoration: underline;
          padding: 0;
        }
        @media (max-width: 860px) {
          .contact-form-success {
            flex-wrap: wrap;
          }
        }
      `}</style>
    </section>
  );
}