import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userLogin } from "../api";
import "./UserLogin.css";

function UserLogin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await userLogin(formData);
      localStorage.setItem("token", res.data.token);
      navigate("/"); // Redirect to home page
    } catch (err) {
      setError(
        err.response?.data?.message || "Login failed. Please try again."
      );
    }
    setLoading(false);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-left">
          <div className="image-container">
            <img
              src="https://images.fineartamerica.com/images-medium-large-5/person-repairing-electronic-equipment-wladimir-bulgarscience-photo-library.jpg"
              alt="Appliance Repair"
              className="login-image"
            />
          </div>
        </div>

        <div className="login-right">
          <div className="login-form-container">
            <div className="auth-card">
              <div className="auth-header">
                <h2 className="auth-title">Customer Login</h2>
                <p className="auth-subtitle">Access your RepairMate account</p>
              </div>

              <form onSubmit={handleSubmit}>
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
                      placeholder="Enter your password"
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
                      <span className="checkmark"></span>
                      Remember me
                    </label>

                    <Link to="/forgot-password" className="auth-link">
                      Forgot password?
                    </Link>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="auth-btn"
                >
                  {loading ? "Logging in..." : "Login"}
                </button>
                {error && <div className="error-message">{error}</div>}
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
                Don't have an account?{" "}
                <Link to="/signup" className="auth-link">
                  Sign up here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;