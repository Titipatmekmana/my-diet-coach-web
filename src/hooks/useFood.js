import { useContext } from "react";
import { FoodContext } from "../contexts/foodContext";

export default function useFood() {
  return useContext(FoodContext);
}
