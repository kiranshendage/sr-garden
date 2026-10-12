const ROLES = [
  "Landscape Designer",
  "Site Supervisor / Mali",
  "Irrigation Technician",
  "Garden Maintenance Staff",
];

export default function Career() {
  return (
    <section className="career">
      <div className="wrap career-grid">
        <div>
          <p className="eyebrow">Careers</p>
          <h2>Grow Your Career With Us</h2>
          <p className="career-lede">
            We&apos;re always looking for people who care about plants as much as we do. Send
            your CV and tell us where you&apos;d fit in.
          </p>
          <a
            href="mailto:amolmalegaonkar@yahoo.com?subject=Job%20Application%20-%20SR%20Garden%20Solution"
            className="btn btn-primary"
            style={{ marginTop: "28px" }}
          >
            <svg>
              <use href="#i-mail" />
            </svg>
            Send Your CV
          </a>
        </div>
        <ul className="role-list">
          {ROLES.map((role) => (
            <li key={role}>
              <svg>
                <use href="#i-check" />
              </svg>
              {role}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
