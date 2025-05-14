import { useState } from "react";

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      {page === "home" && (
        <>
          <h1>Welcome to Simple Bank</h1>
          <button onClick={() => setPage("register")}>Register</button>
        </>
      )}

      {page === "register" && (
        <>
          <h1>Registration Page</h1>
          <button onClick={() => setPage("services")}>Go to Services</button>
        </>
      )}

      {page === "services" && (
        <>
          <h1>Our Services</h1>
          <button onClick={() => setPage("home")}>Back to Home</button>
        </>
      )}
    </div>
  );
}
