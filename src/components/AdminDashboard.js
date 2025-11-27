import React, { useEffect, useState } from "react";
import {
  Calendar,
  Clock,
  CheckCircle,
  CheckSquare,
} from "lucide-react";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);

  // Load bookings and remove duplicates
  useEffect(() => {
    const storedBookings = JSON.parse(localStorage.getItem("bookings")) || [];

    const uniqueBookings = storedBookings.filter(
      (booking, index, self) =>
        index ===
        self.findIndex(
          (b) =>
            b.customerEmail === booking.customerEmail &&
            b.serviceType === booking.serviceType
        )
    );

    setBookings(uniqueBookings);
  }, []);

  // Dashboard summary counts
  const totalBookings = bookings.length;
  const pendingApprovals = bookings.filter(
    (b) => b.status?.toLowerCase() === "pending approval"
  ).length;
  const confirmed = bookings.filter(
    (b) => b.status?.toLowerCase() === "confirmed"
  ).length;
  const completed = bookings.filter(
    (b) => b.status?.toLowerCase() === "completed"
  ).length;

  // === Handlers ===

  // Approve a booking (set to confirmed)
  const handleApprove = (index) => {
    const updated = [...bookings];
    updated[index].status = "Confirmed";
    localStorage.setItem("bookings", JSON.stringify(updated));
    setBookings(updated);
  };

  // Mark as completed
  const handleComplete = (index) => {
    const updated = [...bookings];
    updated[index].status = "Completed";
    localStorage.setItem("bookings", JSON.stringify(updated));
    setBookings(updated);
  };

  return (
    <div className="admin-dashboard">
      {/* Header */}
      <header className="dashboard-header">
        <div className="header-left">
          <h1>RepairMate</h1>
          <p className="welcome-text">Welcome back, admin@gmail.com</p>
        </div>
        <div className="header-right">
          <span className="admin-role">Admin</span>
          <button className="logout-btn">Logout</button>
        </div>
      </header>

      <div className="dashboard-container">
        {/* Sidebar */}
        <aside className="sidebar">
          <ul className="nav-menu">
            <li className="nav-item active">
              <button>
                <i><Calendar size={16} /></i> Dashboard
              </button>
            </li>
            <li className="nav-item">
              <button>
                <i><Clock size={16} /></i> Bookings
              </button>
            </li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="main-content">
          {/* Summary Cards */}
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon total-bookings">
                <Calendar size={24} />
              </div>
              <div className="stat-info">
                <h3>{totalBookings}</h3>
                <p>Total Bookings</p>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon pending">
                <Clock size={24} />
              </div>
              <div className="stat-info">
                <h3>{pendingApprovals}</h3>
                <p>Pending Approvals</p>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon confirmed">
                <CheckSquare size={24} />
              </div>
              <div className="stat-info">
                <h3>{confirmed}</h3>
                <p>Confirmed</p>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon completed">
                <CheckCircle size={24} />
              </div>
              <div className="stat-info">
                <h3>{completed}</h3>
                <p>Completed</p>
              </div>
            </div>
          </div>

          {/* Bookings List */}
          <div className="content-grid">
            <div className="recent-bookings">
              <h2>Recent Bookings</h2>

              {bookings.length === 0 ? (
                <p className="text-muted">No user bookings yet.</p>
              ) : (
                bookings.map((booking, index) => (
                  <div key={index} className="booking-item">
                    <div className="booking-info">
                      <h4>{booking.customerName}</h4>
                      <p>
                        {booking.serviceType} – {booking.date}
                      </p>
                      <p className="booking-address">{booking.address}</p>
                    </div>

                    <div className="booking-meta">
                      <span
                        className={`status-badge ${
                          booking.status?.toLowerCase().replace(/\s/g, "-") ||
                          ""
                        }`}
                      >
                        {booking.status || "N/A"}
                      </span>
                      <div className="booking-actions">
                        <button
                          className="btn-outline"
                          onClick={() => setSelectedBooking(booking)}
                        >
                          Show More
                        </button>
                        {booking.status?.toLowerCase() ===
                          "pending approval" && (
                          <button
                            className="btn-approve"
                            onClick={() => handleApprove(index)}
                          >
                            Approve
                          </button>
                        )}
                        {booking.status?.toLowerCase() === "confirmed" && (
                          <button
                            className="btn-complete"
                            onClick={() => handleComplete(index)}
                          >
                            Mark Completed
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </main>
      </div>

      {/* Show More Modal */}
      {selectedBooking && (
        <div className="modal-overlay" onClick={() => setSelectedBooking(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Booking Details</h3>
            <p><strong>Name:</strong> {selectedBooking.customerName}</p>
            <p><strong>Email:</strong> {selectedBooking.customerEmail}</p>
            <p><strong>Phone:</strong> {selectedBooking.customerPhone}</p>
            <p><strong>Service Type:</strong> {selectedBooking.serviceType}</p>
            <p><strong>Issue:</strong> {selectedBooking.issue}</p>
            <p><strong>Address:</strong> {selectedBooking.address}</p>
            <p><strong>Date/Time:</strong> {selectedBooking.date} {selectedBooking.time}</p>
            <p><strong>Status:</strong> {selectedBooking.status}</p>
            <p><strong>Price:</strong> ₹{selectedBooking.price}</p>

            <div className="modal-actions">
              <button
                className="btn-close"
                onClick={() => setSelectedBooking(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
