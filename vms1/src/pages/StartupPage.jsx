import React from 'react';
import { Link } from 'react-router-dom'; // Make sure this line is present
import './StartupPage.css';

const StartupPage = () => {
  return (
    <div className="container">
      {/* Header Section */}
      <header className="header">
        <nav className="nav">
          <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1 className="hero-title">VOLUNTEER MANAGEMENT SYSTEM</h1>
        <p className="hero-subtitle">
          A platform designed to streamline the management of volunteers,
          events, and projects for nonprofits and community organizations
        </p>
        {/* The change is here: use <Link> instead of <button> */}
        <Link to="/login" className="cta-button">GET STARTED</Link>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-item">
            <span className="stat-number">1,245</span>
            <span className="stat-label">VOLUNTEERS</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">6,820</span>
            <span className="stat-label">HOURS CONTRIBUTED</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">320</span>
            <span className="stat-label">EVENTS COMPLETED</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">4,500</span>
            <span className="stat-label">PEOPLE HELPED</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2 className="features-title">FEATURES</h2>
        <div className="features-content">
          <div className="features-list">
            <div className="feature-item">
              <span className="icon">📅</span>
              <span>Shift & Role Management</span>
            </div>
            <div className="feature-item">
              <span className="icon">👥</span>
              <span>Volunteer Profiles & Availability</span>
            </div>
            <div className="feature-item">
              <span className="icon">⏱️</span>
              <span>Attendance Tracking</span>
            </div>
            <div className="feature-item">
              <span className="icon">⚙️</span>
              <span>Self-service Portal</span>
            </div>
            <button className="cta-button join-now">JOIN NOW</button>
          </div>
          <div className="features-image">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPMh07sCurpic-O13XKqqKaUgDpu9yqPyjZA&s" 
              alt="Volunteers smiling" 
            />
            <p>Join our community of volunteers making a difference</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StartupPage;