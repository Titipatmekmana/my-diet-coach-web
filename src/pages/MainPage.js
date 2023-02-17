import { useState, useEffect } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import useAuth from "../hooks/useAuth";
import * as calService from "../apis/cal-api";
import * as callFood from "../apis/food-api";
import * as foodCal from "../apis/calFood-api";
import useFood from "../hooks/useFood";
import { Link, useNavigate } from "react-router-dom";
import * as deleteFoodList from "../apis/delete-api";

export default function MainPage() {
  const { authenticatedUser } = useAuth();
  const Navigate = useNavigate();
  const [bmr, setBmr] = useState(0);
  const [percent, setPercent] = useState(0);
  const { brakefast } = useFood();
  const { lunch } = useFood();
  const { dinner } = useFood();
  const [calFood, setCalFood] = useState();
  const { setBrakefast } = useFood();
  const { setLunch } = useFood();
  const { setDinner } = useFood();

  const [total, setTotal] = useState(0);

  const updateCal = async () => {
    const resBmr = await calService.getFood();
    setBmr(resBmr?.data?.result);

    const cal = await foodCal.getCalFood();
    console.log("fetchcal", cal);
    const caldb = cal?.data[0]?.totalCalories ?? 0;
    const bmrResult = resBmr?.data?.result ?? 0;

    setCalFood(cal?.data[0]?.totalCalories);

    const t = ((+bmrResult - +caldb) / +bmrResult) * 100;
    console.log(bmrResult, caldb, t);
    setTotal(t);
  };

  useEffect(() => {
    updateCal();
  }, [brakefast, lunch, dinner]);

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const d = new Date("2021-03-25");
  let day = days[d.getDay()];

  const deleteFoodItem = async (id, meal) => {
    // console.log(deleteFoodItem);
    console.log("imma del this shit");
    console.log("deleting ID", id);
    try {
      const cal = await deleteFoodList.deleteFood(id);
      if (meal === "breakfast") {
        const f = brakefast.filter((el) => el.id !== id);
        setBrakefast(f);
      } else if (meal === "lunch") {
        const g = lunch.filter((el) => el.id !== id);
        setLunch(g);
      } else if (meal === "dinner") {
        const d = dinner.filter((el) => el.id !== id);
        setDinner(d);
      }
      console.log("fetchcal", cal);
      setCalFood(cal?.data[0]?.totalCalories);
      const t = (bmr - calFood) / 100;
      setTotal(t);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col h-100 max-h-full">
      <h2 className="text-center text-2xl font-bold p-5 ">Home</h2>
      <h2 className="text-center text-2xl font-bold p-5 ">BMR & TDEE</h2>

      <div className="flex flex-row flex-auto justify-around p-10 ">
        {/* <div className="flex flex-col">
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
        </div> */}
        <div className="flex flex-col  text-2xl">
          <span className="flex">{day}</span>
          <span className="flex">{new Date().getDate()}</span>
        </div>
        {/* <div className="flex flex-col">
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
        </div> */}
      </div>

      <div className="flex flex-row justify-around  pt-10 m-10">
        <div className="flex flex-col justify-center items-center space-y-5  text-black font-bold text-2xl">
          <i className="flex fa-solid fa-utensils"></i>
          <span className="flex">{calFood}</span>
          <span className="flex">EATEN</span>
        </div>

        <div>
          <div className="mx-[100px] w-[150px] h-[150px] flex ">
            <CircularProgressbar
              value={total}
              text={Math.floor(bmr)}
              styles={{
                background: {
                  fill: "#8A2BE2",
                },
                text: {
                  // Text color
                  fill: "#000000",
                  // Text size
                  fontSize: "18px",
                },
              }}
            />
          </div>
          <span className="flex flex-col justify-center items-center space-y-5  text-black font-bold text-2xl pt-5">
            Your total daily calories
          </span>
        </div>

        <div className="flex flex-col justify-center items-center space-y-5  text-black font-bold text-2xl">
          <i className="fa-solid fa-fire"></i>
          <span className="flex">......</span>
          <span className="flex">BURN</span>
        </div>
      </div>

      <span className="flex justify-center items-center  text-black font-bold text-xl mb-5">
        Plese select your activity
      </span>
      <div className="flex flex-row justify-center">
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
          className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
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
        <span className="text-xl text-center font-bold pl-5">Daily</span>
      </div>

      {/* ///////////////////////////////////////////// */}

      {/* <div className="flex-row justify-evenly"> */}
      <span className="pt-4 text-black font-bold text-x pl-10">
        Break Fast
        <Link
          className="pt-9 text-black font-bold text-x ml-5 "
          to={"/food/brakefast"}
        >
          <i className="fa-solid fa-plus"></i>
        </Link>
      </span>

      {brakefast?.map((el) => (
        <div className="flex justify-around h-20 bg-gradient-to-r from-sky-500 to-indigo-500 p-3 drop-shadow-xl rounded-lg mx-5 my-3 ">
          <div className="flex gap-3 content-center	">
            <span className=" pt-4 text-white font-bold	text-xl">
              Name:
              <span>{el.name}</span>
            </span>
          </div>
          <div className=" flex gap-3	 content-center">
            <span className="pt-4 text-white font-bold	text-xl">
              Calories:
              <span>{el.calories}</span>
            </span>
          </div>
          <button
            className=" flex text-white border-2 border-black bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg  px-5 py-2.5 text-xl text-center mr-2 mb-2"
            onClick={() => deleteFoodItem(el.id, "breakfast")}
          >
            delete
          </button>
        </div>
      ))}

      <span className="pt-4 text-black font-bold text-xl pl-10">
        Lunch
        <Link
          className="pt-9 text-black font-bold text-xl ml-5 "
          to={"/food/lunch"}
        >
          <i className="fa-solid fa-plus"></i>
        </Link>
      </span>

      {lunch.map((el) => (
        <div className="flex justify-around h-20 bg-gradient-to-r from-sky-500 to-indigo-500 p-3 drop-shadow-xl rounded-lg mx-5 my-3 ">
          <div className="flex gap-3 content-center	">
            <span className=" pt-4 text-white font-bold	text-xl">
              Name:
              <span>{el.name}</span>
            </span>
          </div>
          <div className=" flex gap-3 content-center">
            <span className=" pt-4 text-white font-bold	text-xl">
              Calories:
              <span>{el.calories}</span>
            </span>
          </div>

          <button
            className=" flex text-white border-2 border-black bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg  px-5 py-2.5 text-xl text-center mr-2 mb-2"
            onClick={() => deleteFoodItem(el.id, "lunch")}
          >
            delete
          </button>
        </div>
      ))}

      <span className="pl-10 text-black font-bold  ">
        Dinner
        <Link
          className=" text-black font-bold text-xl ml-5 "
          to={"/food/dinner"}
        >
          <i className="fa-solid fa-plus"></i>
        </Link>
      </span>

      {dinner.map((el) => (
        <div className="flex justify-around h-20 bg-gradient-to-r from-sky-500 to-indigo-500 p-3 drop-shadow-xl rounded-lg mx-5 my-3 ">
          <div className="flex gap-3 content-center	">
            <span className="pt-4 text-white font-bold	">
              Name:
              <span>{el.name}</span>
            </span>
          </div>
          <div className=" flex gap-3	 content-center	">
            <span className="pt-4 text-white font-bold	text-xl">
              Calories:
              <span>{el.calories}</span>
            </span>
          </div>

          <button
            className="  flex text-white border-2 border-black bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg  px-5 py-2.5 text-xl text-center mr-2 mb-2"
            onClick={() => deleteFoodItem(el.id, "dinner")}
          >
            delete
          </button>
        </div>
      ))}
      {/* </div> */}

      {/* <button className="flex" onClick={}>dele</button> */}
    </div>
  );
}
