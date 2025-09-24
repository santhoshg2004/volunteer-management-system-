import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StartupPage from './pages/StartupPage';
import LoginPage from './pages/LoginPage';
import VolunteerDashboard from './pages/VolunteerDashboard';
// Update import path for AdminDashboard
import AdminDashboard from './pages/admin/AdminDashboard'; 
import SignupPage from './pages/SignupPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/volunteer-dashboard" element={<VolunteerDashboard />} />
        {/* Update route path for admin dashboard if needed, or keep as is */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} /> 
      </Routes>
    </BrowserRouter>
  );
};

export default App;