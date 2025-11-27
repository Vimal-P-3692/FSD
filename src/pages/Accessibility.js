import React from "react";
import "./Page.css";

function Accessibility() {
  return (
    <div className="page-container">
      <h1 className="page-title">Accessibility</h1>
      <p className="page-text">
        RepairMate is committed to providing accessible services and ensuring
        that everyone can use our platform without barriers. We continuously
        improve our website and resources for inclusivity.
      </p>

      <div className="accessibility-section">
        {/* Item 1 */}
        <div className="accessibility-card">
          <img
            src="https://via.placeholder.com/400x200"
            alt="Inclusive Design"
            className="accessibility-image"
          />
          <div className="accessibility-content">
            <h2>Inclusive Web Design</h2>
            <p>
              We follow WCAG and accessibility best practices to make sure our
              website is usable by people of all abilities. Clear navigation,
              readable text, and keyboard-friendly features are part of our
              design standards.
            </p>
          </div>
        </div>

        {/* Item 2 */}
        <div className="accessibility-card">
          <img
            src="https://via.placeholder.com/400x200"
            alt="Assistive Technologies"
            className="accessibility-image"
          />
          <div className="accessibility-content">
            <h2>Support for Assistive Technologies</h2>
            <p>
              Our platform is optimized for screen readers and assistive devices,
              ensuring everyone has equal access to information and services,
              regardless of their technology needs.
            </p>
          </div>
        </div>

        {/* Item 3 */}
        <div className="accessibility-card">
          <img
            src="https://via.placeholder.com/400x200"
            alt="Continuous Improvement"
            className="accessibility-image"
          />
          <div className="accessibility-content">
            <h2>Continuous Accessibility Improvements</h2>
            <p>
              We regularly test, audit, and update our website to improve
              accessibility. Feedback from our community helps us identify areas
              where we can do better and deliver a more inclusive experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accessibility;
