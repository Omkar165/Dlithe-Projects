import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can add validation or API calls here

    alert("Account created successfully!");
    navigate("/"); // Redirect to SignIn page
  };

  return (
    <div className="d-flex vh-100 align-items-center justify-content-center bg-light flex-column">
      <div className="bg-primary w-100 text-white text-center py-3">
        <h1 className="h4 fw-bold m-0">Sign Up</h1>
      </div>

      <div className="card shadow p-4 mt-n2 w-100" style={{ maxWidth: "400px" }}>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label fw-semibold">Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-semibold">Email</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label htmlFor="phone" className="form-label fw-semibold">Phone no</label>
            <input type="tel" className="form-control" id="phone" placeholder="Enter phone number" value={formData.phone} onChange={handleChange} required />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="form-label fw-semibold">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Enter password" value={formData.password} onChange={handleChange} required />
          </div>

          <button type="submit" className="btn btn-primary w-100">Sign Up</button>

          <div className="text-center mt-3">
            <p className="mb-0">
              Already have an account?{" "}
              <Link to="/" className="fw-semibold text-primary text-decoration-none">Sign in</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
