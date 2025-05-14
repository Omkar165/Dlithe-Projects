import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import SendMoney from "./pages/SendMoney";
import ScanPay from "./pages/ScanPay";
import MobileRecharge from "./pages/MobileRecharge";
import BankTransfer from "./pages/BankTransfer";
import TransactionHistory from "./pages/TransactionHistory";
import AddBank from "./pages/AddBank";
import "./styles/app.css";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <nav className="nav-bar">
          <Link to="/">Home</Link>
          <Link to="/send-money">Send Money</Link>
          <Link to="/scan-pay">Scan & Pay</Link>
          <Link to="/mobile-recharge">Mobile Recharge</Link>
          <Link to="/bank-transfer">Bank Transfer</Link>
          <Link to="/transactions">Transactions</Link>
          <Link to="/add-bank">Add Bank</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/send-money" element={<SendMoney />} />
          <Route path="/scan-pay" element={<ScanPay />} />
          <Route path="/mobile-recharge" element={<MobileRecharge />} />
          <Route path="/bank-transfer" element={<BankTransfer />} />
          <Route path="/transactions" element={<TransactionHistory />} />
          <Route path="/add-bank" element={<AddBank />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
