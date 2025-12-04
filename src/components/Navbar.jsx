import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = () => {
    window.dispatchEvent(new CustomEvent("mobile-menu-toggle"));
  };

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="container nav-inner">
        <div className="brand">
          <a href="#home">
            <span className="brand-main">HULLATHATTY</span><span className="brand-sub">FC</span>
          </a>
        </div>

        <div className="nav-links nav-links-2 desktop-only">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#team">Team</a>
          <a href="#tournaments" className="active">Tournaments</a>
          <a href="#fixtures">Fixtures</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact" className="contact-btn">Contact</a>
        </div>

        <button className="mobile-toggle mobile-only" onClick={toggleMenu} aria-label="Open menu">
          ☰
        </button>
      </div>
    </nav>
  );
}
