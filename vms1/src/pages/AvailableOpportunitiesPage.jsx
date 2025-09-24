import React from 'react';
import './AvailableOpportunitiesPage.css';

const AvailableOpportunitiesPage = () => {
  return (
    <div className="opportunities-container">
      <h1 className="section-title">Available Opportunities</h1>
      
      <div className="filters-row">
        <input type="text" placeholder="Filter by Category..." className="filter-input" />
        <input type="text" placeholder="Sort By..." className="sort-input" />
        <button className="search-button">
          <i className="fas fa-search"></i>
        </button>
      </div>

      <div className="opportunities-grid">
        {/* Opportunity Card 1 */}
        <div className="opportunity-card">
          <img src="https://via.placeholder.com/200" alt="Community Garden Planting" className="opportunity-image" />
          <div className="card-content">
            <h3 className="card-title">Community Garden Planting</h3>
            <p className="card-details">Sat, Nov 18</p>
            <p className="card-description">Help plant seasonal vegetables and herbs.</p>
            <div className="card-actions">
              <button className="view-details-button">View Details</button>
              <button className="signup-button">Sign Up</button>
            </div>
          </div>
        </div>

        {/* Opportunity Card 2 */}
        <div className="opportunity-card">
          <img src="https://via.placeholder.com/200" alt="Weekend Animal Shelter Support" className="opportunity-image" />
          <div className="card-content">
            <h3 className="card-title">Weekend Animal Shelter Support</h3>
            <p className="card-details">Every Saturday</p>
            <p className="card-description">Assist with dog walking, cat playtime and cleaning.</p>
            <div className="card-actions">
              <button className="view-details-button">View Details</button>
              <button className="signup-button">Sign Up</button>
            </div>
          </div>
        </div>

        {/* Opportunity Card 3 */}
        <div className="opportunity-card">
          <img src="https://via.placeholder.com/200" alt="Food Bank Sorting" className="opportunity-image" />
          <div className="card-content">
            <h3 className="card-title">Food Bank Sorting</h3>
            <p className="card-details">City Farm & Park</p>
            <p className="card-description">Assist with dog walking, cat playtime and herbs.</p>
            <div className="card-actions">
              <button className="view-details-button">View Details</button>
              <button className="signup-button">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableOpportunitiesPage;