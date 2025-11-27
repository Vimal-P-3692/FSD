import React from "react";
import "./Discuss.css";

function Discuss() {
  return (
    <div className="discuss-container">
      <h1 className="discuss-title">Community Discussions</h1>
      <p className="discuss-text">
        Share your thoughts, ask questions, and connect with others in our
        RepairMate community.
      </p>

      <div className="discuss-grid">
        <div className="discuss-card">
          <h2>💡 Ideas</h2>
          <p>Suggest new features or improvements for our services.</p>
        </div>
        <div className="discuss-card">
          <h2>❓ Q&A</h2>
          <p>Ask questions and get help from experts and fellow users.</p>
        </div>
        <div className="discuss-card">
          <h2>🛠 Tips</h2>
          <p>Share repair tips and tricks to help the community.</p>
        </div>
      </div>
    </div>
  );
}

export default Discuss;
