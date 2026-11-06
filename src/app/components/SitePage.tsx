"use client";

import { useState, type ReactNode } from "react";

type SitePageProps = {
  title: string;
  imageClass: string;
  activePath: string;
  children: ReactNode;
};

const navigation = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Facilities", href: "/facilities" },
  { label: "Patients & Visitors", href: "/patients" },
  { label: "HMO Partners", href: "/partners" },
  { label: "Contact", href: "/contact" },
];

export default function SitePage({
  title,
  imageClass,
  activePath,
  children,
}: SitePageProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="topbar">
        <span>55 Okebola Street, Ado-Ekiti, Ekiti State, Nigeria</span>
        <span>
          <a href="tel:08034753037">0803 475 3037</a>
          {" | "}
          <a href="mailto:adetadehospital@gmail.com">
            adetadehospital@gmail.com
          </a>
        </span>
      </div>

      <header className="header container">
  <a href="/" className="brand">
    <img src="/images/adetade-logo.svg" alt="Adetade Hospital logo" />
    <span>
      <strong>ADETADE HOSPITAL</strong>
      <small>ADO-EKITI, NIGERIA</small>
    </span>
  </a>

  <button
    className="mobile-menu-toggle"
    type="button"
    aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
    aria-expanded={menuOpen}
    aria-controls="main-navigation"
    onClick={() => setMenuOpen(!menuOpen)}
  >
    {menuOpen ? "✕" : "☰"}
  </button>

  <nav
    id="main-navigation"
    className={menuOpen ? "mobile-nav-open" : ""}
    aria-label="Main navigation"
  >
    {navigation.map((item) => (
      <a
        key={item.href}
        href={item.href}
        className={activePath === item.href ? "active" : ""}
        aria-current={activePath === item.href ? "page" : undefined}
        onClick={() => setMenuOpen(false)}
      >
        {item.label}
      </a>
    ))}
  </nav>

  <a className="button header-appointment" href="/contact#appointment-form">
    Get Appointment
  </a>
</header>

      <main className="inner-page">
        <section className={`page-banner ${imageClass}`}>
          <h1>{title}</h1>
        </section>

        <div className="site-page-content">{children}</div>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <h3>ADETADE HOSPITAL</h3>
            <p>Committed to providing quality healthcare since 1984.</p>
          </div>

          <div>
            <strong>Visit Us</strong>
            <p>55 Okebola Street, Ado-Ekiti, Ekiti State, Nigeria.</p>
          </div>

          <div>
            <strong>Contact Us</strong>
            <p>
              <a href="tel:08034753037">0803 475 3037</a>
              <br />
              <a href="tel:08107296484">0810 729 6484</a>
              <br />
              <a href="mailto:adetadehospital@gmail.com">
                adetadehospital@gmail.com
              </a>
            </p>
          </div>
        </div>

          <div className="container footer-social">
            <strong>Follow Us</strong>
            <p>
              <a href="https://www.facebook.com/adetadehospitalado/" target="_blank" rel="noreferrer">Facebook</a>
              {" | "}
              <a href="https://www.instagram.com/explore/locations/546420195478094/adetade-hospital-ado/" target="_blank" rel="noreferrer">Instagram</a>
            </p>
          </div>

        <div className="container footer-bottom">
          © 2026 Adetade Hospital, Ado-Ekiti. All rights reserved.
        </div>
      </footer>
    </>
  );
}
