// import React from "react";
// import "./Support.css";

// function Support() {
//   return (
//     <div className="support-container">
//       <h1 className="support-title">Support Center</h1>
//       <p className="support-text">
//         Need help? We’re here for you. Explore our FAQs, contact our team, or
//         use the resources below to resolve your issues quickly.
//       </p>

//       <div className="support-grid">
//         <div className="support-card">
//           <h2>📖 FAQs</h2>
//           <p>Find quick answers to the most common questions about our services.</p>
//           <a href="/faq" className="support-link">View FAQs</a>
//         </div>

//         <div className="support-card">
//           <h2>📩 Contact Us</h2>
//           <p>Need personalized assistance? Reach out to our support team.</p>
//           <a href="/contact" className="support-link">Contact Support</a>
//         </div>

//         <div className="support-card">
//           <h2>⚡ Track Requests</h2>
//           <p>Check the status of your support tickets or service requests.</p>
//           <a href="/track" className="support-link">Track Now</a>
//         </div>

//         <div className="support-card">
//           <h2>💬 Live Chat</h2>
//           <p>Connect instantly with a support agent for real-time help.</p>
//           <a href="/chat" className="support-link">Start Chat</a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Support;


import React from "react";
import "./Support.css";

function Support() {
  return (
    <div className="support-container">
      <h1 className="support-title">Support Center</h1>
      <p className="support-text">
        Need help? We’re here for you. Explore our FAQs, contact our team, or
        use the resources below to resolve your issues quickly.
      </p>

      <div className="support-grid">
        <div className="support-card">
          <h2>📖 FAQs</h2>
          <p>Find quick answers to the most common questions about our services.</p>
          <a href="/faq" className="support-link">View FAQs</a>
        </div>

        <div className="support-card">
          <h2>📩 Contact Us</h2>
          <p>Need personalized assistance? Reach out to our support team.</p>
          <a href="/contact" className="support-link">Contact Support</a>
        </div>

        <div className="support-card">
          <h2>⚡ Track Requests</h2>
          <p>Check the status of your support tickets or service requests.</p>
          <a href="/track" className="support-link">Track Now</a>
        </div>

        <div className="support-card">
          <h2>💬 Live Chat</h2>
          <p>Connect instantly with a support agent for real-time help.</p>
          <a href="/chat" className="support-link">Start Chat</a>
        </div>
      </div>
    </div>
  );
}

export default Support;
