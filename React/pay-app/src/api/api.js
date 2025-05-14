export const fetchBalance = async () => {
    return { balance: 5000 }; // Simulated response
  };
  
  export const fetchTransactions = async () => {
    return [
      { id: "TXN12345", amount: 500, status: "Success" },
      { id: "TXN67890", amount: 1200, status: "Pending" },
    ];
  };
  