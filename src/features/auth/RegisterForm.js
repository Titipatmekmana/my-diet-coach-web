import { useState } from "react";
import * as Joi from "joi";
import Input from "../../components/Input";
// import { object, string } from "joi";

const initialInput = {
  firstName: "",
  lastName: "",
  emailOrMobile: "",
  password: "",
  confirmPassword: "",
  role: "user",
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
    setError(error);
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
          name="firstName"
          value={input.firstName}
          onChange={handleChangeInput}
          error={error.firstName}
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
          name="lastName"
          value={input.lastName}
          onChange={handleChangeInput}
          error={error.lastName}
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
      <label class="form-control">
        <input
          type="radio"
          name="role"
          value="user"
          onChange={handleChangeInput}
        />
        User
      </label>
      <label class="form-control">
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
