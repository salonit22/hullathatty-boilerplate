import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="contact container">
      <div className="contact-grid">
        <div className="contact-info">
          <h2>Get In <span className="accent">Touch</span></h2>
          <p>Have questions regarding sponsorship, trials, or tickets? Reach out to us.</p>

          <div className="info-item">
            <strong>Address</strong>
            <p>123 Victory Lane, Hullathatty,<br/>Sports District, 40001</p>
          </div>

          <div className="info-item">
            <strong>Phone</strong>
            <p>+91 987 654 3210</p>
          </div>

          <div className="info-item">
            <strong>Email</strong>
            <p>contact@hullathattyfc.com</p>
          </div>

          <div className="socials">
            <a href="#" className="social">F</a>
            <a href="#" className="social">T</a>
            <a href="#" className="social">I</a>
            <a href="#" className="social">Y</a>
          </div>
        </div>

        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15662.688220738!2d76.69!3d11.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDAzJzAwLjAiTiA3NsKwNDEnMjQuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
            width="100%" height="100%" style={{border:0, filter: "grayscale(100%) invert(92%) contrast(83%)"}} allowFullScreen loading="lazy" />
        </div>
      </div>
    </section>
  );
}
