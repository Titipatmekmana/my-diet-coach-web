import axios from "../config/axios";

export const getfood = (input) => axios.get(`/food?name=${input}`);
