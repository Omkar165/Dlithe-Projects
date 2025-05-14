import React, { useState } from "react";
import { mobileRecharge } from "./api";
import VerifyUPIPin from "./VerifyUPIPin";

const MobileRecharge = ({ onClose }) => {
  const [mobile, setMobile] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const [showPin, setShowPin] = useState(false);

  const handleRecharge = () => {
    if (!mobile || !amount) {
      setMessage("Please enter all details");
      return;
    }
    setShowPin(true);
  };

  const handlePinVerified = async () => {
    setShowPin(false);
    const response = await mobileRecharge(mobile, amount);
    setMessage(response.success ? "Recharge Successful!" : "Recharge Failed");
  };

  return (
    <div className="feature-container">
      <h2>Mobile Recharge</h2>
      <input
        type="text"
        placeholder="Enter Mobile Number"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleRecharge}>Proceed</button>
      <button onClick={onClose}>Close</button>
      {message && <p>{message}</p>}

      {showPin && <VerifyUPIPin onVerify={handlePinVerified} onClose={() => setShowPin(false)} />}
    </div>
  );
};

export default MobileRecharge;
