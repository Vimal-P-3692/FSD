// export default Home;

import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <section className="hero">
        <h1>Fast & Reliable Appliance Repair at Your Doorstep</h1>
        <Link to="/booking">
          <button className="cta">Book a Service</button>
        </Link>
      </section>

      <section className="user-dashboard">
        <div className="stat-card">
          <div className="stat-icon">📋</div>
          <h2>3</h2>
          <p>Active Bookings</p>
        </div>
        <div className="stat-card">
          <div className="stat-icon">✅</div>
          <h2>5</h2>
          <p>Completed Services</p>
        </div>
        <div className="stat-card">
          <div className="stat-icon">💰</div>
          <h2>₹2,150</h2>
          <p>Total Spent</p>
        </div>
        <div className="stat-card">
          <div className="stat-icon">⭐</div>
          <h2>2</h2>
          <p>Reviews Given</p>
        </div>
      </section>

      <section className="highlights">
        <div className="highlight">
          <div className="highlight-icon">🚚</div>
          <h3>Pickup</h3>
          <p>We pick up your appliance from your doorstep</p>
        </div>
        <div className="highlight">
          <div className="highlight-icon">🛠️</div>
          <h3>Repair</h3>
          <p>Expert technicians with quality service</p>
        </div>
        <div className="highlight">
          <div className="highlight-icon">📦</div>
          <h3>Delivery</h3>
          <p>Prompt delivery after repair completion</p>
        </div>
        <div className="highlight">
          <div className="highlight-icon">💳</div>
          <h3>Online Payment</h3>
          <p>Secure and convenient payment options</p>
        </div>
      </section>
    </div>
  );
}

export default Home;