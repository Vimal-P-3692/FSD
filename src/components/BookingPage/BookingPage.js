// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './BookingPage.css';

// const BookingPage = () => {
//   const [formData, setFormData] = useState({
//     // customer contact details
//     customerName: "",
//     customerPhone: "",
//     customerEmail: "",
//     applianceType: "",
//     issueDescription: "",
//     preferredDate: "",
//     preferredTime: "",
//     addressLine1: "",
//     addressLine2: "",
//     city: "",
//     state: "",
//     pincode: "",
//     landmark: "",
//     location: { lat: 28.6139, lng: 77.2090 } // Default to Delhi
//   });

//   const navigate = useNavigate();

//   const [currentStep, setCurrentStep] = useState(1);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleLocationSelect = (lat, lng) => {
//     setFormData(prevState => ({
//       ...prevState,
//       location: { lat, lng }
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Build a booking object compatible with AdminDashboard mock schema
//     const booking = {
//       id: Date.now(),
//       customerName: formData.customerName || 'Guest',
//       customerPhone: formData.customerPhone || '',
//       customerEmail: formData.customerEmail || '',
//       serviceType: formData.applianceType || 'General Service',
//       // Build a readable address even if some fields are empty
//       address: (function() {
//         const parts = [];
//         if (formData.addressLine1) parts.push(formData.addressLine1);
//         if (formData.addressLine2) parts.push(formData.addressLine2);
//         const cityState = [formData.city, formData.state].filter(Boolean).join(', ');
//         if (cityState) parts.push(cityState);
//         if (formData.pincode) parts.push(formData.pincode);
//         if (formData.landmark) parts.push('Landmark: ' + formData.landmark);
//         return parts.length ? parts.join(' • ') : 'Address not provided';
//       })(),
//       issue: formData.issueDescription || '',
//       date: formData.preferredDate || new Date().toISOString().split('T')[0],
//       time: formData.preferredTime || 'ASAP',
//       status: 'pending-approval',
//       technician: null,
//       // Assign a simple price estimate based on service type so admin sees a value
//       price: (function() {
//         const priceMap = {
//           'refrigerator': 1100,
//           'washing-machine': 899,
//           'air-conditioner': 1299,
//           'television': 1499,
//           'microwave': 699,
//           'other': 799
//         };
//         return priceMap[formData.applianceType] || 0;
//       })(),
//       source: 'user'
//     };

//     // Save to localStorage so AdminDashboard can read it
//     try {
//       const existing = JSON.parse(localStorage.getItem('bookings') || '[]');
//       existing.unshift(booking);
//       localStorage.setItem('bookings', JSON.stringify(existing));
//     } catch (err) {
//       console.error('Failed to save booking to localStorage', err);
//     }

//     // Optionally show confirmation, then navigate to admin dashboard for demo
//     alert('Booking submitted — redirecting to admin dashboard for review.');
//     navigate('/admin/dashboard');
//   };

//   const nextStep = () => {
//     setCurrentStep(currentStep + 1);
//   };

//   const prevStep = () => {
//     setCurrentStep(currentStep - 1);
//   };

//   // Render form based on current step
//   const renderFormStep = () => {
//     switch(currentStep) {
//       case 1:
//         return (
//           <div className="form-step">
//             <h2>Service Details</h2>
//             <div className="form-section">
//               <label>Your Name</label>
//               <input
//                 type="text"
//                 name="customerName"
//                 value={formData.customerName}
//                 onChange={handleChange}
//                 placeholder="Full name"
//                 required
//               />
//             </div>

//             <div className="form-section">
//               <label>Phone</label>
//               <input
//                 type="tel"
//                 name="customerPhone"
//                 value={formData.customerPhone}
//                 onChange={handleChange}
//                 placeholder="Phone number"
//                 required
//               />
//             </div>

//             <div className="form-section">
//               <label>Email</label>
//               <input
//                 type="email"
//                 name="customerEmail"
//                 value={formData.customerEmail}
//                 onChange={handleChange}
//                 placeholder="Email address"
//                 required
//               />
//             </div>

//             <div className="form-section">
//               <label>Appliance Type</label>
//               <select 
//                 name="applianceType" 
//                 value={formData.applianceType} 
//                 onChange={handleChange}
//                 required
//               >
//                 <option value="">Select Appliance</option>
//                 <option value="refrigerator">Refrigerator</option>
//                 <option value="washing-machine">Washing Machine</option>
//                 <option value="air-conditioner">Air Conditioner</option>
//                 <option value="television">Television</option>
//                 <option value="microwave">Microwave Oven</option>
//                 <option value="other">Other</option>
//               </select>
//             </div>

//             <div className="form-section">
//               <label>Issue Description</label>
//               <textarea 
//                 name="issueDescription" 
//                 value={formData.issueDescription} 
//                 onChange={handleChange}
//                 placeholder="Describe the issue you're facing in detail"
//                 rows="4"
//                 required
//               ></textarea>
//               <p className="help-text">Please provide as much detail as possible to help our technician prepare</p>
//             </div>

//             <div className="button-group">
//               <button type="button" className="next-btn" onClick={nextStep}>Next</button>
//             </div>
//           </div>
//         );
      
//       case 2:
//         return (
//           <div className="form-step">
//             <h2>Schedule Your Service</h2>
            
//             <div className="form-section">
//               <label>Preferred Date</label>
//               <input 
//                 type="date" 
//                 name="preferredDate" 
//                 value={formData.preferredDate} 
//                 onChange={handleChange}
//                 min={new Date().toISOString().split('T')[0]}
//                 required
//               />
//             </div>

//             <div className="form-section">
//               <label>Preferred Time</label>
//               <select 
//                 name="preferredTime" 
//                 value={formData.preferredTime} 
//                 onChange={handleChange}
//                 required
//               >
//                 <option value="">Select Time Slot</option>
//                 <option value="09:00-11:00">09:00 AM - 11:00 AM</option>
//                 <option value="11:00-13:00">11:00 AM - 01:00 PM</option>
//                 <option value="13:00-15:00">01:00 PM - 03:00 PM</option>
//                 <option value="15:00-17:00">03:00 PM - 05:00 PM</option>
//                 <option value="17:00-19:00">05:00 PM - 07:00 PM</option>
//               </select>
//               <p className="help-text">Our technician will arrive within the selected time window</p>
//             </div>

//             <div className="button-group">
//               <button type="button" className="back-btn" onClick={prevStep}>Back</button>
//               <button type="button" className="next-btn" onClick={nextStep}>Next</button>
//             </div>
//           </div>
//         );
      
//       case 3:
//         return (
//           <div className="form-step">
//             <h2>Address Details</h2>
            
//             <div className="form-section">
//               <label>Address Line 1</label>
//               <input 
//                 type="text" 
//                 name="addressLine1" 
//                 value={formData.addressLine1} 
//                 onChange={handleChange}
//                 placeholder="House/Flat number, Street name"
//                 required
//               />
//             </div>

//             <div className="form-section">
//               <label>Address Line 2 (Optional)</label>
//               <input 
//                 type="text" 
//                 name="addressLine2" 
//                 value={formData.addressLine2} 
//                 onChange={handleChange}
//                 placeholder="Area, Colony"
//               />
//             </div>

//             <div className="form-row">
//               <div className="form-section">
//                 <label>City</label>
//                 <input 
//                   type="text" 
//                   name="city" 
//                   value={formData.city} 
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               <div className="form-section">
//                 <label>State</label>
//                 <input 
//                   type="text" 
//                   name="state" 
//                   value={formData.state} 
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//             </div>

//             <div className="form-row">
//               <div className="form-section">
//                 <label>Pincode</label>
//                 <input 
//                   type="text" 
//                   name="pincode" 
//                   value={formData.pincode} 
//                   onChange={handleChange}
//                   pattern="[0-9]{6}"
//                   title="6-digit pincode"
//                   required
//                 />
//               </div>

