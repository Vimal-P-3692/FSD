import React from "react";
import { Link, useNavigate } from "react-router-dom"; // ✅ import useNavigate
import "./ForgotPassword.css";

function ForgotPassword() {
  const navigate = useNavigate(); // ✅ initialize navigate

  // ✅ handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/reset-password"); // go to reset password page
  };

  return (
    <div className="forgot-page">
      <div className="forgot-container">
        {/* Left Side - Image */}
        <div className="forgot-left">
          <div className="image-container">
            <img
              src="https://images.fineartamerica.com/images-medium-large-5/person-repairing-electronic-equipment-wladimir-bulgarscience-photo-library.jpg"
              alt="Repair Service"
              className="forgot-image"
            />
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="forgot-right">
          <div className="forgot-form-container">
            <div className="auth-card">
              <div className="auth-header">
                <h2 className="auth-title">Reset Password</h2>
                <p className="auth-subtitle">
                  Enter your email to reset your RepairMate account password
                </p>
              </div>

              {/* ✅ add onSubmit here */}
              <form className="forgot-form" onSubmit={handleSubmit}>
                <div className="form-section">
                  <label className="form-section-title">Email Address</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="auth-input"
                    required
                  />
                </div>

                <button type="submit" className="auth-btn">
                  Send Reset Link
                </button>
              </form>

              <p className="auth-link-text">
                Remembered your password?{" "}
                <Link to="/login" className="auth-link">
                  Back to Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
