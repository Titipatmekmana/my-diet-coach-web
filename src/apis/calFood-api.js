import axios from "../config/axios";
export const getCalFood = (input) =>
  axios.get("/food/getUserFoodTotals", input);
