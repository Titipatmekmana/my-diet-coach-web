import LoginFrom from "../features/auth/LoginForm";
import RegisterContainer from "../features/auth/RegisterContainer";

export default function LoginPage() {
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-purple-700 ">
          Log in
          <p className="mt-8 text-xs font-light text-center text-gray-700">
            Let’s login to your account and start your calorie management
          </p>
        </h1>
        <LoginFrom />
        <hr />
        <RegisterContainer />
      </div>
    </div>
  );
}
