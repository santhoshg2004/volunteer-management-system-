import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignupPage.css';

const SignupPage = () => {
  const [activeButton, setActiveButton] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [userType, setUserType] = useState('');

  const handleButtonClick = (type) => {
    setActiveButton(type);
    setShowForm(true);
    setUserType(type);
  };

  return (
    <div className="signup-container">
      <h1 className="signup-title">SIGNUP</h1>
      <p className="signup-subtitle">
        Please create your {userType || 'volunteer or admin'} account:
      </p>

      <div className="signup-options">
        <button
          className={`signup-button ${activeButton === 'volunteer' ? 'active-button' : ''}`}
          onClick={() => handleButtonClick('volunteer')}
        >
          VOLUNTEER
        </button>
        <button
          className={`signup-button ${activeButton === 'admin' ? 'active-button' : ''}`}
          onClick={() => handleButtonClick('admin')}
        >
          ADMIN
        </button>
      </div>

      {showForm && (
        <div className="signup-form-fields">
          <input type="text" placeholder="Name:" />
          <input type="email" placeholder="Email:" />
          <input type="password" placeholder="Password:" />
          <input type="password" placeholder="Confirm Password:" />
          <button className="signup-form-button">SIGN UP</button>
          <Link to="/login" className="login-link">
            Already have an account? Sign in
          </Link>
        </div>
      )}
    </div>
  );
};

export default SignupPage;