//               <div className="form-section">
//                 <label>Landmark (Optional)</label>
//                 <input 
//                   type="text" 
//                   name="landmark" 
//                   value={formData.landmark} 
//                   onChange={handleChange}
//                   placeholder="Nearby prominent location"
//                 />
//               </div>
//             </div>

//             <div className="button-group">
//               <button type="button" className="back-btn" onClick={prevStep}>Back</button>
//               <button type="button" className="next-btn" onClick={nextStep}>Next</button>
//             </div>
//           </div>
//         );
      
//       case 4:
//         return (
//           <div className="form-step">
//             <h2>Confirm Location on Map</h2>
            
//             <div className="form-section">
//               <label>Pin your exact location on the map</label>
//               <div className="map-container">
//                 <div className="map-placeholder">
//                   <i className="fas fa-map-marker-alt"></i>
//                   <p>Google Maps Integration</p>
//                   <p className="help-text">In a real application, this would show an interactive map</p>
//                 </div>
//               </div>
//               <p className="help-text">Drag the marker to your exact location for accurate service</p>
//             </div>

//             <div className="button-group">
//               <button type="button" className="back-btn" onClick={prevStep}>Back</button>
//               <button type="submit" className="confirm-booking-btn">Confirm Booking</button>
//             </div>
//           </div>
//         );
      
//       default:
//         return <div>Form step not found</div>;
//     }
//   };

//   return (
//     <div className="booking-page">
//       <div className="booking-header">
//         <h1>Book a Service</h1>
//         <p>Fill in the details below to schedule your appliance repair service</p>
//       </div>

//       <div className="progress-bar">
//         <div className="progress-step">
//           <div className={`step-number ${currentStep >= 1 ? 'active' : ''}`}>1</div>
//           <span>Service Details</span>
//         </div>
//         <div className="progress-connector"></div>
//         <div className="progress-step">
//           <div className={`step-number ${currentStep >= 2 ? 'active' : ''}`}>2</div>
//           <span>Schedule</span>
//         </div>
//         <div className="progress-connector"></div>
//         <div className="progress-step">
//           <div className={`step-number ${currentStep >= 3 ? 'active' : ''}`}>3</div>
//           <span>Address</span>
//         </div>
//         <div className="progress-connector"></div>
//         <div className="progress-step">
//           <div className={`step-number ${currentStep >= 4 ? 'active' : ''}`}>4</div>
//           <span>Location</span>
//         </div>
//       </div>

//       <div className="booking-card">
//         <form onSubmit={handleSubmit}>
//           {renderFormStep()}
//         </form>
        
//         <div className="booking-info">
//           <h3>Why choose our service?</h3>
//           <ul>
//             <li><i className="fas fa-check-circle"></i> Certified technicians</li>
//             <li><i className="fas fa-check-circle"></i> 90-day service warranty</li>
//             <li><i className="fas fa-check-circle"></i> Same-day service available</li>
//             <li><i className="fas fa-check-circle"></i> Transparent pricing with no hidden costs</li>
//           </ul>
          
//           <div className="booking-contact">
//             <h3>Need help booking?</h3>
//             <p>Call us at <strong>+91-1234567890</strong></p>
//             <p>Email: <strong>support@repairmate.com</strong></p>
//             <p>Available 8:00 AM - 8:00 PM, 7 days a week</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookingPage;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BookingPage.css';

