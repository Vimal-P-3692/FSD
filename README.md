# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)






BookingPage.css
.booking-page {
  padding: 20px;
  max-width: 1000px;
  margin: 0 auto;
  font-family: 'Poppins', sans-serif;
}

.booking-header {
  text-align: center;
  margin-bottom: 30px;
}

.booking-header h1 {
  color: #2E8B57;
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.booking-header p {
  color: #666;
  font-size: 1.1rem;
}

.progress-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  position: relative;
}

.progress-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
}

.step-number {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: white;
  margin-bottom: 8px;
  transition: all 0.3s ease;
}

.step-number.active {
  background-color: #2E8B57;
}

.progress-step span {
  font-size: 0.9rem;
  color: #666;
  text-align: center;
}

.progress-connector {
  flex: 1;
  height: 2px;
  background-color: #ddd;
  margin: 0 10px;
}

.booking-card {
  display: flex;
  gap: 30px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin-top: 20px;
}

.booking-card form {
  flex: 2;
}

.booking-info {
  flex: 1;
  background: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  height: fit-content;
}

.booking-info h3 {
  color: #2E8B57;
  margin-bottom: 15px;
  font-size: 1.2rem;
}

.booking-info ul {
  list-style: none;
  margin-bottom: 25px;
}

.booking-info li {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}

.booking-info i {
  color: #2E8B57;
  margin-right: 10px;
}

.booking-contact {
  border-top: 1px solid #eee;
  padding-top: 20px;
}

.booking-contact h3 {
  margin-bottom: 10px;
}

.booking-contact p {
  margin-bottom: 8px;
  color: #555;
}

.form-step {
  margin-bottom: 20px;
}

.form-step h2 {
  color: #333;
  margin-bottom: 20px;
  font-size: 1.5rem;
  padding-bottom: 10px;
  border-bottom: 2px solid #f0f0f0;
}

.form-section {
  margin-bottom: 20px;
}

.form-section label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #333;
}

.form-section input,
.form-section select,
.form-section textarea {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  font-family: inherit;
  transition: all 0.3s ease;
}

.form-section input:focus,
.form-section select:focus,
.form-section textarea:focus {
  outline: none;
  border-color: #2E8B57;
  box-shadow: 0 0 0 2px rgba(46, 139, 87, 0.1);
}

.form-section textarea {
  resize: vertical;
  min-height: 100px;
}

.help-text {
  font-size: 0.85rem;
  color: #666;
  margin-top: 5px;
}

.form-row {
  display: flex;
  gap: 15px;
}

.form-row .form-section {
  flex: 1;
}

.map-container {
  height: 250px;
  background: #f5f5f5;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 10px;
}

.map-placeholder {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #e9e9e9;
  color: #666;
}

.map-placeholder i {
  font-size: 3rem;
  margin-bottom: 15px;
  color: #2E8B57;
}

.button-group {
  display: flex;
  gap: 15px;
  margin-top: 30px;
}

.next-btn, .back-btn, .confirm-booking-btn {
  padding: 12px 25px;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  font-size: 1rem;
}

.next-btn {
  background: #2E8B57;
  color: white;
}

.next-btn:hover {
  background: #26734d;
}

.back-btn {
  background: #f8f9fa;
  color: #333;
  border: 1px solid #ddd;
}

.back-btn:hover {
  background: #e9ecef;
}

.confirm-booking-btn {
  background: #ffd400;
  color: #111;
}

.confirm-booking-btn:hover {
  background: #e6bf00;
}

