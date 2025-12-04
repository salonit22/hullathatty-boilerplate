import React, { useEffect, useState } from "react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const handler = () => setOpen((o) => !o);
    window.addEventListener("mobile-menu-toggle", handler);
    return () => window.removeEventListener("mobile-menu-toggle", handler);
  }, []);
  return (
    <div className={`mobile-menu ${open ? "open" : ""}`} id="mobile-menu">
      <div className="mobile-menu-header">
        <button onClick={() => setOpen(false)} aria-label="Close">✕</button>
      </div>
      <div className="mobile-menu-links">
        <a href="#home" onClick={() => setOpen(false)}>Home</a>
        <a href="#about" onClick={() => setOpen(false)}>About</a>
        <a href="#team" onClick={() => setOpen(false)}>Team</a>
        <a href="#tournaments" onClick={() => setOpen(false)}>Tournaments</a>
        <a href="#fixtures" onClick={() => setOpen(false)}>Fixtures</a>
        <a href="#gallery" onClick={() => setOpen(false)}>Gallery</a>
        <a href="#contact" onClick={() => setOpen(false)} className="accent">Contact Us</a>
      </div>
    </div>
  );
}
