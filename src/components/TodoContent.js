import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as foodDateApi from "../apis/foodData-api";
import useFood from "../hooks/useFood";

export default function TodoContent(props) {
  const { getFood, setGetFood } = useState("");
  const navigate = useNavigate();
  const { setBrakefast } = useFood();
  const { setLunch } = useFood();
  const { setDinner } = useFood();
  const { meal } = useParams();

  const handleSumitFood = async () => {
    await foodDateApi.getfoodData({ Foodid: props.foodCal.id });
    if (meal === "brakefast")
      setBrakefast((prev) => [
        ...prev,
        { name: props.foodCal.name, calories: props.foodCal.calories },
      ]);
    else if (meal === "lunch")
      setLunch((prev) => [
        ...prev,
        { name: props.foodCal.name, calories: props.foodCal.calories },
      ]);
    else if (meal === "dinner")
      setDinner((prev) => [
        ...prev,
        { name: props.foodCal.name, calories: props.foodCal.calories },
      ]);
    navigate("/");
  };

  // const deleSubmitFood = () => {
  //   await;
  // };

  return (
    <div className="flex justify-between">
      <div className="flex flex-col justify-evenly">
        <div className="flex gap-3	">
          <span className=" text-black">Name:</span>
          <span>{props.foodCal.name}</span>
        </div>
        <div className=" flex gap-3	">
          <span className=" text-black">Calories:</span>
          <span>{props.foodCal.calories}</span>
        </div>

        <div className=" flex gap-3	">
          <span className=" text-black">Carbohydrate:</span>
          <span>{props.foodCal.carbs}</span>
        </div>
        <div className="flex gap-3	">
          <span className=" text-black">Fat:</span>
          <span>{props.foodCal.fat}</span>
        </div>
        <div className="flex gap-3	">
          <span className=" text-black">Protein:</span>
          <span>{props.foodCal.protein}</span>
        </div>
      </div>

      <div className="flex flex-col justify-between  gap-x-3 	p-3 ">
        <button
          className="px-4 text-white bg-purple-600 rounded-md w-24 m-3 p-3 shadow-4"
          onClick={handleSumitFood}
        >
          <i className="fa-solid fa-check"></i>
        </button>
        <button
          className="px-4 text-white bg-red-600 rounded-md w-24 m-3 p-3"
          // onClick={(el) => setGetFood(el.target.value)}
        >
          <i className="fa-regular fa-trash-can"></i>
        </button>
      </div>
    </div>
  );
}
