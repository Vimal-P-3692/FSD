import React from "react";
import "./Page.css";

function RetailLocator() {
  return (
    <div className="page-container">
      <h1 className="page-title">Retail Locator</h1>
      <p className="page-text">
        Find a RepairMate retail partner near you. Our retail locations provide
        high-quality parts, tools, and repair guidance to ensure your devices
        stay in top shape.
      </p>

      <div className="locator-section">
        {/* Retail Item 1 */}
        <div className="locator-card">
          <img
            src="https://via.placeholder.com/400x200"
            alt="Nearby Stores"
            className="locator-image"
          />
          <div className="locator-content">
            <h2>Locate Nearby Retail Stores</h2>
            <p>
              Use our locator tool to find the closest RepairMate retail store.
              With locations nationwide, you can easily access the parts and
              tools you need without delay.
            </p>
          </div>
        </div>

        {/* Retail Item 2 */}
        <div className="locator-card">
          <img
            src="https://via.placeholder.com/400x200"
            alt="Product Availability"
            className="locator-image"
          />
          <div className="locator-content">
            <h2>Check Product Availability</h2>
            <p>
              Save time by checking real-time stock availability before visiting
              a store. Our system ensures you know exactly what’s in stock and
              ready for purchase.
            </p>
          </div>
        </div>

        {/* Retail Item 3 */}
        <div className="locator-card">
          <img
            src="https://via.placeholder.com/400x200"
            alt="Certified Professionals"
            className="locator-image"
          />
          <div className="locator-content">
            <h2>Find Certified Repair Professionals</h2>
            <p>
              Get expert help from certified technicians available at our retail
              partner locations. Whether it’s troubleshooting or repairs, we’ve
              got you covered.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RetailLocator;
