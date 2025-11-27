import React from "react";
import "./Page.css";

function News() {
  return (
    <div className="page-container">
      <h1 className="page-title">News</h1>
      <p className="page-text">
        Stay updated with the latest RepairMate news, events, and stories.
        From product launches to sustainability initiatives, this page brings
        you all the updates you need to know.
      </p>

      <div className="news-section">
        {/* News Item 1 */}
        <div className="news-card">
          <img
            src="https://via.placeholder.com/400x200"
            alt="Company Events"
            className="news-image"
          />
          <div className="news-content">
            <h2>Company Events & Community Outreach</h2>
            <p>
              RepairMate actively participates in community service programs
              and charity events. Our recent event focused on promoting
              e-waste recycling and educating people about sustainable gadget
              repairs.
            </p>
          </div>
        </div>

        {/* News Item 2 */}
        <div className="news-card">
          <img
            src="https://via.placeholder.com/400x200"
            alt="Product Updates"
            className="news-image"
          />
          <div className="news-content">
            <h2>Product & Service Updates</h2>
            <p>
              We’ve recently launched doorstep repair services and a new
              mobile app for booking. Customers can now schedule repairs,
              track service status, and get instant support more easily.
            </p>
          </div>
        </div>

        {/* News Item 3 */}
        <div className="news-card">
          <img
            src="https://via.placeholder.com/400x200"
            alt="Awards"
            className="news-image"
          />
          <div className="news-content">
            <h2>Industry Recognitions & Awards</h2>
            <p>
              RepairMate has been recognized as a leader in sustainable
              technology repairs, winning the “Green Tech Award 2025” for our
              eco-friendly practices and excellent customer service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
