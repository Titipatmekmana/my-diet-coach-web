import { useState, useEffect } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import useAuth from "../hooks/useAuth";
import * as calService from "../apis/cal-api";
import * as callFood from "../apis/food-api";
import useFood from "../hooks/useFood";
import { Link, useNavigate } from "react-router-dom";
//

export default function MainPage() {
  const { authenticatedUser } = useAuth();
  const Navigate = useNavigate();
  console.log("auth", authenticatedUser);
  const [bmr, setBmr] = useState(0);
  const [percent, setPercent] = useState(0);
  const { brakefast } = useFood();
  const { lunch } = useFood();
  const { dinner } = useFood();
  const { state, setState } = useState();

  console.log(percent);
  console.log(bmr);

  useEffect(() => {
    const flexBmr = async () => {
      const res = await calService.getFood();
      setBmr(res.data.result);
    };
    flexBmr();
  }, []);

  useEffect(() => {
    const foodList = async () => {
      const r = await callFood.getfood();
      setPercent(r.data.FoodResult);
    };
  });

  return (
    <div className="flex flex-col h-100 max-h-full">
      <h2 className="text-center text-2xl font-bold p-5 ">Home</h2>
      <div className="flex flex-row flex-auto justify-around p-10 ">
        <div className="flex flex-col">
          <span className="flex">M</span>
          <span className="flex">1</span>
        </div>
        <div className="flex flex-col">
          <span className="flex">T</span>
          <span className="flex">2</span>
        </div>
        <div className="flex flex-col">
          <span className="flex">W</span>
          <span className="flex">3</span>
        </div>
        <div className="flex flex-col">
          <span className="flex">T</span>
          <span className="flex">4</span>
        </div>
        <div className="flex flex-col">
          <span className="flex">F</span>
          <span className="flex">5</span>
        </div>
        <div className="flex flex-col">
          <span className="flex">S</span>
          <span className="flex">6</span>
        </div>
        <div className="flex flex-col">
          <span className="flex">S</span>
          <span className="flex">7</span>
        </div>
      </div>
      <div className="flex flex-row justify-around  pt-10 m-10">
        <div className="flex flex-col justify-center items-center p-10">
          <i className="fa-solid fa-utensils"></i>
          <span className="flex">......</span>
          <span className="flex">EATEN</span>
        </div>

        <div>
          <div className="mx-[100px] w-[150px] h-[150px] flex ">
            <CircularProgressbar
              value={percent}
              text={`${bmr} Kcal`}
              styles={{
                background: {
                  fill: "#8A2BE2",
                },
                text: {
                  // Text color
                  fill: "#f88",
                  // Text size
                  fontSize: "16px",
                },
              }}
            />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center p-10 m-4">
          <i className="fa-solid fa-fire"></i>
          <span className="flex">......</span>
          <span className="flex">BURN</span>
        </div>
      </div>

      <div className="flex justify-center">
        <button
          onClick={() => {
            setPercent(bmr * 1.2);
            setBmr(bmr * 1.2);
          }}
          type="button"
          class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          No activity
        </button>

        <button
          onClick={() => {
            setPercent(bmr * 1.375);
            setBmr(bmr * 1.375);
          }}
          type="button"
          class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Some activity
        </button>

        <button
          onClick={() => {
            setPercent(bmr * 1.7);
            setBmr(bmr * 1.7);
          }}
          type="button"
          class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          A lot of activity
        </button>
      </div>

      <div className="flex ">
        <span className="text-xl text-left font-bold pl-5">Daily</span>
      </div>

      {/* ///////////////////////////////////////////// */}
      <span>brakefast</span>
      <Link to={"/food/brakefast"}>add </Link>
      <div className="flex flex-col justify-around">
        {brakefast.map((el) => (
          <div className="flex h-14 bg-gradient-to-r from-sky-500 to-indigo-500 m-3">
            <div className="flex gap-3	">
              <span className=" text-black">Name:</span>
              <span>{el.name}</span>
            </div>
            <div className=" flex gap-3	">
              <span className=" text-black">Calories:</span>
              <span>{el.calories}</span>
            </div>
          </div>
        ))}

        <span>lunch</span>
        <Link to={"/food/lunch"}>add </Link>
        {lunch.map((el) => (
          <div className="flex h-14 bg-gradient-to-r from-sky-500 to-indigo-500 m-3">
            <div className="flex">
              <div className="flex gap-3	">
                <span className=" text-black">Name:</span>
                <span>{el.name}</span>
              </div>
              <div className=" flex gap-3	">
                <span className=" text-black">Calories:</span>
                <span>{el.calories}</span>
              </div>
            </div>
          </div>
        ))}

        <span>dinner</span>
        <Link to={"/food/dinner"}>add </Link>
        {dinner.map((el) => (
          <div className="flex h-14 bg-gradient-to-r from-sky-500 to-indigo-500 m-3">
            <span>Dinner</span>
            <div className="flex ">
              <div className="flex gap-3	">
                <span className=" text-black">Name:</span>
                <span>{el.name}</span>
              </div>
              <div className=" flex gap-3	">
                <span className=" text-black">Calories:</span>
                <span>{el.calories}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
