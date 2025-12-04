import React from "react";
import LatestScoreWidget from "./LatestScoreWidget";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay" />
      <div className="hero-inner container">
        <div className="tournament-alert">🏆 Upcoming: Regional Super Cup - Dec 15</div>

        <h1 className="hero-title">
          We Are <br />
          <span className="hero-highlight">Hullathatty</span>
        </h1>

        <p className="hero-sub">Passion. Power. Pride. The spirit of the game lives here.</p>

        <div className="hero-ctas">
          <a href="#join" className="btn primary">Join The Club</a>
          <a href="#tournaments" className="btn outline">Tournaments</a>
        </div>
      </div>

      <LatestScoreWidget />
    </section>
  );
}
