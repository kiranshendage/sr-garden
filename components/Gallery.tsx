import ScrollReveal from "./ScrollReveal";

const WORK_ITEMS = [
  {
    src: "https://images.unsplash.com/photo-1571192776145-9f563c1df686?auto=format&fit=crop&w=800&q=80",
    alt: "Vertical green wall garden",
    title: "Vertical Green Walls",
  },
  {
    src: "https://images.unsplash.com/photo-1633330948542-0b3bdeefcdb3?auto=format&fit=crop&w=800&q=80",
    alt: "Terrace garden patio",
    title: "Terrace Gardens",
  },
  {
    src: "https://images.unsplash.com/photo-1668120089662-42642838cfef?auto=format&fit=crop&w=800&q=80",
    alt: "Landscaped lawn with trees",
    title: "Landscape & Lawns",
  },
  {
    src: "https://images.unsplash.com/photo-1542806136-b50e2a5b006f?auto=format&fit=crop&w=800&q=80",
    alt: "Garden sprinkler irrigation system",
    title: "Irrigation Systems",
  },

  // Added 4
  {
    src: "https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=800&q=80",
    alt: "Beautiful landscaped garden",
    title: "Garden Design",
  },
  {
    src: "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=800&q=80",
    alt: "Lush green garden lawn",
    title: "Lawn Care",
  },
  {
    src: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80",
    alt: "Garden plants and landscaping",
    title: "Planting & Greenery",
  },
  {
    src: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=800&q=80",
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
