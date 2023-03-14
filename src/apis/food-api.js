import axios from "../config/axios";

export const getfood = (input) => axios.get(`/food?name=${input}`);

export const getUserFood = (foodId) => axios.get(`/food/${foodId}`);
