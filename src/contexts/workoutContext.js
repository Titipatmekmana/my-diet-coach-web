import { useEffect, useState, createContext } from "react";
import { getWorkoutDaily } from "../apis/workout-api";

export const WorkoutContext = createContext();

export default function WorkoutContext({ chaildren }) {
  const [workoutList, setWorkoutList] = useState([]);

  useEffect(() => {
    const get = async () => {
      const res = await getWorkoutDaily();
      const workout = res.data.map((i) => {
        return {
          id: i.id,
          name: i.Workouts.name,
          calories: i.Workouts.calories,
        };
      });
      setWorkoutList(workout);
    };
    get();
  }, []);

  return (
    <WorkoutContext.Provider value={{ workoutList }}>
      {chaildren}
    </WorkoutContext.Provider>
  );
}
