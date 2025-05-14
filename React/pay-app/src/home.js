import React, { useEffect, useState } from "react";
import { fetchBalance, fetchTransactions } from "./api";
import {
  FaMoneyBillWave,
  FaQrcode,
  FaMobileAlt,
  FaLandmark,
  FaHistory,
  FaUserCircle,
  FaPlusCircle,
} from "react-icons/fa";
import "./home.css";

const Home = () => {
  const [balance, setBalance] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [mobile, setMobile] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchTransactions().then((data) => setTransactions(data));
  }, []);

  const handleFetchBalance = async () => {
    const data = await fetchBalance();
    setBalance(data.balance);
  };

  const handleSendMoney = async () => {
    const merchantId = "YOUR_MERCHANT_ID";
    const phonePeUrl = "https://api.phonepe.com/apis/hermes/pg/v1/pay";
    const redirectUrl = "https://yourwebsite.com/payment-success";

    const paymentData = {
      merchantId: merchantId,
      merchantTransactionId: `TXN${Math.floor(Math.random() * 100000)}`,
      amount: amount * 100,
      mobileNumber: mobile,
      redirectUrl: redirectUrl,
      callbackUrl: redirectUrl,
      paymentInstrument: {
        type: "UPI_INTENT",
        targetApp: "com.phonepe.app",
      },
    };

    try {
      const response = await fetch(phonePeUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-VERIFY": "YOUR_GENERATED_HASH",
          "X-CALLBACK-URL": redirectUrl,
        },
        body: JSON.stringify(paymentData),
      });

      const data = await response.json();

      if (data.success) {
        window.location.href = data.data.instrumentResponse.redirectInfo.url;
      } else {
        alert("Payment Failed. Try Again.");
      }
    } catch (error) {
      console.error("Payment Error:", error);
      alert("Payment Error. Check Console.");
    }
  };

  return (
    <div className="home-container">
      <header className="header">
        <img src="/Login.jpg" alt="App Logo" className="app-logo" />
        <div className="header-title">PayApp</div>
        <FaUserCircle className="header-icon" />
      </header>

      <section className="balance-section">
        <h2>Your Balance</h2>
        <button onClick={handleFetchBalance} className="fetch-balance-button">
          Fetch Balance
        </button>
        {balance !== null && <p className="balance-amount">₹ {balance.toFixed(2)}</p>}
      </section>

      <section className="actions-grid">
        <ActionButton icon={<FaMoneyBillWave />} label="Send Money" />
        <ActionButton icon={<FaQrcode />} label="Scan & Pay" />
        <ActionButton icon={<FaMobileAlt />} label="Mobile Recharge" />
        <ActionButton icon={<FaLandmark />} label="Bank Transfer" />
        <ActionButton icon={<FaHistory />} label="Transaction History" />
        <ActionButton icon={<FaPlusCircle />} label="Add Bank" />
      </section>

      <section className="send-money">
        <h3>Send Money</h3>
        <input
          type="text"
          placeholder="Enter Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          className="input-field"
        />
        <input
          type="number"
          placeholder="Enter Amount (₹)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="input-field"
        />
        <button onClick={handleSendMoney} className="pay-button">Pay</button>
        {message && <p className="message">{message}</p>}
      </section>

      <section className="transactions">
        <h3>Recent Transactions</h3>
        {transactions.length > 0 ? (
          <ul>
            {transactions.map((txn) => (
              <li key={txn.id} className={`transaction-item ${txn.status.toLowerCase()}`}>
                <span>{txn.id}</span>
                <span>₹{txn.amount} - {txn.status}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p>No transactions found.</p>
        )}
      </section>
    </div>
  );
};

const ActionButton = ({ icon, label }) => {
  return (
    <div className="action-button">
      <div className="action-icon">{icon}</div>
      <span className="action-label">{label}</span>
    </div>
  );
};

export default Home;
