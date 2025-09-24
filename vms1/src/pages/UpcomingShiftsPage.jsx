import React from 'react';
import './UpcomingShiftsPage.css';

const UpcomingShiftsPage = () => {
  return (
    <div className="upcoming-shifts-container">
      <h1 className="section-title">Upcoming Shifts</h1>
      <div className="shifts-grid">
        {/* Card 1 */}
        <div className="shift-card">
          <h3 className="card-title">Food Bank Assistance</h3>
          <p className="card-details">Tomorrow, Nov 10, 9:00 AM - 1:00 PM</p>
          <p className="card-description">Help sort and distribute food donations.</p>
          <div className="card-actions">
            <button className="confirm-button">Confirm Attendance</button>
            <button className="contact-button">Contact Coordinator</button>
            <button className="confirm-button">Confirm Attendance</button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="shift-card">
          <h3 className="card-title">Park Cleanup - Fall Event</h3>
          <p className="card-details">Sat, Nov 12, 1:00 PM - 12:00 PM</p>
          <p className="card-description">Gather leaves and pick up litter.</p>
          <div className="card-actions">
            <button className="confirm-button">Confirm Attendance</button>
            <button className="contact-button">Contact Coordinator</button>
            <button className="add-calendar-button">Confirm Calendar</button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="shift-card">
          <h3 className="card-title">After-School Tutoring</h3>
          <p className="card-details">Central Park, 3:30 PM</p>
          <p className="card-description">Help students with their homework.</p>
          <div className="card-actions">
            <button className="confirm-button">Confirm Attendance</button>
            <button className="contact-button">Contact Coordinator</button>
            <button className="add-calendar-button">Add to Calendar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingShiftsPage;