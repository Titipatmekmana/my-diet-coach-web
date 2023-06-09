import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as foodDateApi from "../apis/foodData-api";
import useAuth from "../hooks/useAuth";
import useFood from "../hooks/useFood";
import axios from "../config/axios";

export default function TodoContent(props) {
  const { getFood, setGetFood } = useState("");
  const navigate = useNavigate();
  const { setBrakefast } = useFood();
  const { setLunch } = useFood();
  const { setDinner } = useFood();
  const { setDeleteBrakefast } = useFood();
  const { setDeleteLunch } = useFood();
  const { setDeleteDinner } = useFood();
  const { meal } = useParams();

  const {
    authenticatedUser: { id },
  } = useAuth();

  const handleSumitFood = async () => {
    const {
      data: { FoodResult, userFoodData },
    } = await foodDateApi.getfoodData({
      foodId: props.foodCal.id,
      userId: id,
      dailyMeal: meal,
    });
    console.log(userFoodData, "userFoodData");
    if (meal === "brakefast")
      setBrakefast((prev) => [
        ...prev,
        {
          id: userFoodData.id,
          name: FoodResult.name,
          calories: FoodResult.calories,
        },
      ]);
    else if (meal === "lunch")
      setLunch((prev) => [
        ...prev,
        {
          id: userFoodData.id,
          name: FoodResult.name,
          calories: FoodResult.calories,
        },
      ]);
    else if (meal === "dinner")
      setDinner((prev) => [
        ...prev,
        {
          id: userFoodData.id,
          name: FoodResult.name,
          calories: FoodResult.calories,
        },
      ]);

    navigate("/");
  };

  // const deleteFoodList = async () => {};

  // const deleteFood = () => {};
  // const deleSubmitFood = ()  props.foodCal.name || props.foodCal.carbs;

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
        {/* <button
          className="px-4 text-white bg-red-600 rounded-md w-24 m-3 p-3"
          onClick={deleteFoodList}
        >
          <i className="fa-regular fa-trash-can"></i>
        </button> */}
      </div>
    </div>
  );
}
