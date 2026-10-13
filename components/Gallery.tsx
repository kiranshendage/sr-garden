import ScrollReveal from "./ScrollReveal";

const WORK_ITEMS = [
  {
    src: "/gallery-images/Vertical.png",
    alt: "Vertical green wall garden",
    title: "Vertical Green Walls",
  },
  {
    src: "/gallery-images/terracegardenimg.png",
    alt: "Terrace garden patio",
    title: "Terrace Gardens",
  },
  {
    src: "/gallery-images/landscape.png",
    alt: "Landscaped lawn with trees",
    title: "Landscape & Lawns",
  },
  {
    src: "/gallery-images/Irrigation.png",
    alt: "Garden sprinkler irrigation system",
    title: "Irrigation Systems",
  },

  // Added 4
  {
    src: "/gallery-images/gardenimg.png",
    alt: "Beautiful landscaped garden",
    title: "Garden Design",
  },
  {
    src: "/gallery-images/lawncareimg.png",
    alt: "Lush green garden lawn",
    title: "Lawn Care",
  },
  {
    src: "/gallery-images/Planting.png",
    alt: "Garden plants and landscaping",
    title: "Planting & Greenery",
  },
  {
    src: "/gallery-images/Outdoor.png",
    alt: "Modern outdoor garden landscape",
    title: "Outdoor Spaces",
  },
];

export default function Gallery() {
  return (
    <section className="work">
      <div className="wrap">
        <div className="work-head">
          <div>
            <p className="eyebrow">Gallery</p>
            <h2>Spaces We Grow</h2>
          </div>
          <p>A look at the kind of spaces we build — swap in your own project photography anytime.</p>
        </div>
        <div className="work-grid">
          {WORK_ITEMS.map((item) => (
            <ScrollReveal key={item.title} className="work-card">
              <img className="panel" src={item.src} alt={item.alt} />
              <div className="overlay">
                <span className="tag">Category</span>
                <h3>{item.title}</h3>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
