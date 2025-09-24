import React from 'react';
import './ProfileSettingsPage.css';

const ProfileSettingsPage = () => {
  return (
    <div className="settings-container">
      <h1 className="settings-title">Profile Settings</h1>
      
      <div className="settings-grid">
        {/* Left Column */}
        <div className="settings-column">
          {/* Personal Information */}
          <div className="settings-card">
            <h3 className="card-header">Personal Information</h3>
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input type="text" id="fullName" placeholder="Full Name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="Email Address" />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" placeholder="Phone Number" />
            </div>
          </div>

          {/* Change Password */}
          <div className="settings-card">
            <h3 className="card-header">Change Password</h3>
            <div className="form-group">
              <input type="password" placeholder="New Password" />
            </div>
            <div className="form-group">
              <input type="password" placeholder="Confirm New Password" />
            </div>
          </div>
          
          {/* Skills & Interests */}
          <div className="settings-card">
            <h3 className="card-header">Skills & Interests</h3>
            <div className="skills-tags">
              <span className="skill-tag">Gardening</span>
              <span className="skill-tag">Childcare</span>
              <span className="skill-tag">Event Setup</span>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="settings-column">
          <div className="settings-card">
            <div className="form-group">
              <label htmlFor="currentName">Full Name</label>
              <p className="field-value">john.doe@example.com</p>
            </div>
            <div className="form-group">
              <label htmlFor="currentEmail">Email Address</label>
              <p className="field-value">john.doe@example.com</p>
            </div>
            <div className="form-group">
              <label htmlFor="currentPhone">Phone Number</label>
              <p className="field-value">john.doe@example.com</p>
            </div>
          </div>

          <div className="settings-card">
            <div className="form-group">
              <label htmlFor="newPassword">New Password</label>
              <input type="password" id="newPassword" placeholder="New Password" />
            </div>
            <div className="form-group">
              <label htmlFor="confirmNewPassword">Confirm New Password</label>
              <input type="password" id="confirmNewPassword" placeholder="Confirm New Password" />
            </div>
          </div>

          <button className="save-changes-button">Save Changes</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettingsPage;