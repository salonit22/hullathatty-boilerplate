import React from "react";

export default function About() {
  return (
    <section id="about" className="about container">
      <div className="about-image">
        <img src="https://images.unsplash.com/photo-1575361204480-aadea25e6e68?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Club history"/>
      </div>
      <div className="about-content">
        <span className="kicker">Our Legacy</span>
        <h2>More Than <span className="outline">Just A Club</span></h2>
        <p>Hullathatty FC was founded on the principles of grit, determination, and community. We don't just play football; we live it.</p>
        <ul>
          <li>🏆 Regional Champions 2023</li>
          <li>👥 500+ Active Members</li>
          <li>❤️ Community First Approach</li>
        </ul>
        <a href="#" className="link">Read Full Story →</a>
      </div>
    </section>
  );
}
