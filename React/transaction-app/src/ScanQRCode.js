import React, { useState } from "react";
import { scanQRCode } from "./api";
import VerifyUPIPin from "./VerifyUPIPin";

const ScanQRCode = ({ onClose }) => {
  const [qrData, setQrData] = useState("");
  const [message, setMessage] = useState("");
  const [showPin, setShowPin] = useState(false);

  const handleScan = () => {
    if (!qrData) {
      setMessage("Please enter QR code data");
      return;
    }
    setShowPin(true);
  };

  const handlePinVerified = async () => {
    setShowPin(false);
    const response = await scanQRCode(qrData);
    setMessage(response.success ? "Payment Successful!" : "Payment Failed");
  };

  return (
    <div className="feature-container">
      <h2>Scan & Pay</h2>
      <input
        type="text"
        placeholder="Enter QR Code Data"
        value={qrData}
        onChange={(e) => setQrData(e.target.value)}
      />
      <button onClick={handleScan}>Proceed</button>
      <button onClick={onClose}>Close</button>
      {message && <p>{message}</p>}

      {showPin && <VerifyUPIPin onVerify={handlePinVerified} onClose={() => setShowPin(false)} />}
    </div>
  );
};

export default ScanQRCode;
