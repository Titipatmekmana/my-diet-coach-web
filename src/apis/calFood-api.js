import axios from "../config/axios";
export const getCalFood = (input) =>
  axios.post("/food/getUserFoodTotals", input);
