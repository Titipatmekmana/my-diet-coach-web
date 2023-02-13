import axios from "../config/axios";

export const getFood = () => axios.get("/cal");
