import React, { useState } from "react";

import Box from "./components/Box/Box";
import "./App.css";

function App() {
  const [activeArray, setActiveArray] = useState([]);

  function setActive(index) {
    const newActiveArray = [...activeArray, index];
    setActiveArray(newActiveArray.slice(-2));
  }

  return (
    <div className="App">
      <div className="matrix-continer">
        {Array(16)
          .fill(1)
          .map((value, index) => (
            <Box
              isActive={activeArray.indexOf(index) > -1 ? "active" : ""}
              setActive={()=> setActive(index)}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
