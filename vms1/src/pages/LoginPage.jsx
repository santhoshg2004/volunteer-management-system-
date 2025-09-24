import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const [activeButton, setActiveButton] = useState('');
  const [showLoginFields, setShowLoginFields] = useState(false);
  const navigate = useNavigate();

  const handleUserTypeClick = (userType) => {
    setActiveButton(userType);
    setShowLoginFields(true);
  };
  
  const handleLoginClick = () => {
    if (activeButton === 'volunteer') {
      navigate('/volunteer-dashboard');
    } else if (activeButton === 'admin') {
      // Ensure this path matches the updated route in App.jsx
      navigate('/admin-dashboard'); 
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">LOGIN</h1>
      <p className="login-subtitle">Please select an option to continue:</p>
      <div className="login-options">
        <button 
          className={`login-button ${activeButton === 'volunteer' ? 'active-button' : ''}`}
          onClick={() => handleUserTypeClick('volunteer')}
        >
          VOLUNTEER
        </button>
        <button 
          className={`login-button ${activeButton === 'admin' ? 'active-button' : ''}`}
          onClick={() => handleUserTypeClick('admin')}
        >
          ADMIN
        </button>
      </div>

      {showLoginFields && (
        <div className="login-form-fields">
          <input type="text" placeholder="Username:" />
          <input type="password" placeholder="Password:" />
          <button className="login-form-button" onClick={handleLoginClick}>LOGIN</button>
          <Link to="/signup" className="signup-link">Don't have an account? Sign up</Link>
        </div>
      )}
    </div>
  );
};

export default LoginPage;