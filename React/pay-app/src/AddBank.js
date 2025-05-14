import React, { useState } from "react";

const AddBank = () => {
  const [bankName, setBankName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [ifsc, setIfsc] = useState("");
  const [message, setMessage] = useState("");

  const handleAddBank = () => {
    setMessage(`Bank account added successfully! Bank: ${bankName}, Account: ${accountNumber}`);
  };

  return (
    <div className="add-bank">
      <h2>Add Bank Account</h2>
      <input type="text" placeholder="Bank Name" value={bankName} onChange={(e) => setBankName(e.target.value)} />
      <input type="text" placeholder="Account Number" value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} />
      <input type="text" placeholder="IFSC Code" value={ifsc} onChange={(e) => setIfsc(e.target.value)} />
      <button onClick={handleAddBank}>Add Bank</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AddBank;
