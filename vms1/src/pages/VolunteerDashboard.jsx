import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UpcomingShiftsPage from './UpcomingShiftsPage';
import AvailableOpportunitiesPage from './AvailableOpportunitiesPage';
import ProfileSettingsPage from './ProfileSettingsPage'; // Import the new component
import './VolunteerDashboard.css';

const VolunteerDashboard = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('dashboard');

  const handleLogout = () => {
    console.log("User logged out"); 
    navigate('/'); 
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return (
          // ... (existing dashboard content)
          <div className="dashboard-content-main">
            <h1 className="welcome-message">Welcome, John!</h1>
            <div className="content-grid">
              {/* Quick Stats Card */}
              <div className="card quick-stats-card">
                <h2>QUICK STATS</h2>
                <div className="stat-row">
                  <p>Hours This Month: <span className="stat-value">15</span></p>
                  <p>Total Hours: <span className="stat-value">120</span></p>
                </div>
              </div>
              
              {/* Upcoming Shifts */}
              <div className="card upcoming-shifts-card">
                <h2>UPCOMING SHIFTS</h2>
                {/* ... existing content ... */}
              </div>
              
              {/* Available Opportunities */}
              <div className="card available-opportunities-card">
                <h2>AVAILABLE OPPORTUNITIES</h2>
                {/* ... existing content ... */}
              </div>
            </div>
            
            {/* Recent Notifications */}
            <div className="recent-notifications card">
              <h2>RECENT NOTIFICATIONS</h2>
              {/* ... existing content ... */}
            </div>
          </div>
        );
      case 'upcomingShifts':
        return <UpcomingShiftsPage />;
      case 'availableOpportunities':
        return <AvailableOpportunitiesPage />;
      case 'profileSettings':
        return <ProfileSettingsPage />; // Render the new component
      default:
        return null;
    }
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="header-title">VOLUNTEER DASHBOARD</div>
        <div className="user-info">
          <span className="user-name">John Doe</span>
          <button onClick={handleLogout} className="logout-button">Logout</button>
        </div>
      </header>
      
      <main className="dashboard-main">
        <aside className="dashboard-sidebar">
          <ul className="sidebar-menu">
            <li 
              className={activeSection === 'dashboard' ? 'active' : ''} 
              onClick={() => setActiveSection('dashboard')}
            >
              Dashboard
            </li>
            <li 
              className={activeSection === 'upcomingShifts' ? 'active' : ''} 
              onClick={() => setActiveSection('upcomingShifts')}
            >
              Upcoming Shifts
            </li>
            <li
              className={activeSection === 'availableOpportunities' ? 'active' : ''}
              onClick={() => setActiveSection('availableOpportunities')}
            >
              Available Opportunities
            </li>
            <li
              className={activeSection === 'profileSettings' ? 'active' : ''}
              onClick={() => setActiveSection('profileSettings')}
            >
              Profile Settings
            </li>
          </ul>
        </aside>
        
        <section className="dashboard-content">
          {renderContent()}
        </section>
      </main>
    </div>
  );
};

export default VolunteerDashboard;