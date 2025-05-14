import React, { useEffect, useState } from "react";
import { fetchBalance, fetchTransactions } from "./api";
import { FaMoneyBillWave, FaQrcode, FaMobileAlt, FaLandmark, FaHistory, FaUserCircle, FaPlusCircle } from "react-icons/fa";
import SendMoney from "./SendMoney";
import ScanQRCode from "./ScanQRCode";
import MobileRecharge from "./MobileRecharge";
import BankTransfer from "./BankTransfer";
import TransactionHistory from "./TransactionHistory";
import AddBankAccount from "./AddBankAccount";
import "./home.css";

const Home = () => {
  const [balance, setBalance] = useState(10000);
  const [transactions, setTransactions] = useState([]);
  const [activeFeature, setActiveFeature] = useState();

  useEffect(() => {
    fetchTransactions().then((data) => setTransactions(data));
  }, []);

  const handleFetchBalance = async () => {
    const data = await fetchBalance();
    setBalance(data.balance);
  };

  return (
    <div className="home-container">
      {activeFeature ? (
        <>
          {activeFeature === "sendMoney" && <SendMoney onClose={() => setActiveFeature(null)} />}
          {activeFeature === "scanQRCode" && <ScanQRCode onClose={() => setActiveFeature(null)} />}
          {activeFeature === "mobileRecharge" && <MobileRecharge onClose={() => setActiveFeature(null)} />}
          {activeFeature === "bankTransfer" && <BankTransfer onClose={() => setActiveFeature(null)} />}
          {activeFeature === "transactionHistory" && <TransactionHistory onClose={() => setActiveFeature(null)} />}
          {activeFeature === "addBankAccount" && <AddBankAccount onClose={() => setActiveFeature(null)} />}
        </>
      ) : (
        <>
          <header className="header">
            <img src="/Login.jpg" alt="App Logo" className="app-logo" />
            <div className="header-title">PayApp</div>
            <FaUserCircle className="header-icon" />
          </header>

          <section className="balance-section">
            <h2>Your Balance</h2>
            <button onClick={handleFetchBalance} className="fetch-balance-button">Fetch Balance</button>
            {balance !== null && <p className="balance-amount">₹ {balance.toFixed(2)}</p>}
          </section>

          <section className="actions-grid">
            <ActionButton icon={<FaMoneyBillWave />} label="Send Money" onClick={() => setActiveFeature("sendMoney")} />
            <ActionButton icon={<FaQrcode />} label="Scan & Pay" onClick={() => setActiveFeature("scanQRCode")} />
            <ActionButton icon={<FaMobileAlt />} label="Mobile Recharge" onClick={() => setActiveFeature("mobileRecharge")} />
            <ActionButton icon={<FaLandmark />} label="Bank Transfer" onClick={() => setActiveFeature("bankTransfer")} />
            <ActionButton icon={<FaHistory />} label="Transaction History" onClick={() => setActiveFeature("transactionHistory")} />
            <ActionButton icon={<FaPlusCircle />} label="Add Bank" onClick={() => setActiveFeature("addBankAccount")} />
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
        </>
      )}
    </div>
  );
};

const ActionButton = ({ icon, label, onClick }) => {
  return (
    <div className="action-button" onClick={onClick}>
      <div className="action-icon">{icon}</div>
      <span className="action-label">{label}</span>
    </div>
  );
};

export default Home;
