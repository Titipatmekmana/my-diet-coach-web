import { useEffect, useState, createContext } from "react";
import { getDatliyMeal } from "../apis/foodData-api";

export const FoodContext = createContext();

export default function FoodContextProvider({ children }) {
  const [brakefast, setBrakefast] = useState([]);
  const [lunch, setLunch] = useState([]);
  const [dinner, setDinner] = useState([]);

  useEffect(() => {
    const get = async () => {
      const res = await getDatliyMeal();
      const bf = res.data
        .filter((el) => el.dailyMeal === "brakefast")
        .map((i) => {
          return {
            id: i.id,
            name: i.Food.name,
            calories: i.Food.calories,
          };
        });
      const lf = res.data
        .filter((el) => el.dailyMeal === "lunch")
        .map((i) => {
          return {
            id: i.id,
            name: i.Food.name,
            calories: i.Food.calories,
          };
        });
      const df = res.data
        .filter((el) => el.dailyMeal === "dinner")
        .map((i) => {
          return {
            id: i.id,
            name: i.Food.name,
            calories: i.Food.calories,
          };
        });
      setBrakefast(bf);
      setDinner(lf);
      setLunch(df);
      console.log(bf);
    };

    get();
  }, []);

  return (
    <FoodContext.Provider
      value={{ brakefast, setBrakefast, lunch, setLunch, dinner, setDinner }}
    >
      {children}
    </FoodContext.Provider>
  );
}
