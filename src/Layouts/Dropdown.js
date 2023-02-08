import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function DropDown() {
  const [isOpen, setOpen] = useState(false);
  const dropdownEl = useRef();
  const { logout } = useAuth();

  const handleDropDown = () => {
    setOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!dropdownEl.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const {
    authenticatedUser: { role, id },
  } = useAuth();

  return (
    <div className=" dropdown" ref={dropdownEl}>
      <button
        className="text-black hover:text-white border border-purple-200 hover:bg-purple-600 focus:ring-4 focus:outline-none focus:ring-transparent font-medium rounded-full text-sm px-4 py-2.5 text-center inline-flex items-center"
        onClick={handleDropDown}
      >
        <i className="fa-solid fa-desktop"></i>
      </button>

      <div
        id="dropdown"
        className={`absolute right-1 top-[65px] z-10 w-40 bg-white divide-gray-100 rounded divide-y  shadow ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className=" z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow ">
          <li>
            <Link to="#" className="block py-2 px-4 hover:bg-gray-100">
              ......
            </Link>
          </li>
          <li>
            <button
              onClick={logout}
              className=" text-red-500 block py-2 px-4 hover:bg-gray-100 pr-[90px]"
            >
              Log out
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
