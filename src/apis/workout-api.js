import axios from "../config/axios";

export const getWorkout = (name) => axios.get(`/workout?name=${name}`);

export const selectedWorkout = () => axios.get("/workout/all");

export const getWorkoutData = (input) =>
  axios.post("/workout/workoutDate", input);

export const getWorkoutDaily = () => axios.get("/workout/getWorkoutDaily");
export const updateBurnCal = () => axios.get("/workout/burnCal");

// export const workout = (name) => axios.get(`/workout/`);
