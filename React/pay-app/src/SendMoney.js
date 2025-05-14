import React, { useState } from "react";

const SendMoney = () => {
  const [mobile, setMobile] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMoney = () => {
    setMessage(`₹${amount} sent to ${mobile} successfully!`);
  };

  return (
    <div className="send-money">
      <h3>Send Money</h3>
      <input type="text" placeholder="Enter Mobile Number" value={mobile} onChange={(e) => setMobile(e.target.value)} />
      <input type="number" placeholder="Enter Amount (₹)" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <button onClick={handleSendMoney}>Pay</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default SendMoney;
