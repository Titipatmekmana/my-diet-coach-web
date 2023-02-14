import { useState } from "react";
import { toast } from "react-toastify";
import validateProfileUser from "../validators/validate-profileuser";
import * as authApi from "../apis/auth-api";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const initialInputUserProfile = {
  weight: "",
  height: "",
  user_gender: "",
  user_bdate: "",
};

export default function UserForm({}) {
  const [input, setInput] = useState(initialInputUserProfile);
  const [error, setError] = useState({});

  const navigate = useNavigate();

  const { setAuthenticatedUser } = useAuth();

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      const result = validateProfileUser(input);
      if (result) {
        setError(result);
      } else {
        setError({});
        console.log(input);
        await authApi.userProfile(input);

        setInput(initialInputUserProfile);
        setAuthenticatedUser((prev) => {
          const clone = { ...prev, user_Bdate: input.user_bdate };
          return clone;
        });

        toast.success("Success");
        navigate("/");
      }
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data.message);
    } finally {
    }
  };
  return (
    <div>
      <h1 className="text-center text-2xl font-bold p-5">Profile User</h1>

      <form
        className="w-full p-10  mx-auto mt-8 bg-white rounded-md shadow-md lg:max-w-xl drop-shadow-2xl flex flex-col	"
        onSubmit={handleSubmitForm}
      >
        <div className="relative z-0 w-full mb-6 group text-black ">
          <input
            className=""
            type="text"
            placeholder="weight"
            name="weight"
            value={input.weight}
            onChange={handleChangeInput}
          />
        </div>

        <div className="relative z-0 w-full mb-6 group text-black ">
          <input
            className=""
            type="text"
            placeholder="height"
            name="height"
            value={input.height}
            onChange={handleChangeInput}
          />
        </div>

        <div className="flex items-center mb-4">
          <input
            type="radio"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            name="user_gender"
            value={"Male"}
            onChange={handleChangeInput}
          ></input>

          <label>Male</label>
        </div>
        <div className="flex items-center mb-4">
          <input
            type="radio"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            name="user_gender"
            value={"Female"}
            onChange={handleChangeInput}
          />
          <label>Female</label>
        </div>

        <div className="relative max-w-sm">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="date"
            className="bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Select date"
            name="user_bdate"
            onChange={handleChangeInput}
          />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-centerfrom-purple-400 to-blue-500 hover:from-purple-200 hover:to-purple-400 drop-shadow-lg mt-5 "
        >
          Submit
        </button>
      </form>
    </div>
  );
}
