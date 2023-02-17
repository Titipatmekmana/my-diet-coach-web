import axios from "../config/axios";

export const deleteFood = (idFood) => {
  console.log("kuyyyyy");
  console.log(idFood);
  return axios.delete(`/food/${idFood}`);
};
