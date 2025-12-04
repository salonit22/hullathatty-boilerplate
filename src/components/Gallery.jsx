import React from "react";

export default function Gallery() {
  return (
    <section id="gallery" className="gallery container">
      <div className="heading">
        <h2>Action <span className="outline">Gallery</span></h2>
      </div>

      <div className="gallery-grid">
        <div className="feature">
          <img src="https://images.unsplash.com/photo-1504125247963-36c92d50e829?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Match"/>
        </div>
        <div className="thumb"><img src="https://images.unsplash.com/photo-1551280857-2b9bbe52cfeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Training"/></div>
        <div className="thumb"><img src="https://images.unsplash.com/photo-1510022079733-8b58aca7c4a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Celebration"/></div>
      </div>

      <div className="center action">
        <button className="btn link">View All Photos</button>
      </div>
    </section>
  );
}
