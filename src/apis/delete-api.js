import axios from "../config/axios";

export const deleteFood = (idFood) => {
  return axios.delete(`/food/${idFood}`);
};
