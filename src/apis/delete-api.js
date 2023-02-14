import axios from "../config/axios";

export const deleteFood = (idFood) => axios.delete(`/food/${idFood}`);
