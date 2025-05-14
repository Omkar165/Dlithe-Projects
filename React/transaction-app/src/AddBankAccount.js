import React, { useState } from "react";
import { addBankAccount } from "./api";

const AddBankAccount = ({ onClose }) => {
  const [accountHolder, setAccountHolder] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [ifsc, setIfsc] = useState("");
  const [message, setMessage] = useState("");

  const handleAddAccount = async () => {
    if (!accountHolder || !accountNumber || !ifsc) {
      setMessage("Please enter all details");
      return;
    }

    const response = await addBankAccount(accountHolder, accountNumber, ifsc);
    setMessage(response.success ? "Account Added Successfully!" : "Failed to Add Account");
  };

  return (
    <div className="feature-container">
      <h2>Add Bank Account</h2>
      <input
        type="text"
        placeholder="Account Holder Name"
        value={accountHolder}
        onChange={(e) => setAccountHolder(e.target.value)}
      />
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
      <button onClick={handleAddAccount}>Add Account</button>
      <button onClick={onClose}>Close</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AddBankAccount;
