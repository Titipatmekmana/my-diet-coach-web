import { useState } from "react";
import * as Joi from "joi";
// import { object, string } from "joi";

const initialInput = {
  firstName: "",
  lastName: "",
  emailOrMobile: "",
  password: "",
  confirmPassword: "",
};

const reqisterSchema = Joi.object({
  firstName: Joi.string().trim().required(),
  lastName: Joi.string().trim().required(),

  emailOrMobile: Joi.alternatives().try(
    Joi.string().email({ tlds: false }),
    Joi.string().pattern(/^[0-9]{10}$/)
  ),
  password: Joi.string().alphanum().min(6).required().trim(),
  confirmPassword: Joi.string().valid(Joi.ref("password")).required().trim(),
});

const validateRegister = (input) => {
  return reqisterSchema.validate(input, {
    abortEarly: false,
  });
};

export default function RegisterForm() {
  const [input, setInput] = useState(initialInput);
  const [error, setError] = useState(initialInput);

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const { value, error } = validateRegister(input);
    console.log(value);
    console.dir(error.details, "error");
    setError(error);
  };

  return (
    <form className="mt-6 m-5" onSubmit={handleSubmitForm}>
      <h1 className="text-3xl font-semibold text-center text-purple-700 ">
        Sing Up
      </h1>
      <div className="mb-2">
        <label
          for="fname"
          className="block text-sm font-semibold text-gray-800"
        >
          First name
        </label>

        <input
          type="text"
          placeholder="First name"
          name="firstName"
          value={input.firstName}
          onChange={handleChangeInput}
          className="block  w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400  focus:outline-none focus:ring focus:ring-opacity-40"
        />
        {error.firstName && (
          <div className=" invalid:border-green-500">{"error"}</div>
        )}
      </div>

      <div className="mb-2">
        <label
          for="lname"
          className="block text-sm font-semibold text-gray-800"
        >
          last name
        </label>
        <input
          type="text"
          placeholder="Last name"
          name="lastName"
          value={input.lastName}
          onChange={handleChangeInput}
          className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
        />
      </div>

      <div className="mb-2">
        <label
          for="Email or Mobile"
          className="block text-sm font-semibold text-gray-800"
        >
          Email or Mobile
        </label>
        <input
          type="text"
          placeholder="email"
          name="emailOrMobile"
          value={input.emailOrMobile}
          onChange={handleChangeInput}
          className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
        />
      </div>

      <div className="mb-2">
        <label
          for="password"
          className="block text-sm font-semibold text-gray-800"
        >
          New Password
        </label>
        <input
          type="password"
          placeholder="password"
          name="password"
          value={input.password}
          onChange={handleChangeInput}
          className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
        />
      </div>

      <div className="mb-2">
        <label
          for="password"
          className="block text-sm font-semibold text-gray-800"
        >
          Confirm Password
        </label>
        <input
          type="password"
          placeholder="confirmPassword"
          name="confirmPassword"
          value={input.confirmPassword}
          onChange={handleChangeInput}
          className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
        />
      </div>

      <div className="mt-6">
        <button
          type="submit"
          className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
        >
          Sign in
        </button>
      </div>
    </form>
  );
}
