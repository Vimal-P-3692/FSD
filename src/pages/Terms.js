import React from "react";
import "./Page.css";

function Terms() {
  return (
    <div className="page-container">
      <h1 className="page-title">Terms & Conditions</h1>
      <img
        src="https://picsum.photos/800/400?random=1"
        alt="Terms Illustration"
        className="page-image"
      />

      <p className="page-text">
        By using RepairMate’s services, you agree to the following terms and
        conditions. Please review them carefully to understand your rights and
        responsibilities.
      </p>

      <div className="terms-list">
        <h2>Key Points</h2>
        <ul>
          <li>
            <strong>Service Usage:</strong> Our services should be used
            responsibly and only for lawful purposes.
          </li>
          <li>
            <strong>Payments:</strong> All payments must be completed before
            service delivery unless otherwise agreed.
          </li>
          <li>
            <strong>Liability:</strong> RepairMate is not responsible for issues
            caused by misuse or unauthorized repair attempts.
          </li>
          <li>
            <strong>Privacy:</strong> Your personal data is handled as per our{" "}
            <a href="/privacy">Privacy Policy</a>.
          </li>
          <li>
            <strong>Updates:</strong> We may update these terms occasionally, so
            please check this page regularly.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Terms;
