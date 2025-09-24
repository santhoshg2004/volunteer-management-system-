import React from 'react';
import './ReportsAnalytics.css';

const ReportsAnalytics = () => {
  return (
    <div className="admin-page-container">
      <h1 className="admin-page-title">Reports & Analytics</h1>
      <div className="admin-content-grid">
        <div className="admin-card overview-card">
          <h2 className="card-header">Overview Statistics</h2>
          <div className="stats-row">
            <p>Total Volunteers: 250</p>
            <p>Total Hours Logged (YTD): 1,000</p>
          </div>
          <div className="report-controls">
            <input type="date" className="date-input" />
            <button className="generate-button">Generate Report</button>
          </div>
        </div>
        <div className="admin-card charts-card">
          <h2 className="card-header">Charts & Graphs</h2>
          {/* Placeholder for charts */}
          <div className="chart-placeholder">
            <p>Chart here...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsAnalytics;