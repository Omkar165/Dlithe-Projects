// src/SignupPage.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';

function SignupPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    gender: '',
    age: '',
    address: ''
  });
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    const emailExists = users.some(user => user.email === formData.email);

    if (emailExists) {
      alert('User with this email already exists!');
      return;
    }

    users.push(formData);
    localStorage.setItem('registeredUsers', JSON.stringify(users));

    setSuccess(true);
    setTimeout(() => navigate('/login'), 1500);
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Register</h2>

        <input name="name" type="text" placeholder="Full Name" onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
        <input name="phone" type="tel" placeholder="Phone Number" onChange={handleChange} required />

        <select name="gender" onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <input name="age" type="number" placeholder="Age" min="1" onChange={handleChange} required />
        <textarea name="address" placeholder="Address" rows="3" onChange={handleChange} required />

        <button type="submit">Sign Up</button>
        {success && <p className="success">You have registered successfully!</p>}

        <p>Already registered? <Link to="/login">Log in</Link></p>
      </form>
    </div>
  );
}

export default SignupPage;
