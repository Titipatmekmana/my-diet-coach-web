import { useState } from "react";
import validator from "validator";
import WorkoutList from "./Workoutlist";

import * as workoutApi from "../apis/workout-api";

const InitialWorkout = {
  name: "",
  calories: "",
  time: "",
};

export default function FormWorkout() {
  const [excerciseName, setExcerciseName] = useState(null);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const workoutSumit = async (e) => {
    e.preventDefault();
    if (validator.isEmpty(input, { ignore_whitespace: true })) {
      setError("title is required");
    } else {
      try {
        const exerciseList = await workoutApi.getWorkout(input);
        setExcerciseName(exerciseList.data);
      } catch (error) {
        setError("errorrrrrr");
      }
    }
  };

  return (
    <div>
      <form onSubmit={workoutSumit}>
        <div className="flex space-x-1">
          <input
            type="text"
            value={input}
            placeholder="Enter input"
            onChange={(el) => setInput(el.target.value)}
            className="block w-96 px-4 py-2 text-black bg-white border rounded-full focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />

          <button className="px-4 text-white bg-purple-600 rounded-full ">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </form>
      <ul className="bg-white rounded-lg border border-gray-200 w-96 text-gray-900 mt-3">
        {excerciseName?.map((e) => (
          <WorkoutList key={e.id} exerciseCal={e} />
        ))}
      </ul>
    </div>
  );
}
