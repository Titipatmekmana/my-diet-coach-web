import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ExcercisesPage from "../pages/ExcercisesPage";
import LoginPage from "../pages/LoginPage";
import MainPage from "../pages/MainPage";
import RegisterPage from "../pages/RegisterPage";
import UserProfilePage from "../pages/UserProfilePage";
import FoodPage from "../pages/FoodPage";
import FoodDetailPage from "../pages/FoodDetailPage";
import DaliySatsPage from "../pages/DaliySatsPage";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/userProfile",
    element: <UserProfilePage />,
  },
  {
    path: "/food",
    element: <FoodPage />,
  },
  {
    path: "/foodDetail",
    element: <FoodDetailPage />,
  },
  {
    path: "/daliySats",
    element: <DaliySatsPage />,
  },
  {
    path: "/excercises",
    element: <ExcercisesPage />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
