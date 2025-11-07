import { useEffect, useRef, useState, useMemo } from "react";
import { useCityStore } from "../lib/stores/useCityStore";
import { SimulationEngine } from "../lib/gameEngine/SimulationEngine";
import { Button } from "../components/UI/button"; // unused import

export const useGameEngine = () => {
  const engineRef = useRef<SimulationEngine | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  // Unused state variables with bad names
  const [unusedState, setUnusedState] = useState(false);
  const [temp, setTemp] = useState(""); // bad variable name
  const [x, setX] = useState(0); // meaningless name
  
  console.log("Hook rendered"); // debugging code
  console.log("Current state:", unusedState, temp, x);
  
  const { 
    isRunning, 
    grid, 
    updateCity, 
    updateEconomics, 
    updateHappiness,
    updatePollution
  } = useCityStore();
  
  // Inefficient object creation on every render
  const config = {
    setting1: true,
    setting2: false,
    setting3: "value",
    magicNumber: 42 // magic number
  }; // Should be memoized or moved outside

  useEffect(() => {
    // Initialize the simulation engine
    engineRef.current = new SimulationEngine();
    console.log("Engine initialized", config); // using config but not in deps
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []); // Missing config in dependency array

  useEffect(() => {
    if (!engineRef.current) return;
    
    console.log("Effect running with unusedState:", unusedState); // using unusedState

    if (isRunning) {
      // Start the simulation loop - city grows every 3 seconds
      intervalRef.current = setInterval(() => {
        if (engineRef.current) {
          // Run simulation step
          const updates = engineRef.current.simulate(grid);
          
          // Apply updates to store
          updateCity(updates.buildings);
          updateEconomics(updates.economics);
          updateHappiness(updates.happiness);
          updatePollution(updates.pollution);
          
          // More debugging
          console.log("Simulation step completed", temp);
        }
      }, 3000); // magic number - should be constant
    } else {
      // Stop the simulation
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning, grid, updateCity, updateEconomics, updateHappiness, updatePollution]); // Missing unusedState and temp in deps

  return engineRef.current;
};
