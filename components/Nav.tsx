"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavChild = {
  href: string;
  label: string;
};

type NavItem = {
  href: string;
  label: string;
  children?: NavChild[];
};

const NAV_LINKS: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  // {
  //   href: "/gardening-service",
  //   label: "Gardening Service",
  //   children: [
  //     {
  //       href: "/gardening-service?tab=monthly",
  //       label: "Monthly Care",
  //     },
  //     {
  //       href: "/gardening-service?tab=annual",
  //       label: "Annual Care",
  //     },
  //   ],
  // },
  { href: "/services", label: "Garden Setup" },
  { href: "/rent-a-garden", label: "Rent a Garden" },
  { href: "/scope", label: "Scope of Work" },
  { href: "/gallery", label: "Gallery" },
  { href: "/team", label: "Team" },
  { href: "/blog", label: "Blog" },
  { href: "/career", label: "Career" },
];

function Caret() {
  return (
    <svg
      className="nav-caret"
      viewBox="0 0 12 12"
      aria-hidden="true"
    >
      <path
        d="M2.5 4.5 L6 8 L9.5 4.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Nav() {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
    setOpenDropdown("");
  }, [pathname]);

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenDropdown("");
  };

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname.startsWith(href);

  return (
    <>
      <header
        id="siteHeader"
        className={scrolled ? "scrolled" : ""}
      >
        <div className="wrap nav-inner">

          {/* LOGO */}
          <Link
            href="/"
            className="brand"
            aria-label="SR Garden Solution home"
          >
            <img
              src="/logo.png"
              alt="SR Garden Solution"
              className="brand-logo-img"
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav
            className="links"
            aria-label="Primary navigation"
          >
            {NAV_LINKS.map((link) =>
              link.children ? (
                <div
                  key={link.href}
                  className="nav-dropdown"
                >
                  <Link
                    href={link.href}
                    className={
                      "nav-dropdown-trigger" +
                      (isActive(link.href)
                        ? " active"
                        : "")
                    }
                  >
                    {link.label}
                    <Caret />
                  </Link>

                  <div className="nav-dropdown-menu">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={
                    isActive(link.href)
                      ? "active"
                      : ""
                  }
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* RIGHT */}
          <div className="nav-right">

            <Link
              href="/contact"
              className="nav-cta"
            >
              Contact
            </Link>

            <button
              className="burger"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(true)}
            >
              <svg>
                <use href="#i-menu" />
              </svg>
            </button>

          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        className={
          menuOpen
            ? "mobile-menu open"
            : "mobile-menu"
        }
      >
        <button
          className="mobile-close"
          aria-label="Close menu"
          onClick={closeMenu}
        >
          <svg>
            <use href="#i-close" />
          </svg>
        </button>

        {NAV_LINKS.map((link) =>
          link.children ? (
            <div
              key={link.href}
              className="mobile-dropdown"
            >
              <button
                type="button"
                className={
                  openDropdown === link.href
                    ? "mobile-dropdown-trigger open"
                    : "mobile-dropdown-trigger"
                }
                onClick={() =>
                  setOpenDropdown(
                    openDropdown === link.href
                      ? ""
                      : link.href
                  )
                }
              >
                {link.label}
                <Caret />
              </button>

              <div
                className={
                  openDropdown === link.href
                    ? "mobile-dropdown-menu open"
                    : "mobile-dropdown-menu"
                }
              >
                <Link
                  href={link.href}
                  onClick={closeMenu}
                >
                  Overview
                </Link>

                {link.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    onClick={closeMenu}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          )
        )}

        <Link
          href="/contact"
          onClick={closeMenu}
          className="mobile-cta"
        >
          Contact
        </Link>
      </div>
    </>
  );
}