/* Responsive Design */
@media (max-width: 900px) {
  .booking-card {
    flex-direction: column;
  }
  
  .progress-bar {
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .progress-connector {
    display: none;
  }
  
  .progress-step {
    margin: 0 10px 15px;
  }
}

@media (max-width: 600px) {
  .booking-page {
    padding: 15px;
  }
  
  .booking-header h1 {
    font-size: 2rem;
  }
  
  .form-row {
    flex-direction: column;
    gap: 0;
  }
  
  .button-group {
    flex-direction: column;
  }
  
  .next-btn, .back-btn, .confirm-booking-btn {
    width: 100%;
  }
}





// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './AdminDashboard.css';

// function AdminDashboard() {
//   const navigate = useNavigate();
//   const [activeTab, setActiveTab] = useState('dashboard');
//   const [bookings, setBookings] = useState([]);
//   const [technicians, setTechnicians] = useState([]);
//   const [stats, setStats] = useState({
//     totalBookings: 0,
//     pendingBookings: 0,
//     completedBookings: 0,
//     totalRevenue: 0,
//     activeTechnicians: 0
//   });
//   const [showModal, setShowModal] = useState(false);
//   const [selectedBooking, setSelectedBooking] = useState(null);

//   const user = JSON.parse(localStorage.getItem('user') || '{}');

//   // Mock data - in real app, this would come from API
//   useEffect(() => {
//     // Mock bookings data
//     const mockBookings = [
//       {
//         id: 1,
//         customerName: 'Lakesh kumar',
//         customerPhone: '9455862148',
//         customerEmail: 'laeshumar@gmail.com',
//         serviceType: 'Laptop',
//         address: '123 Main St, Vellakovil',
//         issue: 'Power outlet not working',
//         date: '2025-10-26',
//         time: '10:00 AM',
//         status: 'pending-approval',
//         technician: null,
//         price: 1999
//       },
//       {
//         id: 2,
//         customerName: 'Varun',
//         customerPhone: '7339080707',
//         customerEmail: 'varun@gmail.com',
//         serviceType: 'Washing Machine',
//         address: 'puduppai',
//         issue: 'Ceiling fan installation',
//         date: '2025-10-26',
//         time: '2:00 PM',
//         status: 'confirmed',
//         technician: 'Mike Wilson',
//         price: 1200
//       },
//       {
//         id: 3,
//         customerName: 'Shanmugavel',
//         customerPhone: '8753145255',
//         customerEmail: 'shanmugavel@gmail.com',
//         serviceType: 'Microwave Oven ',
//         address: 'Iluppai Kinaru',
//         issue: 'Circuit breaker tripping',
//         date: '2025-10-27',
//         time: '11:00 AM',
//         status: 'pending-approval',
//         technician: null,
//         price: 700
//       },
//       {
//         id: 4,
//         customerName: 'Varshini',
//         customerPhone: '9484858669',
//         customerEmail: 'varshini@gmail.com.com',
//         serviceType: 'Refrigerator',
//         address: 'Near high school',
//         issue: 'Electrical panel inspection',
//         date: '2025-01-12',
//         time: '3:00 PM',
//         status: 'completed',
//         technician: 'Balusamy',
//         price: 800
//       }
//     ];

//     // Mock technicians data
//     const mockTechnicians = [
//       {
//         id: 1,
//         name: 'Balusamy',
//         email: 'baluSamy@gmail.com',
//         phone: '9788124820',
//         specialty: ['Electrical Repair', 'Installation'],
//         status: 'available',
//         rating: 4.8,
//         completedJobs: 45
//       },
//       {
//         id: 2,
//         name: 'Chandru',
//         email: 'chandru@gmail.com',
//         phone: '9458625554',
//         specialty: ['Emergency', 'Maintenance'],
//         status: 'busy',
//         rating: 4.9,
//         completedJobs: 52
//       },
//       {
//         id: 3,
//         name: 'James',
//         email: 'james@gmail.com',
//         phone: '9872584359',
//         specialty: ['Installation', 'Electrical Repair'],
//         status: 'available',
//         rating: 4.7,
//         completedJobs: 38
//       },
//     ];

//     // Read any bookings saved by users in localStorage and merge them with mock bookings
//     const loadAndMergeBookings = () => {
//       let userBookings = [];
//       try {
//         userBookings = JSON.parse(localStorage.getItem('bookings') || '[]');
//         if (!Array.isArray(userBookings)) userBookings = [];
//       } catch (err) {
//         console.warn('Failed to parse user bookings from localStorage', err);
//         userBookings = [];
//       }

//       // Merge and deduplicate by id: prefer user-submitted bookings when ids conflict
//       const bookingMap = new Map();
//       // add mock bookings first
//       mockBookings.forEach(b => {
//         if (b && b.id != null) bookingMap.set(b.id, b);
//       });
//       // overlay user bookings so they take precedence
//       userBookings.forEach(b => {
//         if (b && b.id != null) bookingMap.set(b.id, b);
//       });

//       const allBookings = Array.from(bookingMap.values()).sort((a, b) => (b.id || 0) - (a.id || 0));

//       setBookings(allBookings);
//       setTechnicians(mockTechnicians);

//       // Calculate stats from combined bookings
//       const totalBookings = allBookings.length;
//       const pendingBookings = allBookings.filter(b => b.status === 'pending-approval').length;
//       const completedBookings = allBookings.filter(b => b.status === 'completed').length;
//       const totalRevenue = allBookings.reduce((sum, booking) => sum + (booking.price || 0), 0);
//       const activeTechnicians = mockTechnicians.filter(t => t.status === 'available' || t.status === 'busy').length;

//       setStats({
//         totalBookings,
//         pendingBookings,
//         completedBookings,
//         totalRevenue,
//         activeTechnicians
//       });
//     };

//     // initial load
//     loadAndMergeBookings();

//     // expose reload on storage events (helps when bookings are added in other tabs)
//     const onStorage = (e) => {
//       if (e.key === 'bookings') loadAndMergeBookings();
//     };
//     window.addEventListener('storage', onStorage);

//     // cleanup listener on unmount
//     return () => window.removeEventListener('storage', onStorage);
//   }, []);

//   // Persist user-submitted bookings to localStorage whenever bookings change
//   useEffect(() => {
//     try {
//       const userOnly = bookings.filter(b => b.source === 'user');
//       localStorage.setItem('bookings', JSON.stringify(userOnly));
//     } catch (err) {
//       console.warn('Failed to persist user bookings to localStorage', err);
//     }
//   }, [bookings]);

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('user');
//     navigate('/'); // Changed from '/login' to '/' for home page
//   };

//   // Accept booking function
//   const acceptBooking = (bookingId) => {
//     setBookings(prev => {
//       const updated = prev.map(booking =>
//         booking.id === bookingId ? { ...booking, status: 'confirmed' } : booking
//       );
//       // update stats based on updated bookings
//       updateStatsFromBookings(updated);
//       return updated;
//     });
//     alert(`Booking #${bookingId} has been accepted!`);
//   };

//   // Reject booking function
//   const rejectBooking = (bookingId) => {
//     if (window.confirm('Are you sure you want to reject this booking?')) {
//       setBookings(prev => prev.map(booking => 
//         booking.id === bookingId ? { ...booking, status: 'cancelled' } : booking
//       ));
//       alert(`Booking #${bookingId} has been rejected!`);
//     }
//   };

//   const updateBookingStatus = (bookingId, newStatus) => {
//     setBookings(prev => {
//       const updated = prev.map(booking =>
//         booking.id === bookingId ? { ...booking, status: newStatus } : booking
//       );
//       updateStatsFromBookings(updated);
//       return updated;
//     });
//   };

//   const updateStatsFromBookings = (bookingList) => {
//     const totalBookings = bookingList.length;
//     const pendingBookings = bookingList.filter(b => b.status === 'pending-approval').length;
//     const completedBookings = bookingList.filter(b => b.status === 'completed').length;
//     const totalRevenue = bookingList.reduce((sum, booking) => sum + (booking.price || 0), 0);
//     setStats(prev => ({ ...prev, totalBookings, pendingBookings, completedBookings, totalRevenue }));
//   };

//   const assignTechnician = (bookingId, technicianName) => {
//     setBookings(prev => prev.map(booking => 
//       booking.id === bookingId ? { ...booking, technician: technicianName, status: 'confirmed' } : booking
//     ));
//   };

//   const getStatusBadge = (status) => {
//     const statusColors = {
//       'pending-approval': 'status-pending',
//       'pending': 'status-pending',
//       'confirmed': 'status-confirmed',
//       'in-progress': 'status-in-progress',
//       'completed': 'status-completed',
//       'cancelled': 'status-cancelled'
//     };
//     return <span className={`status-badge ${statusColors[status]}`}>{status.replace('-', ' ')}</span>;
//   };

//   const getTechnicianStatus = (status) => {
//     const statusColors = {
//       available: 'tech-available',
//       busy: 'tech-busy',
//       offline: 'tech-offline'
//     };
//     return <span className={`tech-status ${statusColors[status]}`}>{status}</span>;
//   };

//   return (
//     <div className="admin-dashboard">
//       {/* Header */}
//       <header className="dashboard-header">
//         <div className="header-left">
//           <h1>RepairMate </h1>
//           <span className="welcome-text">Welcome back, {user.email}</span>
//         </div>
//         <div className="header-right">
//           <div className="admin-info">
//             <button onClick={handleLogout} className="logout-btn">
//               Logout
//             </button>
//           </div>
//         </div>
//       </header>

//       <div className="dashboard-container">
//         {/* Sidebar */}
//         <nav className="sidebar">
//           <ul className="nav-menu">
//             <li className={activeTab === 'dashboard' ? 'nav-item active' : 'nav-item'}>
//               <button onClick={() => setActiveTab('dashboard')}>
//                 <i className="fas fa-tachometer-alt"></i>
//                 Dashboard
//               </button>
//             </li>
//             <li className={activeTab === 'bookings' ? 'nav-item active' : 'nav-item'}>
//               <button onClick={() => setActiveTab('bookings')}>
//                 <i className="fas fa-calendar-check"></i>
//                 Bookings
//                 <span className="badge">{stats.pendingBookings}</span>
//               </button>
//             </li>
//             <li className={activeTab === 'technicians' ? 'nav-item active' : 'nav-item'}>
//               <button onClick={() => setActiveTab('technicians')}>
//                 <i className="fas fa-users-cog"></i>
//                 Technicians
//               </button>
//             </li>
//             <li className={activeTab === 'customers' ? 'nav-item active' : 'nav-item'}>
//               <button onClick={() => setActiveTab('customers')}>
//                 <i className="fas fa-users"></i>
//                 Customers
//               </button>
//             </li>
//             <li className={activeTab === 'services' ? 'nav-item active' : 'nav-item'}>
//               <button onClick={() => setActiveTab('services')}>
//                 <i className="fas fa-tools"></i>
//                 Services
//               </button>
//             </li>
//             <li className={activeTab === 'reports' ? 'nav-item active' : 'nav-item'}>
//               <button onClick={() => setActiveTab('reports')}>
//                 <i className="fas fa-chart-bar"></i>
//                 Reports
//               </button>
//             </li>
//           </ul>
//         </nav>

//         {/* Main Content */}
//         <main className="main-content">
//           {/* Dashboard Tab */}
//           {activeTab === 'dashboard' && (
//             <div className="tab-content">
//               <div className="stats-grid">
//                 <div className="stat-card">
//                   <div className="stat-icon total-bookings">
//                     <i className="fas fa-calendar"></i>
//                   </div>
//                   <div className="stat-info">
//                     <h3>{stats.totalBookings}</h3>
//                     <p>Total Bookings</p>
//                   </div>
//                 </div>
//                 <div className="stat-card">
//                   <div className="stat-icon pending">
//                     <i className="fas fa-clock"></i>
//                   </div>
//                   <div className="stat-info">
//                     <h3>{stats.pendingBookings}</h3>
//                     <p>Pending Approvals</p>
//                   </div>
//                 </div>
//                 <div className="stat-card">
//                   <div className="stat-icon completed">
//                     <i className="fas fa-check-circle"></i>
//                   </div>
//                   <div className="stat-info">
//                     <h3>{stats.completedBookings}</h3>
//                     <p>Completed</p>
//                   </div>
//                 </div>
//                 <div className="stat-card">
//                   <div className="stat-icon revenue">
//                     <i className="fas fa-dollar-sign"></i>
//                   </div>
//                   <div className="stat-info">
//                     <h3>${stats.totalRevenue}</h3>
//                     <p>Total Revenue</p>
//                   </div>
//                 </div>
//                 <div className="stat-card">
//                   <div className="stat-icon technicians">
//                     <i className="fas fa-users"></i>
//                   </div>
//                   <div className="stat-info">
//                     <h3>{stats.activeTechnicians}</h3>
//                     <p>Active Technicians</p>
//                   </div>
//                 </div>
//               </div>
//               {showModal && selectedBooking && (
//                 <div className="modal-overlay" onClick={() => setShowModal(false)}>
//                   <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//                     <h3>Booking Details</h3>
//                     <div className="modal-body">
//                       <p><strong>Customer:</strong> {selectedBooking.customerName}</p>
//                       <p><strong>Phone:</strong> {selectedBooking.customerPhone}</p>
//                       <p><strong>Email:</strong> {selectedBooking.customerEmail}</p>
//                       <p><strong>Service:</strong> {selectedBooking.serviceType}</p>
//                       <p><strong>Issue:</strong> {selectedBooking.issue}</p>
//                       <p><strong>Address:</strong> {selectedBooking.address}</p>
//                       <p><strong>Date / Time:</strong> {selectedBooking.date} {selectedBooking.time}</p>
//                       <p><strong>Technician:</strong> {selectedBooking.technician || 'Not assigned'}</p>
//                       <p><strong>Price:</strong> ${selectedBooking.price}</p>
//                     </div>
//                     <div className="modal-actions">
//                       {selectedBooking.status !== 'confirmed' ? (
//                         <button
//                           className="btn-approve"
//                           onClick={() => { acceptBooking(selectedBooking.id); setShowModal(false); }}
//                         >
//                           Approve Booking
//                         </button>
//                       ) : (
//                         <button className="btn-confirmed" disabled>Confirmed</button>
//                       )}
//                       <button className="btn-secondary" onClick={() => setShowModal(false)}>Close</button>
//                     </div>
//                   </div>
//                 </div>
//               )}

//               <div className="content-grid">
//                 <div className="recent-bookings">
//                   <h2>Recent Bookings</h2>
//                   <div className="bookings-list">
//                     {bookings.slice(0, 5).map(booking => (
//                       <div key={booking.id} className="booking-item">
//                         <div className="booking-info">
//                           <h4>{booking.customerName}</h4>
//                           <p>{booking.serviceType} - {booking.date}</p>
//                           <span className="booking-address">{booking.address}</span>
//                         </div>
//                         <div className="booking-meta">
//                           {getStatusBadge(booking.status)}
//                           <span className="booking-price">${booking.price}</span>
//                           <div className="booking-actions">
//                             <button
//                               className="btn-sm btn-outline"
//                               onClick={() => { setSelectedBooking(booking); setShowModal(true); }}
//                             >
//                               Show More
//                             </button>
//                             {booking.status !== 'confirmed' ? (
//                               <button
//                                 className="btn-sm btn-approve"
//                                 onClick={() => acceptBooking(booking.id)}
//                               >
//                                 Approve
//                               </button>
//                             ) : (
//                               <button className="btn-sm btn-confirmed" disabled>
//                                 Confirmed
//                               </button>
//                             )}
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="technician-status">
//                   <h2>Technician Status</h2>
//                   <div className="tech-list">
//                     {technicians.map(tech => (
//                       <div key={tech.id} className="tech-item">
//                         <div className="tech-avatar">
//                           {tech.name.charAt(0)}
//                         </div>
//                         <div className="tech-info">
//                           <h4>{tech.name}</h4>
//                           <p>{tech.specialty.join(', ')}</p>
//                           <div className="tech-meta">
//                             <span className="rating">⭐ {tech.rating}</span>
//                             <span className="jobs">{tech.completedJobs} jobs</span>
//                           </div>
//                         </div>
//                         <div className="tech-status-info">
//                           {getTechnicianStatus(tech.status)}
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Bookings Tab */}
//           {activeTab === 'bookings' && (
//             <div className="tab-content">
//               <div className="tab-header">
//                 <h2>Service Bookings</h2>
//                 <div className="tab-actions">
//                   <button className="btn-primary">
//                     <i className="fas fa-plus"></i>
//                     New Booking
//                   </button>
//                   <button className="btn-secondary">
//                     <i className="fas fa-download"></i>
//                     Export
//                   </button>
//                 </div>
//               </div>

//               <div className="bookings-table">
//                 <table>
//                   <thead>
//                     <tr>
//                       <th>Customer</th>
//                       <th>Service</th>
//                       <th>Date & Time</th>
//                       <th>Address</th>
//                       <th>Technician</th>
//                       <th>Price</th>
//                       <th>Status</th>
//                       <th>Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {bookings.map(booking => (
//                       <tr key={booking.id}>
//                         <td>
//                           <div className="customer-cell">
//                             <strong>{booking.customerName}</strong>
//                             <span>{booking.customerPhone}</span>
//                           </div>
//                         </td>
//                         <td>{booking.serviceType}</td>
//                         <td>
//                           {booking.date}<br />
//                           <small>{booking.time}</small>
//                         </td>
//                         <td>{booking.address}</td>
//                         <td>
//                           {booking.technician || (
//                             <select 
//                               onChange={(e) => assignTechnician(booking.id, e.target.value)}
//                               className="tech-select"
//                               disabled={booking.status === 'pending-approval'}
//                             >
//                               <option value="">Assign</option>
//                               {technicians.filter(t => t.status === 'available').map(tech => (
//                                 <option key={tech.id} value={tech.name}>
//                                   {tech.name}
//                                 </option>
//                               ))}
//                             </select>
//                           )}
//                         </td>
//                         <td>${booking.price}</td>
//                         <td>{getStatusBadge(booking.status)}</td>
//                         <td>
//                           <div className="action-buttons">
//                             {booking.status === 'pending-approval' && (
//                               <>
//                                 <button 
//                                   className="btn-sm btn-success"
//                                   onClick={() => acceptBooking(booking.id)}
//                                 >
//                                   Accept
//                                 </button>
//                                 <button 
//                                   className="btn-sm btn-danger"
//                                   onClick={() => rejectBooking(booking.id)}
//                                 >
//                                   Reject
//                                 </button>
//                               </>
//                             )}
//                             {booking.status === 'confirmed' && (
//                               <button 
//                                 className="btn-sm btn-primary"
//                                 onClick={() => updateBookingStatus(booking.id, 'in-progress')}
//                               >
//                                 Start
//                               </button>
//                             )}
//                             {booking.status === 'in-progress' && (
//                               <button 
//                                 className="btn-sm btn-success"
//                                 onClick={() => updateBookingStatus(booking.id, 'completed')}
//                               >
//                                 Complete
//                               </button>
//                             )}
//                           </div>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           )}

