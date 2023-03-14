import { useState, useEffect } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import useAuth from "../hooks/useAuth";
import * as calService from "../apis/cal-api";
import * as callFood from "../apis/food-api";
import * as foodCal from "../apis/calFood-api";
import * as foodDateApi from "../apis/foodData-api";
import * as workoutApi from "../apis/workout-api";
import useFood from "../hooks/useFood";
import { Link, useNavigate } from "react-router-dom";
import * as deleteFoodList from "../apis/delete-api";
import * as workoutDel from "../apis/deleteWorkout";
import { all } from "axios";

export default function MainPage() {
  const navigate = useNavigate();
  const { brakefast } = useFood();
  const { lunch } = useFood();
  const { dinner } = useFood();
  const [percent, setPercent] = useState(0);
  const [calFood, setCalFood] = useState();
  const [calBurn, setCalBurn] = useState();
  const { bmr, setBmr } = useFood();
  const { backupBmr, setBackupBmr } = useFood();
  const { setBrakefast } = useFood();
  const { setLunch } = useFood();
  const { setDinner } = useFood();
  const [allWorkout, setAllWorkout] = useState([]);
  const [totalBurn, setTotalBurn] = useState(0);
  const [total, setTotal] = useState(0);

  const [dwo, setDwo] = useState([]);

  const updateCal = async () => {
    const cal = await foodCal.getCalFood();
    setCalFood(cal?.data[0]?.totalCalories);
  };

  const updateBurn = async () => {
    const res = await workoutApi.updateBurnCal();
    setTotalBurn(res.data.totalCalories);
    console.log(totalBurn);
  };

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
      console.log("fetchcal", cal?.data[0]?.totalCalories);
      setCalFood(cal?.data[0]?.totalCalories);
      const t = (bmr - calFood) / 100;
      setTotal(t);

      setCalBurn(cal?.data[0]?.totalCalories);
      const b = (bmr - calBurn) / 100;
      setTotal(b);
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(
  //   allWorkout.profile?.UserWorkouts[0].Workout,
  //   "asdasdasdasdasdasdasdasdasdasdasdsa"
  // );

  const deleteWorkoutItem = async (idWorkout) => {
    try {
      console.log(idWorkout);
      await workoutDel.deleteWorkout(idWorkout);
      navigate(0);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    updateBurn();
    // updateWorkout();
    updateCal();
  }, [brakefast, lunch, dinner, bmr]);

  useEffect(() => {
    const fetchWorkout = async () => {
      const workout = await workoutApi.selectedWorkout();
      setAllWorkout(workout.data);
      // console.log(workout, "asdasdasdasdasdkasdasdasdasodas");
    };
    fetchWorkout();
  }, []);
  return (
    <div className="flex flex-col h-100 max-h-screen">
      <h2 className="text-center text-2xl font-bold p-5 ">Home</h2>
      <h2 className="text-center text-2xl font-bold p-5 ">BMR & TDEE</h2>

      <div className="flex flex-row flex-auto justify-around p-10 ">
        <div className="flex flex-col  text-2xl">
          <span className="flex">{day}</span>
          <span className="flex">{new Date().getDate()}</span>
        </div>
      </div>

      <div className="flex flex-row justify-around  pt-10 m-10">
        <div className="flex flex-col justify-center items-center space-y-5  text-black font-bold text-2xl">
          <i className="flex fa-solid fa-utensils"></i>
          <span className="flex">{calFood || 0}</span>
          <span className="flex">EATEN</span>
        </div>

        <div>
          <div className="mx-[100px] w-[150px] h-[150px] flex ">
            <CircularProgressbar
              value={
                ((totalBurn || 0) / ((totalBurn || 0) + (calFood || 0))) * 100
              } //ใส่สูตรคิดตรงนี้เลข ช่างหัว stateมัน แบบอันล่าง
              text={Math.floor(bmr + (totalBurn || 0) - (calFood || 0))}
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
            {console.log(
              ((totalBurn || 0) / ((totalBurn || 0) + (calFood || 0))) * 100
            )}
          </div>
          <span className="flex flex-col justify-center items-center space-y-5  text-black font-bold text-2xl pt-5">
            Your total daily calories
          </span>
        </div>

        <div className="flex flex-col justify-center items-center space-y-5  text-black font-bold text-2xl">
          <i className="fa-solid fa-fire"></i>
          <span className="flex">{totalBurn || 0}</span>
          <span className="flex">BURN</span>
        </div>
      </div>

      <span className="flex justify-center items-center  text-black font-bold text-xl mb-5">
        Plese select your activity
      </span>
      <div className="flex flex-row justify-center">
        <button
          onClick={() => {
            setPercent(backupBmr * 1.2);
            setBmr(backupBmr * 1.2);
          }}
          type="button"
          class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          No activity
        </button>

        <button
          onClick={() => {
            setPercent(backupBmr * 1.375);
            setBmr(backupBmr * 1.375);
          }}
          type="button"
          className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Some activity
        </button>

        <button
          onClick={() => {
            setPercent(backupBmr * 1.7);
            setBmr(backupBmr * 1.7);
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

      <div className=" bg-slate-100 w-auto h-auto shadow-2xl m-5 rounded-2xl p-5 flex-col">
        <span className="pt-4 text-black font-bold text-xl pl-10">
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
              className=" flex text-white border-2 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg  px-5 py-2.5 text-xl text-center mr-2 mb-2"
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
              className=" flex text-white border-2  bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg  px-5 py-2.5 text-xl text-center mr-2 mb-2"
              onClick={() => deleteFoodItem(el.id, "lunch")}
            >
              delete
            </button>
          </div>
        ))}

        <span className=" text-black font-bold  text-xl pl-10 ">
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
              className="  flex text-white border-2  bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg  px-5 py-2.5 text-xl text-center mr-2 mb-2"
              onClick={() => deleteFoodItem(el.id, "dinner")}
            >
              delete
            </button>
          </div>
        ))}
      </div>

      <span className="text-xl text-left font-bold pl-5">workout</span>
      <div className="bg-slate-100 w-auto h-auto shadow-2xl m-5 rounded-2xl p-5">
        <Link
          className=" text-black font-bold text-xl ml-5 "
          to={"/excercises"}
        >
          <i className="fa-solid fa-plus"></i>
        </Link>
        {console.log(allWorkout, "alllllll workkkkkkkkk")}
        {allWorkout?.map((el) => (
          <div className="flex justify-around h-20 bg-gradient-to-r from-purple-500 to-pink-500 p-3 drop-shadow-xl rounded-lg mx-5 my-3 ">
            <div className="flex gap-3 content-center	">
              <span className="pt-4 text-white font-bold	">
                Name:
                <span>{el.Workout.name}</span>
                {/* <span>{el.profile?.UserWorkout.Workout.name}</span> */}
              </span>
            </div>
            <div className=" flex gap-3	 content-center	">
              <span className="pt-4 text-white font-bold	text-xl">
                Calories:
                <span>{el.Workout.calories}</span>
                {/* <span>{el.profile?.UserWorkout.Workout.calories}</span> */}
              </span>
            </div>
            <div className=" flex gap-3	 content-center	">
              <span className="pt-4 text-white font-bold	text-xl">
                Time:
                <span>{el.Workout.time}</span>
              </span>
            </div>

            <button
              className="  flex text-white border-2 border-black bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg  px-5 py-2.5 text-xl text-center mr-2 mb-2"
              onClick={() => deleteWorkoutItem(el.id)}
            >
              delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
