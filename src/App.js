import React from "react";

function App() {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full p-10 justify-center items-center bg-orange-500">
        <div className="card1 bg-white p-4 text-center">card1</div>
        <div className="card2 bg-white p-4 text-center">card2</div>
        <div className="card3 bg-white p-4 text-center">card3</div>
      </div>
    </div>
  );
}

export default App;