//           {/* Technicians Tab */}
//           {activeTab === 'technicians' && (
//             <div className="tab-content">
//               <div className="tab-header">
//                 <h2>Technicians</h2>
//                 <div className="tab-actions">
//                   <button className="btn-primary">
//                     <i className="fas fa-plus"></i>
//                     Add Technician
//                   </button>
//                 </div>
//               </div>

//               <div className="technicians-grid">
//                 {technicians.map(tech => (
//                   <div key={tech.id} className="technician-card">
//                     <div className="tech-card-header">
//                       <div className="tech-avatar-large">
//                         {tech.name.charAt(0)}
//                       </div>
//                       <div className="tech-basic-info">
//                         <h3>{tech.name}</h3>
//                         <p>{tech.email}</p>
//                         {getTechnicianStatus(tech.status)}
//                       </div>
//                     </div>
                    
//                     <div className="tech-details">
//                       <div className="detail-item">
//                         <span className="label">Phone:</span>
//                         <span>{tech.phone}</span>
//                       </div>
//                       <div className="detail-item">
//                         <span className="label">Specialty:</span>
//                         <span>{tech.specialty.join(', ')}</span>
//                       </div>
//                       <div className="detail-item">
//                         <span className="label">Rating:</span>
//                         <span>⭐ {tech.rating} ({tech.completedJobs} jobs)</span>
//                       </div>
//                     </div>

