import React, { useState } from "react";

const ScanPay = () => {
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  const handlePayment = () => {
    setMessage(`₹${amount} paid successfully via QR code!`);
  };

  return (
    <div className="scan-pay">
      <h2>Scan & Pay</h2>
      <p>Simulate scanning a QR code and making a payment.</p>
      <input type="number" placeholder="Enter Amount (₹)" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <button onClick={handlePayment}>Pay Now</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ScanPay;
