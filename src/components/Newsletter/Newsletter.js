import React from "react";
import "./Newsletter.css";

function Newsletter() {
  return (
    <div className="newsletter-container">
      <h1 className="newsletter-title">Newsletter</h1>
      <p className="newsletter-text">
        Subscribe to our newsletter and stay updated with the latest news,
        offers, and repair tips.
      </p>

      <div className="newsletter-box">
        <input
          type="email"
          placeholder="Enter your email"
          className="newsletter-input"
        />
        <button className="newsletter-btn">Subscribe</button>
      </div>
    </div>
  );
}

export default Newsletter;
