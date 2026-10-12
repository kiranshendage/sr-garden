"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export default function Hero() {
  const blobRef = useRef<HTMLDivElement | null>(null);
  const visualRef = useRef<HTMLDivElement | null>(null);
  const counterRef = useRef<HTMLElement | null>(null);

  // hero stat counter — counts up once it scrolls into view
  useEffect(() => {
    const counterEl = counterRef.current;
    if (!counterEl) return;

    const target = parseInt(counterEl.dataset.target || "0", 10) || 0;
    let counted = false;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !counted) {
            counted = true;
            const start = performance.now();
            const dur = 1300;
            function tick(now: number) {
              const p = Math.min(1, (now - start) / dur);
              const eased = 1 - Math.pow(1 - p, 3);
              counterEl!.textContent = Math.round(eased * target) + "+";
              if (p < 1) requestAnimationFrame(tick);
            }
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(counterEl);
    return () => observer.disconnect();
  }, []);

  // hero blob subtle 3D tilt on pointer move (desktop, motion-safe only)
  useEffect(() => {
    const heroBlob = blobRef.current;
    const heroVisual = visualRef.current;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (!heroBlob || !heroVisual || reduceMotion || !finePointer) return;

    const onMouseMove = (e: MouseEvent) => {
      const r = heroVisual.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      heroBlob.style.transform = `rotateY(${px * 10}deg) rotateX(${-py * 10}deg) translateZ(0)`;
    };
    const onMouseLeave = () => {
      heroBlob.style.transform = "rotateY(0) rotateX(0)";
    };

    heroVisual.addEventListener("mousemove", onMouseMove);
    heroVisual.addEventListener("mouseleave", onMouseLeave);
    heroVisual.style.perspective = "900px";

    return () => {
      heroVisual.removeEventListener("mousemove", onMouseMove);
      heroVisual.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <>
      <section className="hero">
        <div className="hero-orb o1" aria-hidden="true"></div>
        <div className="hero-orb o2" aria-hidden="true"></div>
        <svg className="hero-leaf-float" style={{ top: "16%", left: "4%", width: "54px" }} viewBox="0 0 48 48">
          <use href="#i-leaf" />
        </svg>
        <svg
          className="hero-leaf-float"
          style={{ bottom: "8%", left: "9%", width: "38px", animationDelay: "-4s" }}
          viewBox="0 0 48 48"
        >
          <use href="#i-leaf" />
        </svg>

        <div className="wrap hero-grid">
          <div className="hero-copy">
            <p className="eyebrow reveal-up" style={{ animationDelay: ".02s" }}>
              Landscape · Garden · Irrigation Specialists
            </p>
            <h1 className="reveal-up" style={{ animationDelay: ".1s" }}>
              Everything You Need for a Beautiful
              <span className="script-accent">Green Space</span>
            </h1>
            <p className="lede reveal-up" style={{ animationDelay: ".22s" }}>
              We turn bare plots, terraces and bungalow gardens into living spaces —
              designed, planted, wired for water, and kept that way all year round.
            </p>
            <div className="hero-actions reveal-up" style={{ animationDelay: ".34s" }}>
              <Link href="/services" className="btn btn-hero-primary">
                <svg>
                  <use href="#i-sprout" />
                </svg>
                Explore Services
              </Link>
              <Link href="/contact" className="btn btn-hero-ghost">
                Get a Free Quote
                <svg>
                  <use href="#i-arrow" />
                </svg>
              </Link>
            </div>
            <div className="hero-trust reveal-up" style={{ animationDelay: ".46s" }}>
              <span>
                <svg>
                  <use href="#i-check" />
                </svg>
                Design to installation
              </span>
              <span>
                <svg>
                  <use href="#i-check" />
                </svg>
                Terrace &amp; bungalow gardens
              </span>
              <span>
                <svg>
                  <use href="#i-check" />
                </svg>
                Ongoing maintenance plans
              </span>
            </div>
          </div>

          <div className="hero-visual reveal-up" style={{ animationDelay: ".2s" }} aria-hidden="true" ref={visualRef}>
            <svg className="hero-ring" viewBox="0 0 420 420" fill="none">
              <circle
                cx="210"
                cy="210"
                r="204"
                stroke="var(--gold)"
                strokeWidth="1.4"
                strokeDasharray="2 12"
                strokeLinecap="round"
                opacity="0.55"
              />
            </svg>

            <div className="hero-blob" ref={blobRef}>
              <img
                src="/image.png"
                alt="Hands planting flowers in a garden"
              />
              <div className="hero-blob-glow"></div>
            </div>

            <div className="hero-badge">
              <div className="hero-badge-icon">
                <svg>
                  <use href="#i-leaf" />
                </svg>
              </div>
              <div>
                <b className="counter" data-target="500" ref={counterRef}>
                  0
                </b>
                <span className="badge-label">Gardens Transformed</span>
              </div>
            </div>
            <div className="hero-pill">
              <svg>
                <use href="#i-star" />
              </svg>
              4.9 Rated by Clients
            </div>
          </div>
        </div>
      </section>

      <div className="wrap hero-feature-wrap">
        <div className="hero-feature-bar">
          <ScrollReveal className="hf-item">
            <div className="hf-icon">
              <svg>
                <use href="#i-pin" />
              </svg>
            </div>
            <div className="hf-text">
              <b>Free Site Visit</b>
              <span>On-site consult for your space</span>
            </div>
          </ScrollReveal>
          <ScrollReveal className="hf-item">
            <div className="hf-icon">
              <svg>
                <use href="#i-card" />
              </svg>
            </div>
            <div className="hf-text">
              <b>Project Tracker</b>
              <span>Follow design through install</span>
            </div>
          </ScrollReveal>
          <ScrollReveal className="hf-item">
            <div className="hf-icon">
              <svg>
                <use href="#i-calendar" />
              </svg>
            </div>
            <div className="hf-text">
              <b>Workshops</b>
              <span>Seasonal care &amp; planting sessions</span>
            </div>
          </ScrollReveal>
          <ScrollReveal className="hf-item">
            <div className="hf-icon">
              <svg>
                <use href="#i-chat" />
              </svg>
            </div>
            <div className="hf-text">
              <b>Expert Support</b>
              <span>Quick answers from our team</span>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </>
  );
}
