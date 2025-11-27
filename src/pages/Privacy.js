import React from "react";
import "./Page.css";

function Privacy() {
  return (
    <div className="page-container">
      <h1 className="page-title">Privacy Policy</h1>
      <p className="page-text">
        At <strong>RepairMate</strong>, your privacy is important to us. 
        This Privacy Policy explains how we collect, use, and protect your information 
        when you use our website, products, and services. By using RepairMate, 
        you agree to the practices described below.
      </p>

      <div className="privacy-wrapper">
        <section className="privacy-section">
          <h2>1. Information We Collect</h2>
          <ul>
            <li><strong>Personal Information:</strong> Name, email, phone number, and billing details.</li>
            <li><strong>Technical Information:</strong> IP address, browser type, OS, and usage data.</li>
            <li><strong>Cookies & Tracking:</strong> To enhance your experience and analyze performance.</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>2. How We Use Your Information</h2>
          <ul>
            <li>Provide and maintain our services.</li>
            <li>Improve and personalize our offerings.</li>
            <li>Process payments securely.</li>
            <li>Communicate updates, support, and marketing (with consent).</li>
            <li>Comply with legal obligations and prevent fraud.</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>3. Data Protection & Security</h2>
          <p>
            We use strict security measures to protect your data. However, no method 
            of online transmission or storage is 100% secure, and absolute safety 
            cannot be guaranteed.
          </p>
        </section>

        <section className="privacy-section">
          <h2>4. Sharing of Information</h2>
          <p>
            We <strong>do not</strong> sell, trade, or rent your personal data. We only share with:
          </p>
          <ul>
            <li>Trusted providers who help us run our services.</li>
            <li>Legal authorities when required by law.</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>5. Cookies & Tracking</h2>
          <p>
            Cookies help us improve user experience and analyze traffic. You can disable 
            them in browser settings, though some features may not work properly.
          </p>
        </section>

        <section className="privacy-section">
          <h2>6. Your Rights</h2>
          <ul>
            <li>Access your stored personal data.</li>
            <li>Request corrections or updates.</li>
            <li>Request deletion (“Right to be Forgotten”).</li>
            <li>Opt-out of marketing communications.</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>7. Updates to This Policy</h2>
          <p>
            We may update this Privacy Policy periodically. Updates will appear here with 
            a new “Last Updated” date. Please review regularly.
          </p>
        </section>

        <section className="privacy-section">
          <h2>8. Contact Us</h2>
          <p>
            📧 Email: <a href="mailto:privacy@repairmate.com"></a> <br />
            📞 Phone: +91 7339027298<br />
            📍 Address: RepairMate HQ, 123 Tech Street, Innovation City
          </p>
        </section>
      </div>
    </div>
  );
}

export default Privacy;
