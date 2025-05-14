import React from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/brand-logo.png'; // if Header.js is in src/
import './Header.css'; // optional, or use shared styles

const Header = () => {
  const user = JSON.parse(localStorage.getItem('loggedInUser'));

  const initials = user?.name
    ? user.name
        .split(' ')
        .map(word => word[0])
        .join('')
        .substring(0, 2)
        .toUpperCase()
    : '';

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    window.location.reload();
  };

  return (
    <nav className="navbar">
      <div className="logo">
      <img src={logo} alt="Logo" className="logo-img" />

        <h1>MedConnect</h1>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/doctors">Doctors</Link></li>
        <li><Link to="/appointment-confirmation">My Appointment</Link></li>
        <li><Link to="/health-checkups">Health Checkup</Link></li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#about-us">About Us</a></li>
      </ul>
      {initials ? (
        <div className="auth-box">
          <span className="user-initials">{initials}</span>
          <button className="sign-up-btn" onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <Link to="/signup"><button className="sign-up-btn">Sign Up</button></Link>
      )}
    </nav>
  );
};

export default Header;
