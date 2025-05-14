import React, { useState } from "react";
import "./App.css";
import myImage from "./assets/travel.jpeg"; 

function App() {
  const [showInfo, setShowInfo] = useState(false);

  const handleReadMore = () => {
    setShowInfo(!showInfo);
  };

  return (
    <div className="container">
      <h1>AEROPLANE</h1>
      <img src={myImage} alt="My Display" className="image" />


        <p className="info-text">
          A powered flying vehicle with fixed wings and a weight greater than that of the air it displaces; an aeroplane
        </p>
    
    </div>
  );
}

export default App;