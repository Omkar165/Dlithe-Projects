import React from "react";
import { Link } from "react-router-dom";


const SignIn = () => {
  return (
    <div className="d-flex vh-100 align-items-center justify-content-center bg-light">
      <div className="card shadow w-100" style={{ maxWidth: "400px" }}>
        <div className="card-header bg-primary text-white text-center">
          <h1 className="h4 fw-bold m-0">WELCOME</h1>
        </div>
        <div className="card-body">
          <h2 className="h5 fw-bold text-decoration-underline mb-4">Please Sign In</h2>

          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-semibold">Email</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email" />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-semibold">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Enter your password" />
          </div>

          
          
          <div className="text-end mb-3">
          <Link to="/forgot-password" className="text-decoration-none text-primary">
          Forgot Password?
          </Link>
          </div>

          <button className="btn btn-primary w-100">Sign In</button>

          <div className="text-center mt-08">
            <p className="mb-0">
              Or<br />
              Don’t have an account?{" "}
              <Link to="/signup" className="fw-semibold text-primary text-decoration-none">Sign up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
