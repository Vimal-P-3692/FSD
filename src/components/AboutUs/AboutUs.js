import React from "react";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>
      <p className="about-text">
        Learn more about RepairMate — who we are, our mission, and our values.
      </p>

      <div className="about-grid">
        <div className="about-card">
          <h2>🏢 Our Company</h2>
          <p>We provide trusted repair services with a commitment to quality and care.</p>
        </div>
        <div className="about-card">
          <h2>🌍 Our Mission</h2>
          <p>To make repair services simple, accessible, and eco-friendly for everyone.</p>
        </div>
        <div className="about-card">
          <h2>🤝 Our Values</h2>
          <p>Transparency, customer focus, and sustainability are at the heart of what we do.</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
