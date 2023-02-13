import axios from "../config/axios";

export const getfoodData = (input) => axios.post("/food/foodDate", input);
