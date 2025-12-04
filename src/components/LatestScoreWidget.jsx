import React from "react";

export default function LatestScoreWidget() {
  return (
    <div className="latest-score-widget">
      <div className="label">Latest Match Result</div>
      <div className="score-row">
        <div className="team">
          <div className="team-abbr">HFC</div>
          <div className="team-role">Home</div>
        </div>
        <div className="score-bubble">3 - 1</div>
        <div className="team">
          <div className="team-abbr muted">RFC</div>
          <div className="team-role">Away</div>
        </div>
      </div>
      <a href="#results" className="full-stats">Full Stats →</a>
    </div>
  );
}
