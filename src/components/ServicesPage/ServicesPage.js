import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ServicesPage.css';

const ServicesPage = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(true);

  useEffect(() => {
    // Hide filters by default on small screens for better UX
    const handleResize = () => {
      setShowFilters(window.innerWidth > 900);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Mock data for services
  const services = [
    {
      id: 1,
      title: "Washing Machine Repair",
      category: "appliances",
      brand: "LG",
      description: "Professional repair service for all washing machine issues including leakage, spinning problems, and electrical faults.",
      price: 899,
      image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2FzaGluZyUyMG1hY2hpbmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      rating: 4.5,
      reviews: 124
    },
    {
      id: 2,
      title: "AC Servicing",
      category: "cooling",
      brand: "Samsung",
      description: "Complete AC servicing including gas refill, cleaning, and performance optimization for all AC types.",
      price: 1299,
      image: "https://images.unsplash.com/photo-1595079676334-9b5b8a5e8f1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWlyJTIwY29uZGl0aW9uZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      rating: 4.7,
      reviews: 98
    },
    {
      id: 3,
      title: "Refrigerator Repair",
      category: "appliances",
      brand: "Whirlpool",
      description: "Expert repair for cooling issues, compressor problems, and temperature regulation in refrigerators.",
      price: 1099,
      image: "https://images.unsplash.com/photo-1633389320025-505ce2416fe1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJlZnJpZ2VyYXRvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      rating: 4.4,
      reviews: 87
    },
    {
      id: 4,
      title: "Microwave Oven Repair",
      category: "appliances",
      brand: "IFB",
      description: "Fix heating issues, button malfunctions, and electrical problems in microwave ovens.",
      price: 699,
      image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWljcm93YXZlJTIwb3ZlbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      rating: 4.2,
      reviews: 65
    },
    {
      id: 5,
      title: "Television Repair",
      category: "electronics",
      brand: "Sony",
      description: "Expert repair for LED, LCD, and Smart TVs including screen issues, sound problems, and connectivity.",
      price: 1499,
      image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVsZXZpc2lvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      rating: 4.6,
      reviews: 142
    },
    {
      id: 6,
      title: "Laptop Repair",
      category: "electronics",
      brand: "Dell",
      description: "Comprehensive laptop repair including hardware issues, software problems, and screen replacement.",
      price: 1999,
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      rating: 4.8,
      reviews: 176
    }
  ];

  const categories = ['all', 'appliances', 'cooling', 'electronics'];
  const brands = ['all', 'LG', 'Samsung', 'Whirlpool', 'IFB', 'Sony', 'Dell'];

  // Filter services based on selected filters
  const filteredServices = services.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesBrand = selectedBrand === 'all' || service.brand === selectedBrand;
    const matchesPrice = service.price >= priceRange[0] && service.price <= priceRange[1];
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesBrand && matchesPrice && matchesSearch;
  });

  return (
    <div className="services-page">
      <div className="services-header">
        <h1>Our Repair Services</h1>
        <p>Professional repair services for all your appliances and electronics</p>
      </div>

      <div className="services-container">
        {/* Mobile filter toggle (visible on small screens) */}
        <div className="mobile-filters-toggle-wrapper">
          <button
            className="mobile-filters-toggle"
            type="button"
            onClick={() => setShowFilters(prev => !prev)}
          >
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </button>
        </div>

        {/* Sidebar Filters */}
        <div className={`filters-sidebar ${showFilters ? '' : 'hidden'}`}>
          <div className="filter-section">
            <h3>Search</h3>
            <div className="search-box">
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <i className="fas fa-search"></i>
            </div>
          </div>

          <div className="filter-section">
            <h3>Categories</h3>
            {categories.map(category => (
              <div key={category} className="filter-option">
                <input
                  type="radio"
                  id={category}
                  name="category"
                  checked={selectedCategory === category}
                  onChange={() => setSelectedCategory(category)}
                />
                <label htmlFor={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </label>
              </div>
            ))}
          </div>

          <div className="filter-section">
            <h3>Brands</h3>
            {brands.map(brand => (
              <div key={brand} className="filter-option">
                <input
                  type="radio"
                  id={brand}
                  name="brand"
                  checked={selectedBrand === brand}
                  onChange={() => setSelectedBrand(brand)}
                />
                <label htmlFor={brand}>
                  {brand.charAt(0).toUpperCase() + brand.slice(1)}
                </label>
              </div>
            ))}
          </div>

          <div className="filter-section">
            <h3>Price Range</h3>
            <div className="price-range">
              <span>₹{priceRange[0]} - ₹{priceRange[1]}</span>
              <input
                type="range"
                min="0"
                max="10000"
                step="500"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
              />
            </div>
          </div>

          <button 
            className="reset-filters-btn"
            onClick={() => {
              setSelectedCategory('all');
              setSelectedBrand('all');
              setPriceRange([0, 10000]);
              setSearchQuery('');
            }}
          >
            Reset Filters
          </button>
        </div>

        {/* Services Listing */}
        <div className="services-listing">
          <div className="services-meta">
            <p>{filteredServices.length} services available</p>
            <div className="sort-options">
              <select>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Rating</option>
                <option>Popularity</option>
              </select>
            </div>
          </div>

          <div className="services-grid">
            {filteredServices.length > 0 ? (
              filteredServices.map(service => (
                <div key={service.id} className="service-card">
                  <div className="service-image">
                    <img src={service.image} alt={service.title} />
                    <div className="service-rating">
                      <i className="fas fa-star"></i>
                      <span>{service.rating}</span>
                      <span>({service.reviews})</span>
                    </div>
                  </div>
                  <div className="service-details">
                    <h3>{service.title}</h3>
                    <p className="service-description">{service.description}</p>
                    <div className="service-meta">
                      <span className="service-brand">{service.brand}</span>
                      <span className="service-category">{service.category}</span>
                    </div>
                    <div className="service-price">₹{service.price}</div>
                    <button
                      type="button"
                      className="book-now-btn"
                      onClick={() => navigate('/booking')}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-services">
                <i className="fas fa-search"></i>
                <h3>No services found</h3>
                <p>Try adjusting your filters or search query</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
