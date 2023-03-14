import { useEffect, useState, createContext } from "react";
import { getDatliyMeal } from "../apis/foodData-api";
import * as calService from "../apis/cal-api";

export const FoodContext = createContext();

export default function FoodContextProvider({ children }) {
  const [brakefast, setBrakefast] = useState([]);
  const [lunch, setLunch] = useState([]);
  const [dinner, setDinner] = useState([]);
  const [bmr, setBmr] = useState(0);
  const [backupBmr, setBackupBmr] = useState(0);

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
    };
    const setUp = async () => {
      console.log("updateCal");
      const resBmr = await calService.getFood();
      setBmr(resBmr?.data?.result);
      setBackupBmr(resBmr?.data?.result);
      console.log(resBmr?.data?.result, "sdfsdfsdfsdf");
    };
    setUp();
    get();
  }, []);

  return (
    <FoodContext.Provider
      value={{
        brakefast,
        setBrakefast,
        lunch,
        setLunch,
        dinner,
        setDinner,
        bmr,
        setBmr,
        backupBmr,
        setBackupBmr,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
}
