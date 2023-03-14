import axios from "../config/axios";

export const deleteWorkout = (id) => {
  return axios.delete(`/workout/${id}`);
};
