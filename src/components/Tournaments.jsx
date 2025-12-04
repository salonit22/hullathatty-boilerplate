import React from "react";

function TCard({ title, date, status, meta1, meta2, cta }) {
  return (
    <div className={`tcard ${status ? status.toLowerCase() : ""}`}>
      <div className="tcard-media" />
      <div className="tcard-body">
        <h3>{title}</h3>
        <div className="meta">
          <div><strong>{meta1.label}:</strong> <span>{meta1.value}</span></div>
          <div><strong>{meta2.label}:</strong> <span>{meta2.value}</span></div>
        </div>
        <button className="btn full">{cta}</button>
      </div>
    </div>
  );
}

export default function Tournaments() {
  return (
    <section id="tournaments" className="tournaments container">
      <div className="heading">
        <h2>Tournaments</h2>
      </div>

      <div className="tgrid">
        <TCard title="Regional Super Cup" status="Active" meta1={{label:"Format", value:"11 vs 11 Knockout"}} meta2={{label:"Date", value:"Dec 15 - Dec 20"}} cta="View Bracket" />
        <TCard title="Winter 5-A-Side" status="Open" meta1={{label:"Format", value:"5 vs 5 Turf"}} meta2={{label:"Date", value:"Jan 10 - Jan 12"}} cta="Register Team" />
        <TCard title="Summer League 24" status="Ended" meta1={{label:"Winner", value:"Hullathatty FC"}} meta2={{label:"Date", value:"Aug 01 - Aug 30"}} cta="See Results" />
      </div>
    </section>
  );
}
