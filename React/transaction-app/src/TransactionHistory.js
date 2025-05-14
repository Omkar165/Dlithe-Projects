import React, { useEffect, useState } from "react";
import { fetchTransactions } from "./api";

const TransactionHistory = ({ onClose }) => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchTransactions().then((data) => setTransactions(data));
  }, []);

  return (
    <div className="feature-container">
      <h2>Transaction History</h2>
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
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default TransactionHistory;
