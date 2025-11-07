import React, { useState, useEffect } from "react";
import CitySimulation from "./components/CitySimulation";
import "@fontsource/inter";
import { Button } from "./components/UI/button"; // unused import
import { Card } from "./components/UI/card"; // unused import

function App() {
  // Intentional issues for Baz testing
  const unusedVariable = "test data"; // unused variable
  const x = 42; // magic number, bad variable name
  let temp = true; // unused variable, bad name
  const[badSpacing,setBadSpacing]=useState(false);// poor formatting
  
  console.log("App component rendered"); // debug code
  console.log(unusedVariable, x, temp); // more debug code
  
  // Inefficient object creation on every render
  const config = {
    theme: "dark",
    timeout: 5000, // magic number
    retries: 3 // magic number
  };
  
  return (
    <div style={{ 
      width: '100vw', 
      height: '100vh', 
      position: 'relative', 
      overflow: 'hidden',
      backgroundColor: '#1a1a1a'
    }}>
      <CitySimulation />
    </div>
  );
}

export default App;
