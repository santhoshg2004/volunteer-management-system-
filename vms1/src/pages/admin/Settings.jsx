import React from 'react';
import './Settings.css';

const Settings = () => {
  return (
    <div className="admin-page-container">
      <h1 className="admin-page-title">Settings</h1>
      <div className="admin-content-grid">
        <div className="admin-card">
          <h2 className="card-header">Organization Profile</h2>
          <div className="form-group">
            <label>Organization Name</label>
            <input type="text" placeholder="Organization" />
          </div>
          <div className="form-group">
            <label>Website</label>
            <input type="text" placeholder="example.com" />
          </div>
          <div className="form-group">
            <label>Contact Email</label>
            <input type="email" placeholder="email@example.com" />
          </div>
          <button className="edit-button">Edit</button>
        </div>
        <div className="admin-card">
          <h2 className="card-header">User Management</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John Smith</td>
                <td>Admin</td>
                <td>
                  <button className="remove-button">Remove</button>
                </td>
              </tr>
            </tbody>
          </table>
          <button className="add-button">+ Add New Admin</button>
        </div>
        <div className="admin-card">
          <h2 className="card-header">Notification Settings</h2>
          <label>
            <input type="checkbox" /> New Volunteer Welcome
          </label>
          <label>
            <input type="checkbox" /> Receive weekly report summary
          </label>
        </div>
      </div>
    </div>
  );
};

export default Settings;