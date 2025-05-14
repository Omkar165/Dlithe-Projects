import React, { useState } from "react";
import { sendMoney } from "./api";
import VerifyUPIPin from "./VerifyUPIPin";

const SendMoney = ({ onClose }) => {
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const [showPin, setShowPin] = useState(false);

  const handleSend = () => {
    if (!recipient || !amount) {
      setMessage("Please enter all details");
      return;
    }
    setShowPin(true); 
  };

  const handlePinVerified = async () => {
    setShowPin(false);
    const response = await sendMoney(recipient, amount);
    setMessage(response.success ? "Money Sent Successfully!" : "Transaction Failed");
  };

  return (
    <div className="feature-container">
      <h2>Send Money</h2>
      <input
        type="text"
        placeholder="Recipient UPI ID"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleSend}>Proceed</button>
      <button onClick={onClose}>Close</button>
      {message && <p>{message}</p>}

      {showPin && <VerifyUPIPin onVerify={handlePinVerified} onClose={() => setShowPin(false)} />}
    </div>
  );
};

export default SendMoney;
