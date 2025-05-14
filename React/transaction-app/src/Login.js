import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [otpMode, setOtpMode] = useState(false);
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [storedPassword, setStoredPassword] = useState("password");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (phoneNumber === "7894561230" && password === storedPassword) {
      alert("Login Successful!");
      navigate("/home");
    } else {
      setError("Invalid phone number or password");
    }
  };

  const handleForgotPassword = () => {
    setOtpMode(true);
    setError("");
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    if (otp === "1234") {
      alert("OTP Verified! Set a new password.");
      setIsOtpVerified(true);
      setOtpMode(false);
    } else {
      setError("Invalid OTP");
    }
  };

  const handleNewPasswordSubmit = (e) => {
    e.preventDefault();
    setStoredPassword(newPassword);
    alert("Password reset successful! Please login with your new password.");
    setIsOtpVerified(false);
  };

  const handleRegister = () => {
    navigate("./register");
  };

  return (
    <div className="login-container">
      <div className="logo-container">
        <img src="/logo.jpg" alt="App Logo" className="app-logo" />
      </div>
      <h2>Welcome to PayApp</h2>
      {otpMode ? (
        <form onSubmit={handleOtpSubmit}>
          <p>Enter OTP sent to your registered number:</p>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
          <button type="submit">Verify OTP</button>
        </form>
      ) : isOtpVerified ? (
        <form onSubmit={handleNewPasswordSubmit}>
          <p>Set a new password:</p>
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <button type="submit">Save Password</button>
        </form>
      ) : (
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="error">{error}</p>}
          <button type="submit">Login</button>
          <p>or</p>
          <button className="register-btn" onClick={handleRegister}>Register</button>
          <p className="forgot-password" onClick={handleForgotPassword}>Forgot Password?</p>
        </form>
      )}
    </div>
  );
};

export default LoginPage;
