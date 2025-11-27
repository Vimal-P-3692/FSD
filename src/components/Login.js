import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
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

  // Mock login function - no backend needed
  const mockLogin = async (email, password) => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Mock user database
    const mockUsers = [
      { email: "admin@gmail.com", password: "admin", role: "admin" },
      { email: "user@example.com", password: "user123", role: "user" },
    ];
    
    const user = mockUsers.find(u => u.email === email && u.password === password);
    
    if (user) {
      return {
        success: true,
        data: {
          token: "mock-jwt-token-" + Date.now(),
          user: {
            id: 1,
            email: user.email,
            role: user.role,
            name: user.email.split('@')[0]
          }
        }
      };
    } else {
      return {
        success: false,
        error: "Invalid email or password"
      };
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    console.log("🔄 Mock login attempt...");
    console.log("📧 Email:", formData.email);
    console.log("🔑 Password:", formData.password);
    
    try {
      const result = await mockLogin(formData.email, formData.password);
      
      if (result.success) {
        console.log("✅ Login successful!", result.data);
        localStorage.setItem("token", result.data.token);
        localStorage.setItem("user", JSON.stringify(result.data.user));
        
        // Redirect to admin dashboard
        navigate("/admin/dashboard");
      } else {
        setError(result.error || "Login failed. Please try again.");
      }
    } catch (err) {
      console.error("❌ Login error:", err);
      setError("An unexpected error occurred. Please try again.");
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
                <h2 className="auth-title">Admin Login</h2>
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

                <div className="login-btn-container">
                  <button
                    type="submit"
                    disabled={loading}
                    className="login-btn-primary"
                  >
                    {loading ? (
                      <span className="btn-loading">
                        <span className="btn-spinner"></span>
                        Logging in...
                      </span>
                    ) : (
                      "Login"
                    )}
                  </button>
                </div>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;