const BookingPage = () => {
  const [formData, setFormData] = useState({
    customerName: "",
    customerPhone: "",
    customerEmail: "",
    applianceType: "",
    issueDescription: "",
    preferredDate: "",
    preferredTime: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    pincode: "",
    landmark: "",
    location: { lat: 28.6139, lng: 77.2090 }
  });

  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const booking = {
      id: Date.now(),
      customerName: formData.customerName || 'Guest',
      customerPhone: formData.customerPhone || '',
      customerEmail: formData.customerEmail || '',
      serviceType: formData.applianceType || 'General Service',
      issue: formData.issueDescription || '',
      address: formData.addressLine1 || 'Address not provided',
      date: formData.preferredDate || new Date().toISOString().split('T')[0],
      time: formData.preferredTime || 'ASAP',
      technician: null,
      price: 800,
      status: 'Pending Approval',
      source: 'user'
    };

    try {
      const existing = JSON.parse(localStorage.getItem('bookings') || '[]');
      existing.unshift(booking);
      localStorage.setItem('bookings', JSON.stringify(existing));
      setSubmitted(true);
    } catch (err) {
      console.error('Failed to save booking', err);
    }
  };

  const nextStep = () => setCurrentStep(currentStep + 1);
  const prevStep = () => setCurrentStep(currentStep - 1);

  const renderFormStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="form-step">
            <h2>Service Details</h2>
            <div className="form-section">
              <label>Your Name</label>
              <input
                type="text"
                name="customerName"
                value={formData.customerName}
                onChange={handleChange}
                placeholder="Full name"
                required
              />
            </div>

            <div className="form-section">
              <label>Phone</label>
              <input
                type="tel"
                name="customerPhone"
                value={formData.customerPhone}
                onChange={handleChange}
                placeholder="Phone number"
                required
              />
            </div>

            <div className="form-section">
              <label>Email</label>
              <input
                type="email"
                name="customerEmail"
                value={formData.customerEmail}
                onChange={handleChange}
                placeholder="Email address"
                required
              />
            </div>

            <div className="form-section">
              <label>Appliance Type</label>
              <select 
                name="applianceType" 
                value={formData.applianceType} 
                onChange={handleChange}
                required
              >
                <option value="">Select Appliance</option>
                <option value="refrigerator">Refrigerator</option>
                <option value="washing-machine">Washing Machine</option>
                <option value="air-conditioner">Air Conditioner</option>
                <option value="television">Television</option>
                <option value="microwave">Microwave Oven</option>
              </select>
            </div>

            <div className="form-section">
              <label>Issue Description</label>
              <textarea 
                name="issueDescription" 
                value={formData.issueDescription} 
                onChange={handleChange}
                placeholder="Describe the issue"
                rows="4"
                required
              ></textarea>
            </div>

            <div className="button-group">
              <button type="button" className="next-btn" onClick={nextStep}>Next</button>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="form-step">
            <h2>Schedule Your Service</h2>
            <div className="form-section">
              <label>Preferred Date</label>
              <input 
                type="date" 
                name="preferredDate" 
                value={formData.preferredDate} 
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]}
                required
              />
            </div>
            <div className="form-section">
              <label>Preferred Time</label>
              <input 
                type="time" 
                name="preferredTime" 
                value={formData.preferredTime} 
                onChange={handleChange}
                required
              />
            </div>
            <div className="button-group">
              <button type="button" onClick={prevStep}>Back</button>
              <button type="button" onClick={nextStep}>Next</button>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="form-step">
            <h2>Address Details</h2>
            <div className="form-section">
              <label>Address Line 1</label>
              <input 
                type="text" 
                name="addressLine1" 
                value={formData.addressLine1} 
                onChange={handleChange}
                placeholder="House number, street"
                required
              />
            </div>
            <div className="button-group">
              <button type="button" onClick={prevStep}>Back</button>
              <button type="submit" className="confirm-booking-btn">Confirm Booking</button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="booking-page">
      <div className="booking-header">
        <h1>Book a Service</h1>
        <p>Fill in the details below to schedule your appliance repair service</p>
      </div>

      {/* Booking details card removed (was static sample data). */}

      <div className="booking-card">
        <form onSubmit={handleSubmit}>
          {renderFormStep()}
        </form>
      </div>
      {submitted && (
        <div className="booking-confirm">
          Booking saved — an admin will review your request.
          <button className="btn-sm" onClick={() => setSubmitted(false)}>Create another booking</button>
        </div>
      )}
    </div>
  );
};

export default BookingPage;