//                     <div className="tech-actions">
//                       <button className="btn-sm btn-primary">View Profile</button>
//                       <button className="btn-sm btn-secondary">Message</button>
//                       <button className="btn-sm btn-warning">Schedule</button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Other tabs can be implemented similarly */}
//           {activeTab === 'customers' && (
//             <div className="tab-content">
//               <h2>Customers Management</h2>
//               <p>Customer management features coming soon...</p>
//             </div>
//           )}

//           {activeTab === 'services' && (
//             <div className="tab-content">
//               <h2>Services & Pricing</h2>
//               <p>Service management features coming soon...</p>
//             </div>
//           )}

//           {activeTab === 'reports' && (
//             <div className="tab-content">
//               <h2>Reports & Analytics</h2>
//               <p>Reporting features coming soon...</p>
//             </div>
//           )}
//         </main>
//       </div>
//     </div>
//   );
// }


<!-- 

/* Auth.css
.auth-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #2E8B57 0%, #3CB371 100%);
  padding: 20px;
}

.auth-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  padding: 2.5rem;
  width: 100%;
  max-width: 420px;
  text-align: center;
}

.auth-title {
  color: #2E8B57;
  margin-bottom: 1.8rem;
  font-size: 2rem;
  font-weight: 700;
  position: relative;
  padding-bottom: 10px;
}

.auth-title::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 4px;
  background-color: #ffd400;
  border-radius: 2px;
}

.input-group {
  margin-bottom: 1.2rem;
  position: relative;
}

.auth-input {
  width: 100%;
  padding: 14px 16px;
  border: 2px solid #e1e5e9;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background-color: #f8f9fa;
}

.auth-input:focus {
  outline: none;
  border-color: #2E8B57;
  background-color: white;
  box-shadow: 0 0 0 3px rgba(46, 139, 87, 0.1);
}

.auth-input:hover {
  border-color: #3CB371;
}

.auth-btn {
  width: 100%;
  background: #2E8B57;
  color: white;
  border: none;
  padding: 14px;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 0.8rem;
}

.auth-btn:hover {
  background: #ffd400;
  color: #111;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 212, 0, 0.3);
}

.auth-link-text {
  margin-top: 1.8rem;
  color: #666;
  font-size: 1rem;
}

.auth-link {
  color: #2E8B57;
  text-decoration: none;
  font-weight: 600;
  position: relative;
  transition: all 0.3s ease;
}

.auth-link::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #ffd400;
  transition: width 0.3s ease;
}

.auth-link:hover {
  color: #ffd400;
}

.auth-link:hover::after {
  width: 100%;
}

/* Focus states for accessibility */
.auth-input:focus,
.auth-btn:focus,
.auth-link:focus {
  outline: 2px solid #ffd400;
  outline-offset: 2px;
}

