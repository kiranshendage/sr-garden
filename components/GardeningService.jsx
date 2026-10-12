"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const WA_NUMBER = "919422080519";

function waLink(planName, billing) {
    const text = encodeURIComponent(
        `Hi! I'd like to book *${planName}* (${billing}) under Gardening Service. Please share next steps.`
    );
    return `https://wa.me/${WA_NUMBER}?text=${text}`;
}

const MONTHLY_PLANS = [
    {
        name: "Essential Care",
        features: [
            "Up to 25 Plants",
            "3 visits in a month",
            "1 visit accompanied by horticulturist",
            "Soil loosening",
            "Pruning",
            "Leaf cleanup",
            "Pest / fungus spray",
            "Watering",
        ],
        price: "₹2400",
        unit: "/ MONTH",
        note: null,
    },
    {
        name: "Enhanced Care",
        features: [
            "25–40 Plants",
            "3 visits in a month",
            "1 visit accompanied by horticulturist",
            "Everything in Essential Care",
            "Health-focused care – nutrition cycles, disease spotting & early treatment",
        ],
        price: "₹3400",
        unit: "/ MONTH",
        note: null,
    },
    {
        name: "Bloom Care",
        features: [
            "40–60 Plants",
            "3 visits in a month",
            "1 visit accompanied by horticulturist",
            "Everything in Enhanced Care",
            "Beautification upgrades – foliage polish, growth boosters, premium fertigation",
            "Visible monthly improvement & greener appearance",
        ],
        price: "₹4200",
        unit: "/ MONTH",
        note: null,
    },
    {
        name: "Signature Care",
        features: [
            "60+ Pots or Terrace Projects",
            "Flexible visit schedule",
            "1 visit accompanied by horticulturist",
            "Large projects – terrace-style care with scaled manpower",
            "Refresh cycles & design-oriented upkeep",
        ],
        price: "CUSTOM",
        unit: "",
        note: null,
    },
];

const ANNUAL_PLANS = [
    {
        name: "Essential Care",
        meta: ["Up to 20 Plants", "3 visits / month"],
        features: [
            "Plant health check by horticulturist every month",
            "WhatsApp updates",
        ],
        price: "₹25000",
        unit: "/ YEAR",
        note: "₹2,083 / month when you pay annually",
    },
    {
        name: "Enhanced Care",
        meta: ["Up to 40 Plants", "4 visits / month (1 extra visit for annual customers)"],
        features: [
            "Everything in Essential Care",
            "Health-focused care – nutrition cycles, disease spotting & early treatment",
            "Add-on benefits for Annual Care customers",
            "2 plants replaced every year (up to ₹3,000)",
            "Plant health check by horticulturist every month",
            "WhatsApp updates",
        ],
        price: "₹35500",
        unit: "/ YEAR",
        note: "₹2,958 / month when you pay annually",
    },
    {
        name: "Bloom Care",
        meta: ["Up to 60 Plants", "4 visits / month (1 extra visit for annual customers)"],
        features: [
            "Everything in Enhanced Care",
            "Beautification upgrades – foliage polish, growth boosters, premium fertigation",
            "Visible monthly improvement & greener appearance",
            "Add-on benefits for Annual Care customers",
            "3 plants replaced every year (up to ₹4,000)",
            "Soil rejuvenated once every year",
            "Plant health check by horticulturist every month",
            "Priority support",
            "WhatsApp updates",
        ],
        price: "₹44000",
        unit: "/ YEAR",
        note: "₹3,667 / month when you pay annually",
    },
    {
        name: "Signature Care",
        meta: ["Duration: Custom", "Flexible visits"],
        features: [
            "60+ pots or terrace projects",
            "Large projects – terrace-style care with scaled manpower",
            "Refresh cycles & design-oriented upkeep",
            "Add-on benefits for Annual Care customers",
            "Custom cycle of plant replacements",
            "Custom soil rejuvenation",
            "High-priority support",
            "Plant health check by horticulturist every month",
            "WhatsApp updates",
        ],
        price: "CUSTOM",
        unit: "",
        note: "Custom",
    },
];

