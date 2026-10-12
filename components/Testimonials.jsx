"use client";

import { useEffect, useRef, useState } from "react";

const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    role: "Bungalow, Pune",
    quote:
      "They turned our bare terrace into a proper garden. Visits are on time and the plants actually stay healthy through summer.",
    rating: 5,
  },
  {
    name: "Amit Deshmukh",
    role: "Apartment balcony, Baner",
    quote:
      "Rent a Garden was perfect for us — no big upfront cost, and they replaced two plants without fuss. Highly recommend.",
    rating: 5,
  },
  {
    name: "Neha Kulkarni",
    role: "Villa landscape, Kharadi",
    quote:
      "From design to irrigation, one team handled everything. The vertical wall is the first thing guests notice.",
    rating: 5,
  },
  {
    name: "Rahul Patil",
    role: "Office lobby greens, Hinjewadi",
    quote:
      "Monthly care keeps our lobby plants looking fresh. WhatsApp updates after every visit make it effortless.",
    rating: 5,
  },
  {
    name: "Sneha Joshi",
    role: "Terrace garden, Wakad",
    quote:
      "We tried DIY and failed. Their seasonal plan and soil refresh made all the difference. Quiet, professional crew.",
    rating: 5,
  },
  {
    name: "Vikram Mehta",
    role: "Farmhouse, Mulshi",
    quote:
      "Tree transplantation and full landscape build — on schedule and still looking great two monsoons later.",
    rating: 5,
  },
];

function Stars({ n }) {
  return (
    <div className="tm-stars" aria-label={n + " out of 5 stars"}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < n ? "on" : ""}>
          ★
        </span>
      ))}
    </div>
  );
}

function Card({ t }) {
  return (
    <article className="tm-card">
      <Stars n={t.rating} />
      <p className="tm-quote">“{t.quote}”</p>
      <div className="tm-author">
        <span className="tm-avatar" aria-hidden="true">
          {t.name.charAt(0)}
        </span>
        <div>
          <b>{t.name}</b>
          <span>{t.role}</span>
        </div>
      </div>
    </article>
  );
}

export default function Testimonials() {
  const trackRef = useRef(null);
  const [paused, setPaused] = useState(false);

  // Duplicate list so the marquee loops seamlessly
  const loop = TESTIMONIALS.concat(TESTIMONIALS);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    let raf = 0;
    let x = 0;
    const speed = 0.45; // px per frame — lower = slower

    const tick = () => {
      if (!paused) {
        x -= speed;
        // When we've scrolled half (the original set), reset
        const half = el.scrollWidth / 2;
        if (Math.abs(x) >= half) x = 0;
        el.style.transform = "translate3d(" + x + "px,0,0)";
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [paused]);

  return (
    <section className="tm">
      <div className="tm-orb tm-orb-1" aria-hidden="true" />
      <div className="tm-orb tm-orb-2" aria-hidden="true" />

      <div className="wrap tm-head">
        <p className="eyebrow">Testimonials</p>
        <h2>
          What our clients say
          <br />
          about growing with us
        </h2>
        <p className="tm-lede">
          Real homes, real terraces, real results — from monthly care to full
          landscape builds.
        </p>
      </div>

      <div
        className="tm-marquee"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={() => setPaused(false)}
      >
        <div className="tm-fade tm-fade-l" aria-hidden="true" />
        <div className="tm-fade tm-fade-r" aria-hidden="true" />

        <div className="tm-track" ref={trackRef}>
          {loop.map((t, i) => (
            <Card key={t.name + "-" + i} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}