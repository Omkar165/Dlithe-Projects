import React, { useState } from "react";

const VerifyUPIPin = ({ onVerify, onClose }) => {
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");

  const handleVerify = () => {
    if (pin === "0000") {
      onVerify(true);
    } else {
      setError("Invalid UPI PIN. Try again.");
    }
  };

  return (
    <div className="feature-container">
      <h2>Enter UPI PIN</h2>
      <input
        type="password"
        placeholder="Enter 4-digit UPI PIN"
        value={pin}
        onChange={(e) => setPin(e.target.value)}
        maxLength="4"
      />
      <button onClick={handleVerify}>Verify</button>
      <button onClick={onClose}>Cancel</button>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default VerifyUPIPin;
