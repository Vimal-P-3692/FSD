import React from "react";
import "./Page.css";

function CookieConsent() {
  return (
    <div className="page-container">
      <h1 className="page-title">Cookie Consent</h1>
      <img
        src="https://picsum.photos/800/400?random=2"
        alt="Cookie Consent Illustration"
        className="page-image"
      />

      <p className="page-text">
        We use cookies to enhance your experience, analyze traffic, and
        personalize content. By continuing to browse RepairMate, you consent to
        our use of cookies in line with our policy.
      </p>

      <div className="terms-list">
        <h2>Why We Use Cookies</h2>
        <ul>
          <li>
            <strong>Improved Experience:</strong> Cookies help us remember your
            preferences and deliver smoother navigation.
          </li>
          <li>
            <strong>Analytics:</strong> We use cookies to understand visitor
            behavior and improve our services.
          </li>
          <li>
            <strong>Personalization:</strong> Cookies allow us to customize
            content and recommendations for you.
          </li>
          <li>
            <strong>Security:</strong> Cookies help us protect your account by
            detecting suspicious activities.
          </li>
          <li>
            <strong>Control:</strong> You may disable cookies in your browser
            settings, but some features may not work properly.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CookieConsent;
