import React from "react";
import { Link } from "react-router-dom";
import "./ForgotPassword.css"; // reuse same css for consistent design

function ResetPassword() {
  return (
    <div className="forgot-page">
      <div className="forgot-container">
        {/* Left Side - Image */}
        <div className="forgot-left">
          <div className="image-container">
            <img
              src="https://images.fineartamerica.com/images-medium-large-5/person-repairing-electronic-equipment-wladimir-bulgarscience-photo-library.jpg" 
              alt="Reset Password"
              className="forgot-image"
            />
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="forgot-right">
          <div className="forgot-form-container">
            <div className="auth-card">
              <div className="auth-header">
                <h2 className="auth-title">Set New Password</h2>
                <p className="auth-subtitle">
                  Enter and confirm your new password for your RepairMate account
                </p>
              </div>

              <form className="forgot-form">
                <div className="form-section">
                  <label className="form-section-title">New Password</label>
                  <input
                    type="password"
                    placeholder="Enter new password"
                    className="auth-input"
                    required
                  />
                </div>

                <div className="form-section">
                  <label className="form-section-title">Confirm Password</label>
                  <input
                    type="password"
                    placeholder="Confirm new password"
                    className="auth-input"
                    required
                  />
                </div>

                <button type="submit" className="auth-btn">
                  Reset Password
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

export default ResetPassword;
