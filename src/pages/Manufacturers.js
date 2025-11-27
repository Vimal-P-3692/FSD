import React from "react";
import "./Page.css";

function Manufacturers() {
  return (
    <div className="page-container">
      <h1 className="page-title">For Manufacturers</h1>
      <p className="page-text">
        We partner with manufacturers who value repairability. Together, we make
        it easier for customers to extend the life of their products and reduce
        e-waste. Join us in building a sustainable future.
      </p>

      <div className="manufacturer-section">
        {/* Manufacturer Item 1 */}
        <div className="manufacturer-card">
          <img
            src="https://via.placeholder.com/400x200"
            alt="Repair-Friendly Design"
            className="manufacturer-image"
          />
          <div className="manufacturer-content">
            <h2>Collaborate on Repair-Friendly Design</h2>
            <p>
              Partner with RepairMate to design products that are easier to
              repair, upgrade, and recycle. This not only helps customers but
              also enhances your brand’s commitment to sustainability.
            </p>
          </div>
        </div>

        {/* Manufacturer Item 2 */}
        <div className="manufacturer-card">
          <img
            src="https://via.placeholder.com/400x200"
            alt="Genuine Spare Parts"
            className="manufacturer-image"
          />
          <div className="manufacturer-content">
            <h2>Provide Genuine Spare Parts</h2>
            <p>
              Ensure customers always have access to original spare parts by
              distributing through RepairMate. This increases trust and extends
              product lifespans with authentic, high-quality replacements.
            </p>
          </div>
        </div>

        {/* Manufacturer Item 3 */}
        <div className="manufacturer-card">
          <img
            src="https://via.placeholder.com/400x200"
            alt="Sustainability Initiatives"
            className="manufacturer-image"
          />
          <div className="manufacturer-content">
            <h2>Build Long-Term Sustainability Initiatives</h2>
            <p>
              Collaborate on large-scale sustainability programs aimed at
              reducing global e-waste. Together, we can influence industry
              standards and shape a greener future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Manufacturers;
