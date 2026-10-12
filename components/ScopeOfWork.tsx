import ScrollReveal from "./ScrollReveal";

export default function ScopeOfWork() {
  return (
    <section className="process">
      <div className="wrap">
        <div className="process-head">
          <p className="eyebrow">Scope of Work</p>
          <h2>What We Deliver, Start to Finish</h2>
          <p>Four steps, the same for a balcony wall or a full bungalow garden.</p>
        </div>
        <div className="process-grid">
          <ScrollReveal className="process-step" as="div">
            <span className="step-num">01</span>
            <h3>Visit &amp; Consult</h3>
            <p>We walk the site with you and talk through what you want it to become.</p>
          </ScrollReveal>
          <ScrollReveal className="process-step" as="div">
            <span className="step-num">02</span>
            <h3>Design</h3>
            <p>A planting and layout plan suited to your space, light and budget.</p>
          </ScrollReveal>
          <ScrollReveal className="process-step" as="div">
            <span className="step-num">03</span>
            <h3>Install</h3>
            <p>Planting, hardscape and irrigation installed by our own team.</p>
          </ScrollReveal>
          <ScrollReveal className="process-step" as="div">
            <span className="step-num">04</span>
            <h3>Maintain</h3>
            <p>Ongoing visits to keep everything growing the way it should.</p>
          </ScrollReveal>
        </div>

        <div className="scope-detail">
          <div className="scope-included">
            <h3>What&apos;s Included</h3>
            <ul className="check-list">
              <li>
                <svg><use href="#i-check" /></svg>Site assessment &amp; soil check
              </li>
              <li>
                <svg><use href="#i-check" /></svg>Design &amp; material planning
              </li>
              <li>
                <svg><use href="#i-check" /></svg>Plant, pot &amp; hardscape sourcing
              </li>
              <li>
                <svg><use href="#i-check" /></svg>Planting &amp; installation
              </li>
              <li>
                <svg><use href="#i-check" /></svg>Drip / sprinkler irrigation setup
              </li>
              <li>
                <svg><use href="#i-check" /></svg>Handover walkthrough
              </li>
              <li>
                <svg><use href="#i-check" /></svg>Ongoing maintenance scheduling
              </li>
            </ul>
          </div>
          <div className="scope-types">
            <h3>Project Types We Take On</h3>
            <div className="type-card">
              <h4>Residential Gardens</h4>
              <p>Lawns, beds and pathways for individual homes.</p>
            </div>
            <div className="type-card">
              <h4>Terrace &amp; Balcony</h4>
              <p>Rooftop and balcony gardens built for wind, heat and drainage.</p>
            </div>
            <div className="type-card">
              <h4>Bungalow &amp; Villa</h4>
              <p>Full-plot landscaping with ongoing upkeep contracts.</p>
            </div>
            <div className="type-card">
              <h4>Society &amp; Commercial</h4>
              <p>Shared green spaces and landscaped grounds.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
