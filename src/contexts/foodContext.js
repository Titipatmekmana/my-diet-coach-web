import { useEffect, useState, createContext } from "react";

export const FoodContext = createContext();

export default function FoodContextProvider({ children }) {
  const [brakefast, setBrakefast] = useState([]);
  const [lunch, setLunch] = useState([]);
  const [dinner, setDinner] = useState([]);

  return (
    <FoodContext.Provider
      value={{ brakefast, setBrakefast, lunch, setLunch, dinner, setDinner }}
    >
      {children}
    </FoodContext.Provider>
  );
}
