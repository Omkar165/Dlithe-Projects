import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './HomePage';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import DoctorsPage from './DoctorsPage';
import DoctorDetailPage from './DoctorDetailPage'; // import doctor detail page
import AppointmentConfirmation from './AppointmentConfirmation';
import HealthCheckupPage from './HealthCheckupPage'; // create this component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/doctors" element={<DoctorsPage />} />
        <Route path="/doctor/:id" element={<DoctorDetailPage />} /> {/* NEW ROUTE */}
        <Route path="/appointment-confirmation" element={<AppointmentConfirmation />} />
        <Route path="/health-checkups" element={<HealthCheckupPage />} />
      </Routes>
    </Router>
  );
}

export default App;
