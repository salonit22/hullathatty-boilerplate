import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function QuickAccessCards() {
  return (
    <section className="quick-cards container">

      {/* --- Card 1: Squad --- */}
      <article className="card card-squad">
        <img
          src="https://images.unsplash.com/photo-1522778119026-d647f0565c6a?auto=format&fit=crop&w=1400&q=60"
          alt="Team action"
          className="card-bg"
        />

        <div className="card-overlay" />

        <div className="card-body card-body-left">
          <h3 className="card-title">The Squad</h3>
          <p className="card-sub">Meet the players defending our crest.</p>

          <a href="#team" className="card-link">
            VIEW TEAM<span className="card-arrow">→</span>
          </a>
        </div>
      </article>

      {/* --- Card 2: Fixtures --- */}
      <article className="card card-fixtures">
        <img
          src="https://images.unsplash.com/photo-1552667466-07770ae110d0?auto=format&fit=crop&w=1400&q=60"
          alt="Fixtures background"
          className="card-bg"
        />

        <div className="card-overlay" />

        <div className="card-body card-body-left">
          <h3 className="card-title">Fixtures</h3>
          <p className="card-sub">Check upcoming matches and results.</p>

          <a href="#fixtures" className="card-link">
            SEE SCHEDULE
            <FontAwesomeIcon icon="calendar-alt" className="fa-ic" />
          </a>
        </div>
      </article>

      {/* --- Card 3: Join The Club --- */}
      <article className="card card-join-us">
        {/* Pattern background replaced with diagonal micro-dot texture */}
        <div className="join-pattern-new" />

        <div className="card-body card-body-center">
          <div className="join-icon">
            <FontAwesomeIcon icon="shirt" size="2x" />
          </div>

          <h3 className="card-title join-title">Join The Club</h3>
          <p className="card-sub join-sub">Start your journey with Hullathatty FC.</p>

          <a href="#join" className="btn join-cta">
            Register Now
          </a>
        </div>
      </article>

    </section>
  );
}
