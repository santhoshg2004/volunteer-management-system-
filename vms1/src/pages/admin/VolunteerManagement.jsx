import React from 'react';
import './VolunteerManagement.css';

const VolunteerManagement = () => {
  return (
    <div className="admin-page-container">
      <h1 className="admin-page-title">Volunteer Management</h1>
      <div className="admin-page-header">
        <div className="search-bar-container">
          <input type="text" placeholder="Search volunteers..." className="search-input" />
          <button className="add-button">+ Add New Volunteer</button>
        </div>
      </div>
      <div className="admin-content-grid">
        <div className="admin-card">
          <h2 className="card-header">Volunteer Info</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John Smith</td>
                <td>john.s@example.com</td>
                <td>Active</td>
                <td>
                  <button className="edit-button">Edit</button>
                  <button className="delete-button">Delete</button>
                </td>
              </tr>
              <tr>
                <td>Emily White</td>
                <td>emily.w@example.com</td>
                <td>Pending</td>
                <td>
                  <button className="edit-button">Edit</button>
                  <button className="delete-button">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="admin-card">
          <h2 className="card-header">Total Hours</h2>
          <table>
            <thead>
              <tr>
                <th>Opportunity</th>
                <th>Date</th>
                <th>Hours</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Park Cleanup - Dec 1</td>
                <td>Dec 1</td>
                <td>150</td>
                <td>
                  <button className="edit-button">Edit</button>
                  <button className="delete-button">Delete</button>
                </td>
              </tr>
              <tr>
                <td>Food Bank</td>
                <td>Weekly</td>
                <td>50</td>
                <td>
                  <button className="edit-button">Edit</button>
                  <button className="delete-button">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="export-data-container">
        <button className="export-button">Export Data</button>
      </div>
    </div>
  );
};

export default VolunteerManagement;