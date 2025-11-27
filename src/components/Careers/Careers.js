import React from "react";
import "./Careers.css";

function Careers() {
  return (
    <div className="careers-container">
      <h1 className="careers-title">Careers at RepairMate</h1>
      <p className="careers-text">
        Join our growing team and be part of a company that values innovation
        and customer success.
      </p>

      <div className="careers-grid">
        <div className="careers-card">
          <h2>👨‍💻 Open Roles</h2>
          <p>Explore current job openings across various departments.</p>
        </div>
        <div className="careers-card">
          <h2>🚀 Why Work With Us</h2>
          <p>We offer growth opportunities, flexible culture, and meaningful work.</p>
        </div>
        <div className="careers-card">
          <h2>📩 Apply Now</h2>
          <p>Send us your resume and start your journey with RepairMate.</p>
        </div>
      </div>
    </div>
  );
}

export default Careers;
