import React, { useState } from 'react';
import './App.css';

const Header = () => {
  return (
    <header className="header">
      <img src="/logo.png" alt="Pay App Logo" className="logo" />
      <div className="profile">
        <img src="/profile-pic.png" alt="Profile" className="profile-pic" />
        <span>Omkar</span>
      </div>
    </header>
  );
};

const BalanceSection = ({ onCheckBalance, onSendMoney, onBankTransfer, onScanQR }) => {
  return (
    <section className="balance-section">
      <div className="actions">
        <button onClick={onCheckBalance}>Check Balance</button>
        <button onClick={onSendMoney}>Send Money</button>
      </div>
      <div className="actions">
        <button onClick={onBankTransfer}>Bank Transfer</button>
        <button onClick={onScanQR}>Scan QR</button>
      </div>
    </section>
  );
};

const BillAndRechargeSection = () => {
  return (
    <section className="bill-recharge-section">
      <h3>Bill Payments & Recharge</h3>
      <div className="bill-actions">
        <button>Pay Bills</button>
        <button>Recharge</button>
      </div>
    </section>
  );
};

const AddBankAccount = ({ onAddAccount }) => {
  return (
    <section className="add-bank-account">
      <button onClick={onAddAccount}>Add Another Bank Account</button>
    </section>
  );
};

const App = () => {
  const [balance, setBalance] = useState(5000.00);

  const handleCheckBalance = () => {
    alert(`Your balance is ₹${balance}`);
  };

  const handleSendMoney = () => {
    alert('Soon it will be updated');
  };

  const handleBankTransfer = () => {
    alert('Soon it will be updated');
  };

  const handleScanQR = () => {
    alert('Soon it will be updated');
  };

  const handleAddBankAccount = () => {
    alert('Soon it will be updated');
  };

  return (
    <div className="App">
      <Header />
      <BalanceSection 
        onCheckBalance={handleCheckBalance}
        onSendMoney={handleSendMoney}
        onBankTransfer={handleBankTransfer}
        onScanQR={handleScanQR}
      />
      <BillAndRechargeSection />
      <AddBankAccount onAddAccount={handleAddBankAccount} />
    </div>
  );
};

export default App;