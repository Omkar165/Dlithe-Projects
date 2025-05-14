import React, { useState } from "react";
import "./App.css"; // Import the CSS file

const AddBankAccount = ({ onAddAccount, accounts }) => {
  const [bankName, setBankName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [ifscCode, setIfscCode] = useState("");

  const handleAddAccount = () => {
    if (bankName && accountNumber && ifscCode) {
      const newAccount = { bankName, accountNumber, ifscCode };
      onAddAccount(newAccount);
      setBankName("");
      setAccountNumber("");
      setIfscCode("");
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <section className="add-bank-account">
      <h2>Add Another Bank Account</h2>
      <div className="bank-form">
        <input
          type="text"
          placeholder="Bank Name"
          value={bankName}
          onChange={(e) => setBankName(e.target.value)}
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
          value={ifscCode}
          onChange={(e) => setIfscCode(e.target.value)}
        />
        <button onClick={handleAddAccount}>Add Account</button>
      </div>

      <div className="account-list">
        <h3>Added Accounts</h3>
        {accounts.length === 0 ? (
          <p>No accounts added yet.</p>
        ) : (
          accounts.map((account, index) => (
            <div key={index} className="account-item">
              <p><strong>Bank:</strong> {account.bankName}</p>
              <p><strong>Account No:</strong> {account.accountNumber}</p>
              <p><strong>IFSC:</strong> {account.ifscCode}</p>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default AddBankAccount;
