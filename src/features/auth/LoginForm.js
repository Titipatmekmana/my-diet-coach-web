import { useState } from "react";
// import RegisterContainer from "./RegisterContainer";
// import Modal from "../../components/Modal";
// import RegisterForm from "./RegisterForm";

export default function LoginFrom() {
  const [open, setOpen] = useState(false);
  return (
    <form className="mt-6">
      <div className="mb-2">
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-gray-800"
        >
          Email
        </label>
        <input
          type="email"
          className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
        />
      </div>

      <div className="mb-2">
        <label
          htmlFor="password"
          className="block text-sm font-semibold text-gray-800"
        >
          Password
        </label>
        <input
          type="password"
          className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
        />
        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-blue focus:outline-none focus:bg-purple-600">
          Login
        </button>
      </div>
    </form>
  );
}
