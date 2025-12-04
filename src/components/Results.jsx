import React from "react";

export default function Results() {
  return (
    <section id="results" className="results container">
      <div className="heading">
        <span>Match Center</span>
        <h2>Recent <span className="outline">Results</span></h2>
      </div>

      <div className="match-card">
        <div className="team-block">
          <h3>Hullathatty FC</h3>
          <p className="role">Home</p>
          <div className="scorers">
            <p>⚽ A. Storm (12')</p>
            <p>⚽ L. Das (45+2')</p>
            <p>⚽ M. Reid (78')</p>
          </div>
        </div>

        <div className="score-block">
          <div className="score-items">
            <div className="score-num">3</div>
            <div className="dash">-</div>
            <div className="score-num small muted">1</div>
          </div>
          <div className="status">Full Time</div>
          <div className="meta">Regional League • Matchday 14</div>
        </div>

        <div className="team-block away">
          <h3 className="muted">Riverside FC</h3>
          <p className="role">Away</p>
          <div className="scorers muted">
            <p>⚽ K. Jones (60')</p>
            <div className="cards"><span>🟨</span><span>🟥</span></div>
          </div>
        </div>
      </div>

      <div className="match-stats">
        <div><strong>58%</strong><div>Possession</div></div>
        <div><strong>12</strong><div>Shots on Target</div></div>
        <div><strong>6</strong><div>Corners</div></div>
      </div>
    </section>
  );
}
