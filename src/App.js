// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import ServicesPage from "./components/ServicesPage/ServicesPage";
import BookingPage from "./components/BookingPage/BookingPage";
import Support from "./components/Support/Support";
import AboutUs from "./components/AboutUs/AboutUs";
import Discuss from "./components/Discuss/Discuss";
import Careers from "./components/Careers/Careers";
import Newsletter from "./components/Newsletter/Newsletter";

import Login from "./components/Login";
import UserLogin from "./components/UserLogin";
import AdminDashboard from './components/AdminDashboard';
import Signup from "./components/Signup";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";


// Footer pages
import Press from "./pages/Press";
import News from "./pages/News";
import Participate from "./pages/Participate";
import ProWholesale from "./pages/ProWholesale";
import RetailLocator from "./pages/RetailLocator";
import Manufacturers from "./pages/Manufacturers";
import Accessibility from "./pages/Accessibility";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import CookieConsent from "./pages/CookieConsent";
import "./App.css";
import "./Auth.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Auth routes (without header/footer) */}
        <Route path="/login" element={<Login />} />
        <Route path="/userlogin" element={<UserLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        
        {/* All other routes with Layout */}
        <Route
          path="*"
          element={
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/booking" element={<BookingPage />} />
                <Route path="/support" element={<Support />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/discuss" element={<Discuss />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/newsletter" element={<Newsletter />} />

                {/* Footer pages (now inside Layout) */}
                <Route path="/press" element={<Press />} />
                <Route path="/news" element={<News />} />
                <Route path="/participate" element={<Participate />} />
                <Route path="/pro-wholesale" element={<ProWholesale />} />
                <Route path="/retail-locator" element={<RetailLocator />} />
                <Route path="/manufacturers" element={<Manufacturers />} />
                <Route path="/accessibility" element={<Accessibility />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/cookie-consent" element={<CookieConsent />} />


              </Routes>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