export default function GardeningService() {
    const searchParams = useSearchParams();
    const tabParam = searchParams.get("tab");
    const [tab, setTab] = useState(tabParam === "annual" ? "annual" : "monthly");

    useEffect(() => {
        if (tabParam === "annual" || tabParam === "monthly") {
            setTab(tabParam);
        }
    }, [tabParam]);

    const plans = tab === "monthly" ? MONTHLY_PLANS : ANNUAL_PLANS;
    const billingLabel = tab === "monthly" ? "Monthly Care" : "Annual Care";

    const switchTab = (next) => {
        setTab(next);
        const url = next === "annual" ? "?tab=annual" : "?tab=monthly";
        window.history.replaceState(null, "", `/gardening-service${url}`);
    };

    return (
        <main className="gs-page">      {/* Hero */}
            <section className="page-hero gs-hero">
                <div className="wrap">
                    <p className="eyebrow">Gardening Service</p>
                    <h1 style={{ color: "var(--emerald-deep)" }}>
                        Monthly Care &amp; Annual Care
                    </h1>
                    <p className="page-hero-sub">
                        Dependable plant care for homes, balconies and terraces — from
                        essential visits to full signature programmes.
                    </p>
                </div>
            </section>

            {/* Plans */}
            <section className="gs-plans" id="plans">
                <div className="gs-plans-bg" aria-hidden="true" />

                <div className="wrap gs-plans-inner">
                    {/* Tabs */}
                    <div className="gs-tabs" role="tablist" aria-label="Care type">
                        <button
                            type="button"
                            role="tab"
                            aria-selected={tab === "monthly"}
                            className={`gs-tab ${tab === "monthly" ? "active" : ""}`}
                            onClick={() => switchTab("monthly")}
                        >
                            Monthly Care
                        </button>
                        <button
                            type="button"
                            role="tab"
                            aria-selected={tab === "annual"}
                            className={`gs-tab ${tab === "annual" ? "active" : ""}`}
                            onClick={() => switchTab("annual")}
                        >
                            Annual Care
                        </button>
                    </div>

                    <div className="gs-intro">
                        {tab === "monthly" ? (
                            <>
                                <p className="gs-intro-title">
                                    Quick one-time sessions to revive, refresh, or reset your plants.
                                </p>
                                <p className="gs-intro-body">
                                    Whether you need a seasonal cleanup, a post-holiday reset, or help
                                    with stressed plants, our on-demand visits bring expert care
                                    straight to your home – whenever you need it.
                                </p>
                            </>
                        ) : (
                            <>
                                <p className="gs-intro-title">
                                    Monthly plant care designed to keep your garden healthy year-round.
                                </p>
                                <p className="gs-intro-body">
                                    Our subscription plans offer dependable, personalized care – from
                                    pruning and soil renewal to pest management – so your green space
                                    stays vibrant, balanced, and thriving every month.
                                </p>
                            </>
                        )}
                    </div>

                    <div className="gs-grid">
                        {plans.map((plan) => (
                            <article key={plan.name + tab} className="gs-card">
                                <h3>{plan.name}</h3>

                                {plan.meta && (
                                    <ul className="gs-meta">
                                        {plan.meta.map((m) => (
                                            <li key={m}>{m}</li>
                                        ))}
                                    </ul>
                                )}

                                <ul className="gs-features">
                                    {plan.features.map((f) => (
                                        <li key={f}>
                                            <span className="gs-leaf" aria-hidden="true">
                                                ▸
                                            </span>
                                            <span>{f}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="gs-price">
                                    <strong>
                                        {plan.price}
                                        {plan.unit ? <span>{plan.unit}</span> : null}
                                    </strong>
                                    {plan.note ? <small>{plan.note}</small> : null}
                                </div>

                                <a
                                    className="gs-book"
                                    href={waLink(plan.name, billingLabel)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Book Now
                                </a>
                            </article>
                        ))}
                    </div>

                    <p className="gs-note">
                        All rates are exclusive of 18% GST.
                        <br />
                        Feel free to reach out to us for any custom sessions or projects.
                        Call/WhatsApp:{" "}
                        <a
                            href={`https://wa.me/${WA_NUMBER}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            +91 94220 80519
                        </a>
                    </p>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="gs-cta">
                <div className="wrap">
                    <h2>Looking for a personalized garden service plan?</h2>
                    <Link href="/contact" className="gs-cta-btn">
                        Get in touch with us!
                    </Link>
                </div>
            </section>
        </main>
    );
}