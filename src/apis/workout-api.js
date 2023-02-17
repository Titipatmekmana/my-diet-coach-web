import axios from "../config/axios";

export const getWorkout = (input) => axios.get(`/workout?name=${input}`);
