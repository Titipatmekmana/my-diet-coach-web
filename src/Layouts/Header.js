// import { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import Menu from "./Menu";

export default function Header() {
  // const { navbar, setNavbar } = useState(false);
  return (
    <nav className="h-14 bg-gradient-to-r from-violet-500 to-fuchsia-500 flex flex-row justify-between">
      <h2 className="text-2xl font-bold text-white">
        <Link className="home flex m-3" to="/">
          <i className="fa-solid fa-house"></i>
        </Link>
      </h2>
      <Dropdown />
    </nav>
  );
}
