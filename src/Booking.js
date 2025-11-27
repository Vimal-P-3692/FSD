import React, { useState } from "react";
import { createBooking } from "./api";

function Booking() {
  const [formData, setFormData] = useState({
    applianceType: "",
    issueDescription: "",
    preferredDate: "",
    preferredTime: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Example: get token from localStorage (adjust as needed)
  const token = localStorage.getItem("token");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await createBooking(formData, token);
      alert("Booking confirmed! Our team will contact you soon.");
      setFormData({
        applianceType: "",
        issueDescription: "",
        preferredDate: "",
        preferredTime: "",
      });
    } catch (err) {
      const message =
        err.response?.data?.message || "Booking failed. Please try again.";
      setError(message);
      alert(message);
    }
    setLoading(false);
  };

  return (
    <div className="booking-container">
      <div className="booking-card">
        <h1>Book a Service</h1>
        {error && <div style={{ color: "red" }}>{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-section">
            <h2>Appliance Type</h2>
            <select
              name="applianceType"
              value={formData.applianceType}
              onChange={handleChange}
              required
            >
              <option value="">Select Appliance</option>
              <option value="refrigerator">Refrigerator</option>
              <option value="washing-machine">Washing Machine</option>
              <option value="air-conditioner">Air Conditioner</option>
              <option value="television">Television</option>
              <option value="microwave">Microwave Oven</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-section">
            <h2>Issue Description</h2>
            <textarea
              name="issueDescription"
              value={formData.issueDescription}
              onChange={handleChange}
              placeholder="Describe the issue you're facing"
              rows="4"
              required
            ></textarea>
          </div>

          <div className="divider"></div>

          <div className="form-section">
            <h2>Preferred Date</h2>
            <input
              type="date"
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-section">
            <h2>Preferred Time</h2>
            <select
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
              required
            >
              <option value="">Select Time Slot</option>
              <option value="09:00-11:00">09:00 AM - 11:00 AM</option>
              <option value="11:00-13:00">11:00 AM - 01:00 PM</option>
              <option value="13:00-15:00">01:00 PM - 03:00 PM</option>
              <option value="15:00-17:00">03:00 PM - 05:00 PM</option>
              <option value="17:00-19:00">05:00 PM - 07:00 PM</option>
            </select>
          </div>

          <button
            type="submit"
            className="confirm-booking-btn"
            disabled={loading}
          >
            {loading ? "Booking..." : "Confirm Booking"}
          </button>
        </form>

        <div className="booking-contact">
          <p>Contact: support@repairmate.com | +91-1234567890</p>
        </div>
      </div>
    </div>
  );
}

export default Booking;
