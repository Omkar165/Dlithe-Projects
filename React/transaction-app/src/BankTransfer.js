import React, { useState } from "react";
import { bankTransfer } from "./api";
import VerifyUPIPin from "./VerifyUPIPin";

const BankTransfer = ({ onClose }) => {
  const [accountNumber, setAccountNumber] = useState("");
  const [ifsc, setIfsc] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const [showPin, setShowPin] = useState(false);

  const handleTransfer = () => {
    if (!accountNumber || !ifsc || !amount) {
      setMessage("Please enter all details");
      return;
    }
    setShowPin(true);
  };

  const handlePinVerified = async () => {
    setShowPin(false);
    const response = await bankTransfer(accountNumber, ifsc, amount);
    setMessage(response.success ? "Transfer Successful!" : "Transfer Failed");
  };

  return (
    <div className="feature-container">
      <h2>Bank Transfer</h2>
      <input
        type="text"
        placeholder="Account Number"
        value={accountNumber}
        onChange={(e) => setAccountNumber(e.target.value)}
      />
      <input
        type="text"
        placeholder="IFSC Code"
        value={ifsc}
        onChange={(e) => setIfsc(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleTransfer}>Proceed</button>
      <button onClick={onClose}>Close</button>
      {message && <p>{message}</p>}

      {showPin && <VerifyUPIPin onVerify={handlePinVerified} onClose={() => setShowPin(false)} />}
    </div>
  );
};

export default BankTransfer;
