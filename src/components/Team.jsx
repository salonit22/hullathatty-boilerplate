import React from "react";

const players = [
  {num: "10", name: "Alex Storm", role: "Forward", img: "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"},
  {num: "04", name: "Marcus Reid", role: "Defender", img: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"},
  {num: "07", name: "Leo Das", role: "Midfielder", img: "https://images.unsplash.com/photo-1543326727-2996f0d61183?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"},
  {num: "01", name: "David King", role: "Goalkeeper", img: "https://images.unsplash.com/photo-1563299796-b729d0af54a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"}
];

export default function Team() {
  return (
    <section id="team" className="team container">
      <div className="heading">
        <h2>Top Players</h2>
      </div>
      <div className="player-grid">
        {players.map(p => (
          <div className="player-card" key={p.num}>
            <div className="num-badge">{p.num}</div>
            <img src={p.img} alt={p.name} />
            <div className="player-info">
              <h4>{p.name} <span className="accent">{p.num}</span></h4>
              <p className="role">{p.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
