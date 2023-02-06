import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <>
      <nav>Header</nav>
      <Outlet />
    </>
  );
}
