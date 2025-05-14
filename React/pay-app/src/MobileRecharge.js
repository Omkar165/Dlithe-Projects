import React, { useState } from "react";

const MobileRecharge = () => {
  const [mobile, setMobile] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  const handleRecharge = () => {
    setMessage(`Recharge of ₹${amount} successful for ${mobile}!`);
  };

  return (
    <div className="mobile-recharge">
      <h2>Mobile Recharge</h2>
      <input type="text" placeholder="Enter Mobile Number" value={mobile} onChange={(e) => setMobile(e.target.value)} />
      <input type="number" placeholder="Enter Amount (₹)" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <button onClick={handleRecharge}>Recharge</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default MobileRecharge;