/* Responsive adjustments */
@media (max-width: 480px) {
  .auth-card {
    padding: 2rem 1.5rem;
  }
  
  .auth-title {
    font-size: 1.7rem;
  }
  
  .auth-input {
    padding: 12px 14px;
  }
  
  .auth-btn {
    padding: 12px;
    font-size: 1rem;
  }
}


/* Auth.css - Updated for Customer Login Design */
.auth-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #2E8B57 0%, #3CB371 100%);
  padding: 20px;
}

.auth-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  padding: 2.5rem;
  width: 100%;
  max-width: 450px;
}

.auth-header {
  text-align: center;
  margin-bottom: 2rem;
}

.auth-title {
  color: #2E8B57;
  margin-bottom: 0.5rem;
  font-size: 2rem;
  font-weight: 700;
}

.auth-subtitle {
  color: #666;
  font-size: 1rem;
  margin: 0;
}

.form-section {
  margin-bottom: 1.8rem;
}

.form-section-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  margin: 0 0 0.8rem 0;
  display: flex;
  align-items: center;
}

.form-section-title::before {
  content: "#";
  margin-right: 8px;
  color: #2E8B57;
  font-weight: bold;
}

.input-group {
  margin-bottom: 1rem;
  position: relative;
}

.auth-input {
  width: 100%;
  padding: 14px 16px;
  border: 2px solid #e1e5e9;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background-color: #f8f9fa;
}

.auth-input:focus {
  outline: none;
  border-color: #2E8B57;
  background-color: white;
  box-shadow: 0 0 0 3px rgba(46, 139, 87, 0.1);
}

.auth-input:hover {
  border-color: #3CB371;
}

.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.8rem;
  font-size: 0.9rem;
}

.checkbox-container {
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #555;
}

.checkbox-container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.checkmark {
  height: 18px;
  width: 18px;
  background-color: #fff;
  border: 2px solid #ddd;
  border-radius: 4px;
  margin-right: 8px;
  position: relative;
  transition: all 0.3s ease;
}

.checkbox-container input:checked ~ .checkmark {
  background-color: #2E8B57;
  border-color: #2E8B57;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.checkbox-container input:checked ~ .checkmark:after {
  display: block;
  left: 5px;
  top: 2px;
  width: 4px;
  height: 8px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.forgot-password {
  color: #2E8B57;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.forgot-password:hover {
  color: #ffd400;
  text-decoration: underline;
}

.auth-btn {
  width: 100%;
  background: #2E8B57;
  color: white;
  border: none;
  padding: 14px;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1.5rem;
}

.auth-btn:hover {
  background: #ffd400;
  color: #111;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 212, 0, 0.3);
}

.divider {
  display: flex;
  align-items: center;
  text-align: center;
  margin: 1.8rem 0;
  color: #777;
  font-size: 0.9rem;
  font-weight: 500;
}

.divider::before,
.divider::after {
  content: '';
  flex: 1;
  border-bottom: 1px solid #ddd;
}

.divider::before {
  margin-right: 10px;
}

.divider::after {
  margin-left: 10px;
}

.social-login {
  display: flex;
  gap: 15px;
  margin-bottom: 1.8rem;
}

.social-btn {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: white;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.social-btn:hover {
  background-color: #f5f5f5;
  transform: translateY(-2px);
}

.social-icon {
  margin-right: 8px;
  font-weight: bold;
}

.social-btn.google .social-icon {
  color: #DB4437;
}

.social-btn.facebook .social-icon {
  color: #4267B2;
}

.auth-link-text {
  text-align: center;
  color: #666;
  font-size: 0.9rem;
  margin: 0;
}

.auth-link {
  color: #2E8B57;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.3s ease;
}

.auth-link:hover {
  color: #ffd400;
  text-decoration: underline;
}

/* Focus states for accessibility */
.auth-input:focus,
.auth-btn:focus,
.auth-link:focus,
.social-btn:focus {
  outline: 2px solid #ffd400;
  outline-offset: 2px;
}

/* Responsive adjustments */
@media (max-width: 480px) {
  .auth-card {
    padding: 2rem 1.5rem;
  }
  
  .auth-title {
    font-size: 1.7rem;
  }
  
  .auth-input {
    padding: 12px 14px;
  }
  
  .auth-btn {
    padding: 12px;
    font-size: 1rem;
  }
  
  .social-login {
    flex-direction: column;
  }
  
  .form-options {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
  
  .forgot-password {
    margin-left: 26px;
  }
}

/* Auth.css */
.auth-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #2E8B57 0%, #3CB371 100%);
  padding: 20px;
}

.auth-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  padding: 2.5rem;
  width: 100%;
  max-width: 450px;
}

.auth-header {
  text-align: center;
  margin-bottom: 2rem;
}

.auth-title {
  color: #2E8B57;
  margin-bottom: 0.5rem;
  font-size: 2rem;
  font-weight: 700;
}

.auth-subtitle {
  color: #666;
  font-size: 1rem;
  margin: 0;
}

.form-section {
  margin-bottom: 1.8rem;
}

.form-section-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  margin: 0 0 0.8rem 0;
}

