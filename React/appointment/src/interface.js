import React from "react";

const App = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-blue-500">
      <div className="text-center">
        <div className="w-20 h-20 rounded-full bg-cyan-400 flex items-center justify-center shadow-lg mx-auto mb-4">
          <img
            src="/logo.png"
            alt="CareMe Logo"
            className="w-10 h-10"
          />
        </div>
        <h1 className="text-white text-2xl font-semibold drop-shadow-lg">CareMe</h1>
      </div>
    </div>
  );
};

export default App;
