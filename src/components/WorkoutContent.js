import * as workoutApi from "../apis/workout-api";
import { useNavigate } from "react-router-dom";

export default function WorkoutContent(props) {
  const navigate = useNavigate();
  console.log(props, "propppppppp");
  const handleSumitWorkout = async () => {
    try {
      await workoutApi.getWorkoutData({
        workoutId: props.exerciseCal.id,
      });
      console.log(props.exerciseCal.id, "worlkkkkkksdfsdkfsdf");
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-between">
      <div className="flex flex-col justify-evenly">
        <div className="flex gap-3">
          <span className=" text-black">Name:</span>
          <span>{props.exerciseCal.name}</span>
        </div>
        <div className=" flex gap-3	">
          <span className=" text-black">time:</span>
          <span>{props.exerciseCal.time}</span>
        </div>
        <div className=" flex gap-3	">
          <span className=" text-black">Calories:</span>
          <span>{props.exerciseCal.calories}</span>
        </div>
      </div>

      <div className="flex flex-col justify-between  gap-x-3 	p-3 ">
        <button
          className="px-4 text-white bg-purple-600 rounded-md w-24 m-3 p-3 shadow-4"
          onClick={handleSumitWorkout}
        >
          <i className="fa-solid fa-check"></i>
        </button>
      </div>
    </div>
  );
}
