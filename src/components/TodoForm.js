import { useState } from "react";
import validator from "validator";
import TodoItem from "../components/TodoItem";

import * as foodApi from "../apis/food-api";

const InitialFoods = {
  name: "",
  group: "",
  calories: "",
  carbs: "",
  fat: "",
  protein: "",
};

export default function FoodFrom() {
  const [foodName, setFoodName] = useState([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  console.log(foodName);

  const handleSumit = async (e) => {
    e.preventDefault();
    if (validator.isEmpty(input, { ignore_whitespace: true })) {
      setError("title is required");
    } else {
      const foodNameList = await foodApi.getfood(input);
      setFoodName(foodNameList.data);
    }
  };

  return (
    <div>
      <form onSubmit={handleSumit}>
        <div className="flex space-x-1">
          <input
            type="text"
            value={input}
            placeholder="Enter input"
            onChange={(e) => setInput(e.target.value)}
            className="block w-96 px-4 py-2 text-black bg-white border rounded-full focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />

          <button className="px-4 text-white bg-purple-600 rounded-full ">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </form>
      <ul className="bg-white rounded-lg border border-gray-200 w-96 text-gray-900 mt-3">
        {foodName?.map((el) => (
          <TodoItem foodCal={el} />
        ))}
      </ul>
    </div>
  );
}
