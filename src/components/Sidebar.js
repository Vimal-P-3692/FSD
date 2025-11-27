import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar({ isOpen, onClose }) {
  return (
    <>
      <div className={`sidebar ${isOpen ? "open" : ""}`} aria-hidden={!isOpen}>
        <button className="sidebar-close" onClick={onClose} aria-label="Close menu">
          ×
        </button>
        <h2 className="sidebar-title yellow-text">RepairMate</h2>

        <nav className="sidebar-nav">
          <NavLink 
            to="/" 
            onClick={onClose}
            className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
            end
          >
            Home
          </NavLink>
          <NavLink 
            to="/services" 
            onClick={onClose}
            className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
          >
            Services
          </NavLink>
          <NavLink 
            to="/booking" 
            onClick={onClose}
            className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
          >
            Book a Service
          </NavLink>
          <NavLink 
            to="/track" 
            onClick={onClose}
            className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
          >
            Track Service
          </NavLink>
          <NavLink 
            to="/support" 
            onClick={onClose}
            className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
          >
            Support
          </NavLink>
          <NavLink 
            to="/about" 
            onClick={onClose}
            className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
          >
            About Us
          </NavLink>
          
          {/* New Items */}
          <NavLink 
            to="/discuss" 
            onClick={onClose}
            className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
          >
            Discuss
          </NavLink>
          <NavLink 
            to="/careers" 
            onClick={onClose}
            className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
          >
            Careers
          </NavLink>
          <NavLink 
            to="/newsletter" 
            onClick={onClose}
            className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
          >
            Newsletter
          </NavLink>
        </nav>
      </div>

      {/* backdrop */}
      <div className={`backdrop ${isOpen ? "show" : ""}`} onClick={onClose} />
    </>
  );
}

export default Sidebar;