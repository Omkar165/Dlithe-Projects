import React, { useEffect, useState } from "react";
import { fetchTransactions } from "../api/api";

const TransactionHistory = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchTransactions().then((data) => setTransactions(data));
  }, []);

  return (
    <div className="transaction-history">
      <h2>Transaction History</h2>
      {transactions.length === 0 ? (
        <p>No transactions found.</p>
      ) : (
        <ul>
          {transactions.map((txn, index) => (
            <li key={index}>
              <strong>ID:</strong> {txn.id} | <strong>Amount:</strong> ₹{txn.amount} | <strong>Status:</strong> {txn.status}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TransactionHistory;
