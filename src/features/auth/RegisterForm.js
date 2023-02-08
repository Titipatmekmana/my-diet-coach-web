import { useState } from "react";
import { toast } from "react-toastify";

import * as Joi from "joi";
import Input from "../../components/Input";
import * as authApi from "../../apis/auth-api";

const initialInput = {
  user_firstname: "",
  user_lastname: "",
  emailOrMobile: "",
  password: "",
  confirmPassword: "",
  role: "user",
};

const reqisterSchema = Joi.object({
  user_firstname: Joi.string().trim().required(),
  user_lastname: Joi.string().trim().required(),

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

export default function RegisterForm({ doClose }) {
  const [input, setInput] = useState(initialInput);
  const [error, setError] = useState(initialInput);

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      const result = validateRegister(input);
      if (!result) {
        setError(result);
      } else {
        setError({});
        await authApi.register(input);
        setInput(initialInput);
        toast.success("success register. please log in to continue.");
        doClose();
      }
    } catch (err) {
      // add
      toast.error(err.response?.data.message);
    }
  };

  return (
    <form className="mt-6 m-5" onSubmit={handleSubmitForm}>
      <h1 className="text-3xl font-semibold text-center text-purple-700 ">
        Sing Up
      </h1>

      <div className="mb-2">
        <label
          htmlFor="fname"
          className="block text-sm font-semibold text-gray-800"
        >
          First name
        </label>
        <Input
          placeholder="First name"
          name="user_firstname"
          value={input.user_firstname}
          onChange={handleChangeInput}
          error={error.user_firstname}
        />
      </div>

      <div className="mb-2">
        <label
          htmlFor="lname"
          className="block text-sm font-semibold text-gray-800"
        >
          last name
        </label>
        <Input
          placeholder="Last name"
          name="user_lastname"
          value={input.user_lastname}
          onChange={handleChangeInput}
          error={error.user_lastname}
        />
      </div>
      <div className="mb-2">
        <label
          htmlFor="Email or Mobile"
          className="block text-sm font-semibold text-gray-800"
        >
          Email or Mobile
        </label>
        <Input
          placeholder=" Email or Mobile"
          name="emailOrMobile"
          value={input.emailOrMobile}
          onChange={handleChangeInput}
          error={error.emailOrMobile}
        />
      </div>
      <div className="mb-2">
        <label
          htmlFor="password"
          className="block text-sm font-semibold text-gray-800"
        >
          New Password
        </label>
        <Input
          type={"password"}
          placeholder="  New Password"
          name="password"
          value={input.password}
          onChange={handleChangeInput}
          error={error.password}
        />
      </div>
      <div className="mb-2">
        <label
          htmlFor="password"
          className="block text-sm font-semibold text-gray-800"
        >
          Confirm Password
        </label>
        <Input
          type={"password"}
          placeholder="  Confirm Password"
          name="confirmPassword"
          value={input.confirmPassword}
          onChange={handleChangeInput}
          error={error.confirmPassword}
        />
      </div>
      <label className="form-control">
        <input
          type="radio"
          name="role"
          value="user"
          onChange={handleChangeInput}
        />
        User
      </label>
      <label className="form-control">
        <input
          type="radio"
          name="role"
          value="admin"
          onChange={handleChangeInput}
        />
        Admin
      </label>
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
