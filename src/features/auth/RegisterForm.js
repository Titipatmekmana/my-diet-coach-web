export default function RegisterForm() {
  return (
    <form className="mt-6 m-5">
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
          type="name"
          className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400  focus:outline-none focus:ring focus:ring-opacity-40"
        />
      </div>

      <div className="mb-2">
        <label
          for="lname"
          className="block text-sm font-semibold text-gray-800"
        >
          last name
        </label>
        <input
          type="name"
          className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
        />
      </div>

      <div className="mb-2">
        <label
          for="email"
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
          for="mobile"
          className="block text-sm font-semibold text-gray-800"
        >
          Enter Mobile No.
        </label>
        <input
          type="mobile"
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
