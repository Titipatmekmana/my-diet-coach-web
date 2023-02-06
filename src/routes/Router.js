import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RedirectIfAuthenticate from "../features/auth/RedirectIfAuthenticate";
import ExcercisesPage from "../pages/ExcercisesPage";
import LoginPage from "../pages/LoginPage";
import MainPage from "../pages/MainPage";
import RegisterPage from "../pages/RegisterPage";
import UserProfilePage from "../pages/UserProfilePage";
import FoodPage from "../pages/FoodPage";
import FoodDetailPage from "../pages/FoodDetailPage";
import DaliySatsPage from "../pages/DaliySatsPage";
import ProtectedRoute from "../features/auth/ProtectedRoute";
import AuthLayout from "../Layouts/AuthLayout";

const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <RedirectIfAuthenticate>
        <LoginPage />,
      </RedirectIfAuthenticate>
    ),
  },
  {
    element: (
      <ProtectedRoute>
        <AuthLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        element: <MainPage />,
        path: "/",
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
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
