// import { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import Menu from "./Menu";

export default function Header() {
  // const { navbar, setNavbar } = useState(false);
  return (
    <nav className="w-full bg-purple-500 shadow">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="javascript:void(0)">
              <h2 className="text-2xl font-bold text-white">
                <Link className="home" to="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                </Link>
              </h2>
            </a>
          </div>
        </div>
        <Menu />
      </div>
      <div className="flex-1">
        <Dropdown />
      </div>
    </nav>
  );
}

// <div className="md:hidden">
// <button
//   className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
//   onClick={() => setNavbar(!navbar)}
// >
//   {navbar ? (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       className="w-6 h-6 text-white"
//       viewBox="0 0 20 20"
//       fill="currentColor"
//     >
//       <path
//         fillRule="evenodd"
//         d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
//         clipRule="evenodd"
//       />
//     </svg>
//   ) : (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       className="w-6 h-6 text-white"
//       fill="none"
//       viewBox="0 0 24 24"
//       stroke="currentColor"
//       strokeWidth={2}
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         d="M4 6h16M4 12h16M4 18h16"
//       />
//     </svg>
//   )}
// </button>
// </div>
