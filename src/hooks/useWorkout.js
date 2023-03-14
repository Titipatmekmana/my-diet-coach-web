import { useContext } from "react";
import { WorkoutContext } from "../contexts/workoutContext";

export default function useWorkout() {
  return useContext(WorkoutContext);
}
