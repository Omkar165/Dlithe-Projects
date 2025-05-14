import React, { useState } from "react";

const BankTransfer = () => {
  const [account, setAccount] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  const handleTransfer = () => {
    setMessage(`₹${amount} transferred successfully to account ${account}!`);
  };

  return (
    <div className="bank-transfer">
      <h2>Bank Transfer</h2>
      <input type="text" placeholder="Enter Account Number" value={account} onChange={(e) => setAccount(e.target.value)} />
      <input type="number" placeholder="Enter Amount (₹)" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <button onClick={handleTransfer}>Transfer</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default BankTransfer;