.input-group {
  margin-bottom: 1rem;
  position: relative;
}

.auth-input {
  width: 100%;
  padding: 14px 16px;
  border: 2px solid #e1e5e9;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background-color: #f8f9fa;
}

.auth-input:focus {
  outline: none;
  border-color: #2E8B57;
  background-color: white;
  box-shadow: 0 0 0 3px rgba(46, 139, 87, 0.1);
}

.auth-input:hover {
  border-color: #3CB371;
}

.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.8rem;
  font-size: 0.9rem;
}

.checkbox-container {
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #555;
}

.checkbox-container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.checkmark {
  height: 18px;
  width: 18px;
  background-color: #fff;
  border: 2px solid #ddd;
  border-radius: 4px;
  margin-right: 8px;
  position: relative;
  transition: all 0.3s ease;
}

.checkbox-container input:checked ~ .checkmark {
  background-color: #2E8B57;
  border-color: #2E8B57;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.checkbox-container input:checked ~ .checkmark:after {
  display: block;
  left: 5px;
  top: 2px;
  width: 4px;
  height: 8px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.forgot-password {
  color: #2E8B57;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.forgot-password:hover {
  color: #ffd400;
  text-decoration: underline;
}

.auth-btn {
  width: 100%;
  background: #2E8B57;
  color: white;
  border: none;
  padding: 14px;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1.5rem;
}

.auth-btn:hover {
  background: #ffd400;
  color: #111;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 212, 0, 0.3);
}

.divider {
  display: flex;
  align-items: center;
  text-align: center;
  margin: 1.8rem 0;
  color: #777;
  font-size: 0.9rem;
  font-weight: 500;
}

.divider::before,
.divider::after {
  content: '';
  flex: 1;
  border-bottom: 1px solid #ddd;
}

.divider::before {
  margin-right: 10px;
}

.divider::after {
  margin-left: 10px;
}

.social-login {
  display: flex;
  gap: 15px;
  margin-bottom: 1.8rem;
}

.social-btn {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 12px 12px 40px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: white;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
}

.social-btn:hover {
  background-color: #f5f5f5;
  transform: translateY(-2px);
}

.social-btn.google {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='18' height='18'%3E%3Cpath fill='%234285F4' d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'/%3E%3Cpath fill='%2334A853' d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'/%3E%3Cpath fill='%23FBBC05' d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'/%3E%3Cpath fill='%23EA4335' d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 极速加速器 2.84c.87-2.6 3.3-4.53 6.16-4.53z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: 15px center;
  background-size: 18px 18px;
}

.social-btn.facebook {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='18' height='18'%3E%3Cpath fill='%234267B2' d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.极速加速器 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z'/%3E极速加速器%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: 15px center;
  background-size: 18px 18px;
}

.auth-link-text {
  text-align: center;
  color: #666;
  font-size: 0.9rem;
  margin: 0;
}

.auth-link {
  color: #2E8B57;
  font-weight: 600;
  text-decoration: none;
  transition: color 极速加速器 0.3s ease;
}

.auth-link:hover {
  color: #ffd400;
  text-decoration: underline;
}

/* Focus states for accessibility */
.auth-input:focus,
.auth-btn:focus,
.auth-link:focus,
.social-btn:focus {
  outline: 2px solid #ffd400;
  outline-offset: 2px;
}

/* Responsive adjustments */
@media (max-width: 480px) {
  .auth-card {
    padding: 2rem 1.5rem;
  }
  
  .auth-title {
    font-size: 1.7rem;
  }
  
  .auth-input {
    padding: 12px 14px;
  }
  
  .auth-btn {
    padding: 12px;
    font-size: 1rem;
  }
  
  .social-login {
    flex-direction: column;
  }
  
  .form-options {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
  
  .forgot-password {
    margin-left: 26px;
  }
  
  .social-btn {
    padding: 12px 12px 12px 40px;
    background-position: 15px center;
  }
}  -->



<!-- https://tse1.mm.bing.net/th/id/OIP.3iq03NA4hJVJAuqE_0wefgHaFc?pid=Api&rs=1&c=1&qlt=95&w=147&h=108 -->

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

html, body {
  height: 100%;
  overflow: hidden;
}

.signup-page {
  height: 100vh;
  display: flex;
  background-color: #f8f9fa;
  overflow: hidden;
}

.signup-container {
  display: flex;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.signup-left {
  flex: 1;
  display: flex;
  position: relative;
  overflow: hidden;
}

.image-container {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.signup-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.signup-right {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  overflow: hidden;
}

.signup-form-container {
  width: 100%;
  max-width: 400px;
  padding: 0 30px;
}

.auth-card {
  background: white;
  padding: 2rem;
  width: 100%;
}

.auth-header {
  text-align: center;
  margin-bottom: 1.5rem;
}

.auth-title {
  color: #2E8B57;
  margin-bottom: 0.5rem;
  font-size: 1.8rem;
  font-weight: 700;
}

.auth-subtitle {
  color: #666;
  font-size: 0.9rem;
  margin: 0;
}

.form-section {
  margin-bottom: 1.5rem;
}

.form-section-title {
  font-size: 0.95rem;
  font-weight: 600;
  color: #333;
  margin: 0 0 0.5rem 0;
  display: flex;
  align-items: center;
}

.form-section-title::before {
  content: "#";
  margin-right: 5px;
  color: #2E8B57;
  font-weight: bold;
}

.input-group {
  margin-bottom: 1rem;
  position: relative;
}

.auth-input {
  width: 100%;
  padding: 12px 15px;
  border: 2px solid #e1e5e9;
  border-radius: 5px;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  background-color: #f8f9fa;
}

.auth-input:focus {
  outline: none;
  border-color: #2E8B57;
  background-color: white;
  box-shadow: 0 0 0 2px rgba(46, 139, 87, 0.1);
}

.auth-input:hover {
  border-color: #3CB371;
}

.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
  font-size: 0.85rem;
}

.checkbox-container {
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #555;
  position: relative;
  padding-left: 25px;
}

.checkbox-container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: absolute;
  top: -1px;
  left: 0;
  height: 16px;
  width: 16px;
  background-color: #fff;
  border: 2px solid #ddd;
  border-radius: 3px;
  transition: all 0.3s ease;
}

.checkbox-container:hover input ~ .checkmark {
  border-color: #3CB371;
}

.checkbox-container input:checked ~ .checkmark {
  background-color: #2E8B57;
  border-color: #2E8B57;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
  left: 4px;
  top: 0px;
  width: 4px;
  height: 8px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.checkbox-container input:checked ~ .checkmark:after {
  display: block;
}

.forgot-password {
  color: #2E8B57;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  font-size: 0.85rem;
}

.forgot-password:hover {
  color: #ffd400;
  text-decoration: underline;
}

.auth-btn {
  width: 100%;
  background: #2E8B57;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
}

.auth-btn:hover {
  background: #ffd400;
  color: #111;
  transform: translateY(-1px);
  box-shadow: 0 3px 8px rgba(255, 212, 0, 0.3);
}

.divider {
  display: flex;
  align-items: center;
  text-align: center;
  margin: 1.5rem 0;
  color: #777;
  font-size: 0.85rem;
  font-weight: 500;
}

.divider::before,
.divider::after {
  content: '';
  flex: 1;
  border-bottom: 1px solid #ddd;
}

.divider::before {
  margin-right: 6px;
}

.divider::after {
  margin-left: 6px;
}

.social-login {
  display: flex;
  gap: 10px;
  margin-bottom: 1.5rem;
}

.social-btn {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background: white;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.social-btn:hover {
  background-color: #f5f5f5;
  transform: translateY(-1px);
}

.social-icon {
  margin-right: 5px;
  font-size: 14px;
}

.social-btn.google .social-icon {
  color: #DB4437;
}

.social-btn.facebook .social-icon {
  color: #4267B2;
}

.auth-link-text {
  text-align: center;
  color: #666;
  font-size: 0.85rem;
  margin: 0;
}

.auth-link {
  color: #2E8B57;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.3s ease;
}

.auth-link:hover {
  color: #ffd400;
  text-decoration: underline;
}

/* Focus states for accessibility */
.auth-input:focus,
.auth-btn:focus,
.auth-link:focus,
.social-btn:focus {
  outline: 2px solid #ffd400;
  outline-offset: 1px;
}

/* Ensure no gaps on any elements */
body, html, .signup-page, .signup-container, .signup-left, .signup-right {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .signup-container {
    flex-direction: column;
  }
  
  .signup-left {
    height: 30vh;
  }
  
  .signup-right {
    padding: 15px;
  }
  
  .auth-card {
    padding: 1.5rem;
  }
  
  .auth-title {
    font-size: 1.5rem;
  }
  
  .signup-form-container {
    max-height: 70vh;
    overflow-y: auto;
  }
}

@media (max-width: 480px) {
  .auth-card {
    padding: 1.2rem;
  }
  
  .auth-title {
    font-size: 1.3rem;
  }
  
  .auth-input {
    padding: 10px 12px;
    font-size: 0.9rem;
  }
  
  .auth-btn {
    padding: 10px;
    font-size: 0.95rem;
  }
  
  .social-login {
    flex-direction: column;
    gap: 8px;
  }
  
  .form-options {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
  
  .forgot-password {
    margin-left: 25px;
  }
} as i need same logos for the signup page also give a css code



 {/* <a href="#" className="forgot-password">
                      Forgot password?
                    </a> */}