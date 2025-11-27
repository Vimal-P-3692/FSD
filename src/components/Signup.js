import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../api";
import "./Signup.css"; // We'll create this CSS file

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    rememberMe: false,
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }
    try {
      const res = await register({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });
      localStorage.setItem("token", res.data.token);
      navigate("/"); // Redirect to home page
    } catch (err) {
      setError(
        err.response?.data?.message || "Signup failed. Please try again."
      );
    }
    setLoading(false);
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <div className="signup-left">
          <div className="image-container">
            <img
              src="https://images.fineartamerica.com/images-medium-large-5/person-repairing-electronic-equipment-wladimir-bulgarscience-photo-library.jpg"
              alt="Appliance Repair"
              className="signup-image"
            />
          </div>
        </div>

        <div className="signup-right">
          <div className="signup-form-container">
            <div className="auth-card">
              <div className="auth-header">
                <h2 className="auth-title">Create Account</h2>
                <p className="auth-subtitle">Join RepairMate today</p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="form-section">
                  <h3 className="form-section-title">Full Name</h3>
                  <div className="input-group">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                      className="auth-input"
                    />
                  </div>
                </div>

                <div className="form-section">
                  <h3 className="form-section-title">Email Address</h3>
                  <div className="input-group">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                      className="auth-input"
                    />
                  </div>
                </div>

                <div className="form-section">
                  <h3 className="form-section-title">Password</h3>
                  <div className="input-group">
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Create a password"
                      required
                      className="auth-input"
                    />
                  </div>
                </div>

                <div className="form-section">
                  <h3 className="form-section-title">Confirm Password</h3>
                  <div className="input-group">
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="Confirm your password"
                      required
                      className="auth-input"
                    />
                  </div>

                  <div className="form-options">
                    <label className="checkbox-container">
                      <input
                        type="checkbox"
                        name="rememberMe"
                        checked={formData.rememberMe}
                        onChange={handleChange}
                      />
                      <span className="checkmark"></span>I agree to the Terms
                      and Conditions
                    </label>
                  </div>
                </div>

                <button type="submit" className="auth-btn" disabled={loading}>
                  {loading ? "Signing up..." : "Create Account"}
                </button>
                {error && <div style={{ color: "red" }}>{error}</div>}
              </form>

              <div className="divider">
                <span>OR CONTINUE WITH</span>
              </div>

              <div className="social-login">
                <button type="button" className="social-btn google">
                  <span className="social-icon">
                    <i className="fab fa-google"></i>
                  </span>
                  Google
                </button>
                <button type="button" className="social-btn facebook">
                  <span className="social-icon">
                    <i className="fab fa-facebook-f"></i>
                  </span>
                  Facebook
                </button>
              </div>

              <p className="auth-link-text">
                Already have an account?{" "}
                <Link to="/login" className="auth-link">
                  Login here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
