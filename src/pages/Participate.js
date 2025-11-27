import React from "react";
import "./Page.css";

function Participate() {
  return (
    <div className="page-container">
      <h1 className="page-title">Participate</h1>
      <p className="page-text">
        We believe repair is for everyone. Get involved with RepairMate’s
        community programs and workshops. Share your expertise, learn new
        skills, and help us make repair accessible for all.
      </p>

      <div className="news-section">
        {/* Participate Item 1 */}
        <div className="news-card">
          <img
            src="https://via.placeholder.com/400x200"
            alt="Repair Workshop"
            className="news-image"
          />
          <div className="news-content">
            <h2>Join Community Repair Workshops</h2>
            <p>
              Attend hands-on workshops where you’ll learn to repair everyday
              gadgets and devices. These sessions bring people together to
              share knowledge and reduce e-waste while saving money.
            </p>
          </div>
        </div>

        {/* Participate Item 2 */}
        <div className="news-card">
          <img
            src="https://via.placeholder.com/400x200"
            alt="Volunteer Mentor"
            className="news-image"
          />
          <div className="news-content">
            <h2>Volunteer as a Repair Mentor</h2>
            <p>
              Share your technical expertise with the community by mentoring
              others. As a repair mentor, you’ll guide participants through
              troubleshooting and fixing devices, making repair knowledge
              accessible to everyone.
            </p>
          </div>
        </div>

        {/* Participate Item 3 */}
        <div className="news-card">
          <img
            src="https://via.placeholder.com/400x200"
            alt="Partner with Us"
            className="news-image"
          />
          <div className="news-content">
            <h2>Partner with RepairMate for Events</h2>
            <p>
              Collaborate with RepairMate to host repair drives, educational
              events, or corporate sustainability programs. Together, we can
              inspire change and promote a culture of repair worldwide.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Participate;
