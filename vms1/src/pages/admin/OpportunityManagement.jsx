import React from 'react';
import './OpportunityManagement.css';

const OpportunityManagement = () => {
  return (
    <div className="admin-page-container">
      <h1 className="admin-page-title">Opportunity Management</h1>
      <div className="admin-page-header">
        <div className="search-bar-container">
          <input type="text" placeholder="Search opportunities..." className="search-input" />
          <button className="add-button">+ Create New Opportunity</button>
        </div>
      </div>
      <div className="admin-content-grid">
        <div className="admin-card current-opportunities-card">
          <h2 className="card-header">Current Opportunities</h2>
          <table>
            <thead>
              <tr>
                <th>Opportunity</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Community Garden Planting</td>
                <td>Nov 18</td>
                <td>
                  <button className="edit-button">Edit</button>
                  <button className="details-button">Details</button>
                  <button className="delete-button">Delete</button>
                </td>
              </tr>
              <tr>
                <td>Weekend Animal Shelter Support</td>
                <td>Dec 15</td>
                <td>
                  <button className="edit-button">Edit</button>
                  <button className="details-button">Details</button>
                  <button className="delete-button">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="admin-card opportunity-insights-card">
          <h2 className="card-header">Opportunity Insights</h2>
          <p>Total Opportunities: 15</p>
          <p>Volunteers Needed This Week: 35</p>
        </div>
      </div>
      <div className="export-data-container">
        <button className="export-button">Export Data</button>
      </div>
    </div>
  );
};

export default OpportunityManagement;