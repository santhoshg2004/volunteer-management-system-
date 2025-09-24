import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';
import VolunteerManagement from './VolunteerManagement'; // Import new components
import OpportunityManagement from './OpportunityManagement';
import ReportsAnalytics from './ReportsAnalytics';
import Settings from './Settings';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('dashboard');

  const handleLogout = () => {
    console.log("Admin logged out");
    navigate('/');
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return (
          <div className="admin-content-main">
            <h1 className="admin-welcome-message">Welcome, Jane!</h1>
            <div className="admin-content-grid">
              <div className="admin-card admin-quick-stats-card">
                <h2>QUICK STATS</h2>
                <div className="admin-stat-row">
                  <p>Active Volunteers: <span className="admin-stat-value">85</span></p>
                  <p>Open Opportunities: <span className="admin-stat-value">12</span></p>
                </div>
              </div>
              <div className="admin-card admin-table-card">
                <h2>VOLUNTEER MANAGEMENT</h2>
                {/* ... existing table code ... */}
              </div>
              <div className="admin-card admin-table-card">
                <h2>OPPORTUNITY MANAGEMENT</h2>
                {/* ... existing table code ... */}
              </div>
              <div className="admin-card admin-recent-activity-card">
                <h2>RECENT ACTIVITY</h2>
                <p>New volunteer 'Mark T.' signed up.</p>
                <p>'Park Cleanup' updated by Admin.</p>
              </div>
            </div>
          </div>
        );
      case 'volunteerManagement':
        return <VolunteerManagement />;
      case 'opportunityManagement':
        return <OpportunityManagement />;
      case 'reportsAnalytics':
        return <ReportsAnalytics />;
      case 'settings':
        return <Settings />;
      default:
        return null;
    }
  };

  return (
    <div className="admin-dashboard-container">
      <header className="admin-dashboard-header">
        <div className="admin-header-title">ADMIN DASHBOARD</div>
        <div className="admin-user-info">
          <span className="admin-user-name">Jane Doe</span>
          <button onClick={handleLogout} className="admin-logout-button">Logout</button>
        </div>
      </header>
      
      <main className="admin-dashboard-main">
        <aside className="admin-dashboard-sidebar">
          <ul className="admin-sidebar-menu">
            <li className={activeSection === 'dashboard' ? 'active' : ''} onClick={() => setActiveSection('dashboard')}>
              Dashboard
            </li>
            <li className={activeSection === 'volunteerManagement' ? 'active' : ''} onClick={() => setActiveSection('volunteerManagement')}>
              Volunteer Management
            </li>
            <li className={activeSection === 'opportunityManagement' ? 'active' : ''} onClick={() => setActiveSection('opportunityManagement')}>
              Opportunity Management
            </li>
            <li className={activeSection === 'reportsAnalytics' ? 'active' : ''} onClick={() => setActiveSection('reportsAnalytics')}>
              Reports & Analytics
            </li>
            {/* Removed Communications */}
            <li className={activeSection === 'settings' ? 'active' : ''} onClick={() => setActiveSection('settings')}>
              Settings
            </li>
          </ul>
        </aside>
        <section className="admin-dashboard-content">
          {renderContent()}
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;