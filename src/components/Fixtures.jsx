import React from "react";

export default function Fixtures() {
  return (
    <section id="fixtures" className="fixtures container">
      <div className="heading">
        <h2><span className="accent">Upcoming</span> Fixtures</h2>
      </div>

      <div className="fixture-list">
        <div className="fixture">
          <div className="left"><div className="badge">HFC</div><div className="team-name">Hullathatty</div></div>
          <div className="center"><div className="vs">VS</div><div className="date">OCT 12, 16:00 PM</div><div className="venue">City Stadium</div></div>
          <div className="right"><div className="team-name">Spartans</div><div className="badge">SFC</div></div>
        </div>

        <div className="fixture">
          <div className="left"><div className="badge">WFC</div><div className="team-name muted">Wolves</div></div>
          <div className="center"><div className="vs">VS</div><div className="date">OCT 19, 18:30 PM</div><div className="venue">Away Ground</div></div>
          <div className="right"><div className="team-name">Hullathatty</div><div className="badge">HFC</div></div>
        </div>
      </div>

      <div className="center action">
        <button className="btn outline">Full Calendar</button>
      </div>
    </section>
  );
}
