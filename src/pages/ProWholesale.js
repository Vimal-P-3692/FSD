import React from "react";
import "./Page.css";

function ProWholesale() {
  return (
    <div className="page-container">
      <h1 className="page-title">Pro Wholesale</h1>
      <p className="page-text">
        Our Pro Wholesale program is designed for businesses that require repair
        parts and tools in bulk. Whether you are a retailer, service provider,
        or reseller, we offer competitive pricing and dedicated support.
      </p>

      <div className="news-section">
        {/* Wholesale Item 1 */}
        <div className="news-card">
          <img
            src="https://via.placeholder.com/400x200"
            alt="Bulk Discounts"
            className="news-image"
          />
          <div className="news-content">
            <h2>Exclusive Discounts on Bulk Orders</h2>
            <p>
              Save more when you order in bulk. Our wholesale program ensures
              competitive pricing on spare parts, tools, and accessories so
              your business can maximize profits while reducing costs.
            </p>
          </div>
        </div>

        {/* Wholesale Item 2 */}
        <div className="news-card">
          <img
            src="https://via.placeholder.com/400x200"
            alt="Account Manager"
            className="news-image"
          />
          <div className="news-content">
            <h2>Dedicated Account Management</h2>
            <p>
              Get personalized support from our wholesale account managers.
              From order tracking to special requests, our team is here to
              make your bulk purchasing process smooth and efficient.
            </p>
          </div>
        </div>

        {/* Wholesale Item 3 */}
        <div className="news-card">
          <img
            src="https://via.placeholder.com/400x200"
            alt="Wholesale Catalog"
            className="news-image"
          />
          <div className="news-content">
            <h2>Access to Our Wholesale Catalog</h2>
            <p>
              Explore our extensive wholesale product catalog, featuring
              high-quality repair parts and professional-grade tools.
              Partners gain early access to new products and seasonal
              inventory updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProWholesale;
