import React from "react";

export default function Join() {
  return (
    <section id="join" className="join container">
      <div className="join-card">
        <h2>Join The <span className="accent">Revolution</span></h2>
        <p>Register for trials or become an official member today.</p>
        <form className="join-form" onSubmit={(e)=>e.preventDefault()}>
          <div className="row">
            <label>Full Name <input type="text" placeholder="John Doe"/></label>
            <label>Date of Birth <input type="date"/></label>
          </div>
          <div className="row">
            <label>Email <input type="email" placeholder="YOU@EMAIL.COM"/></label>
            <label>Position
              <select>
                <option>Forward</option>
                <option>Midfielder</option>
                <option>Defender</option>
                <option>Goalkeeper</option>
                <option>Fan / Supporter</option>
              </select>
            </label>
          </div>
          <button className="btn primary full">Submit Application</button>
        </form>
      </div>
    </section>
  );
}
