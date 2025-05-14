import axios from "axios";

const API_BASE_URL = "https://mock-phonepe-api.com";

export const fetchBalance = async () => {
  const response = await axios.get(`${API_BASE_URL}/balance`);
  return response.data;
};

export const fetchTransactions = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/transactions`);
    return response.data;
  } catch (error) {
    console.error("Error fetching transactions:", error);
    throw error; 
  }
};


export const sendMoney = async (mobile, amount, upiPin) => {
  const response = await axios.post(`${API_BASE_URL}/send-money`, {
    mobile,
    amount,
    upiPin,
  });
  return response.data;
};

export const scanQRCode = async (qrCodeData) => {
  const response = await axios.post(`${API_BASE_URL}/scan-qrcode`, {
    qrCodeData,
  });
  return response.data;
};

export const mobileRecharge = async (mobile, amount) => {
  const response = await axios.post(`${API_BASE_URL}/mobile-recharge`, {
    mobile,
    amount,
  });
  return response.data;
};

export const bankTransfer = async (accountNumber, ifsc, amount) => {
  const response = await axios.post(`${API_BASE_URL}/bank-transfer`, {
    accountNumber,
    ifsc,
    amount,
  });
  return response.data;
};

export const addBankAccount = async (accountHolder, accountNumber, ifsc) => {
  const response = await axios.post(`${API_BASE_URL}/add-bank-account`, {
    accountHolder,
    accountNumber,
    ifsc,
  });
  return response.data;
};
