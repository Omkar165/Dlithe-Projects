import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./register.css";

const banks = ["HDFC Bank", "ICICI Bank", "SBI", "Axis Bank", "Kotak Bank"];

const Register = () => {
  const [formData, setFormData] = useState({
    mobileNumber: "",
    bank: "",
    accountNumber: "",
    ifscCode: "",
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.mobileNumber.length === 10 &&
      formData.bank &&
      formData.accountNumber &&
      formData.ifscCode
    ) {
      setMessage("Registration Successful!");
      setTimeout(() => navigate("/Login"), 2000);
    } else {
      setMessage(" Please enter all valid details!");
    }
  };

  return (
    <div className="container">
      <h2 style={{ textAlign: "center" }}>Bank Account Registration</h2>
      <form onSubmit={handleSubmit}>
        <label>Mobile Number:</label>
        <input
          type="text"
          name="mobileNumber"
          value={formData.mobileNumber}
          onChange={handleChange}
          placeholder="Enter 10-digit mobile number"
          maxLength="10"
          required
        />

        <label>Select Bank:</label>
        <select name="bank" value={formData.bank} onChange={handleChange} required>
          <option value="">-- Select Bank --</option>
          {banks.map((bank, index) => (
            <option key={index} value={bank}>
              {bank}
            </option>
          ))}
        </select>

        <label>Account Number:</label>
        <input
          type="text"
          name="accountNumber"
          value={formData.accountNumber}
          onChange={handleChange}
          placeholder="Enter account number"
          required
        />

        <label>IFSC Code:</label>
        <input
          type="text"
          name="ifscCode"
          value={formData.ifscCode}
          onChange={handleChange}
          placeholder="Enter IFSC code"
          required
        />

        <button type="submit">Register</button>
      </form>

      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default Register;