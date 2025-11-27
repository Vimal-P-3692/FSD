import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserCog } from "lucide-react"; // 🔥 Admin icon import
import Sidebar from "./Sidebar";

function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsAuthenticated(Boolean(localStorage.getItem("token")));
  }, []);
  const open = () => setSidebarOpen(true);
  const close = () => setSidebarOpen(false);

  return (
    <div className={`app-root ${sidebarOpen ? "sidebar-open" : ""}`}>
      {/* Topbar */}
      <header className="topbar">
        <div className="topbar-left">
          <button className="menu-btn" onClick={open} aria-label="Open menu">
            ☰
          </button>
          <div className="logo">RepairMate</div>
        </div>

        <div className="topbar-right">
          {/* Admin Link with Icon */}
          <Link className="auth admin-link" to="/login">
            <UserCog size={18} style={{ marginRight: "6px" }} />
            Admin
          </Link>
          <span className="sep">/</span>
          {isAuthenticated ? (
            <>
              <button
                className="auth logout-btn"
                onClick={() => {
                  localStorage.removeItem("token");
                  localStorage.removeItem("user");
                  setIsAuthenticated(false);
                  // Navigate to home after logout
                  navigate("/");
                }}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="auth" to="/userlogin">
                UserLogin
              </Link>
              <span className="sep">/</span>
              <Link className="auth" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </header>

      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={close} />

      {/* Main Content */}
      <div className="main-content">
        <main className="page">{children}</main>

        {/* Footer */}
        <footer className="site-footer">
          <div className="footer-content">
            <div className="footer-section">
              <h4>Resources</h4>
              <ul>
                <li><Link to="/press">Press</Link></li>
                <li><Link to="/news">News</Link></li>
                <li><Link to="/participate">Participate</Link></li>
                <li><Link to="/pro-wholesale">Pro Wholesale</Link></li>
                <li><Link to="/retail-locator">Retail Locator</Link></li>
                <li><Link to="/manufacturers">For Manufacturers</Link></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Legal</h4>
              <ul>
                <li><Link to="/accessibility">Accessibility</Link></li>
                <li><Link to="/privacy">Privacy</Link></li>
                <li><Link to="/terms">Terms</Link></li>
                <li><Link to="/cookie-consent">Cookie Consent</Link></li>
              </ul>
            </div>

            <div className="footer-section newsletter">
              <h4>Stay in the loop</h4>
              <p>Learn something new every month!</p>
              <form className="newsletter-form">
                <input type="email" placeholder="Enter your email" />
                <button type="submit">Subscribe</button>
              </form>
              <p className="small-text">Let me read it first!</p>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <p>Help translate: 💬️</p>
              <p>Repair is noble</p>
              <p>© 2025 RepairMate — Licensed under Creative Commons</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Layout;
