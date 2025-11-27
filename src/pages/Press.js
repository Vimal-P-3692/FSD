import React from "react";
import "./Page.css";

function Press() {
  return (
    <div className="page-container">
      <h1 className="page-title">Press</h1>
      
      <p className="page-text">
        Welcome to the <strong>RepairMate Press Center</strong>. 
        Here you’ll find our latest official press releases, media kits, brand assets, 
        and company announcements. Our goal is to provide clear, transparent, 
        and timely updates about our services, innovations, and initiatives.
      </p>

      {/* Featured Press Releases */}
      <section className="press-section">
        <h2 className="section-title">Latest Press Releases</h2>
        <div className="press-grid">
          <div className="press-card">
            <img 
              src="https://source.unsplash.com/600x400/?technology,ai" 
              alt="AI diagnostics" 
            />
            <div className="press-content">
              <h3>AI-Powered Diagnostics Tool</h3>
              <p><strong>Sept 10, 2025</strong> – RepairMate launches an 
              AI-powered diagnostics tool to improve repair accuracy and reduce costs.</p>
              <a href="#">Read More</a>
            </div>
          </div>

          <div className="press-card">
            <img 
              src="https://source.unsplash.com/600x400/?global,business" 
              alt="Global expansion" 
            />
            <div className="press-content">
              <h3>Expansion into New Markets</h3>
              <p><strong>Aug 18, 2025</strong> – We’re proud to announce 
              our expansion into 3 new international markets, bringing services 
              closer to customers worldwide.</p>
              <a href="#">Read More</a>
            </div>
          </div>

          <div className="press-card">
            <img 
              src="https://source.unsplash.com/600x400/?sustainability,eco" 
              alt="Sustainability partnership" 
            />
            <div className="press-content">
              <h3>Sustainability Partnership</h3>
              <p><strong>July 05, 2025</strong> – RepairMate partners with leading 
              sustainability organizations to promote eco-friendly repair solutions.</p>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
      </section>

      {/* Media Resources */}
      <section className="press-section">
        <h2 className="section-title">Media Resources</h2>
        <div className="resource-grid">
          <div className="resource-card">
            <img 
              src="https://source.unsplash.com/400x300/?documents,office" 
              alt="Media Kit" 
            />
            <p><a href="#">Download Media Kit</a></p>
          </div>
          <div className="resource-card">
            <img 
              src="https://source.unsplash.com/400x300/?news,press" 
              alt="Press Releases" 
            />
            <p><a href="#">Latest Press Releases</a></p>
          </div>
          <div className="resource-card">
            <img 
              src="https://source.unsplash.com/400x300/?logo,branding" 
              alt="Logos and brand" 
            />
            <p><a href="#">Access Logos & Brand Resources</a></p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Press;
