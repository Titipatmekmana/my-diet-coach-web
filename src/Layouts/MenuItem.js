import { Link } from "react-router-dom";

export default function MenuItem({ children, active, to }) {
  return (
    <div className="flex flex-row items-center justify-center">
      <Link
        className={`space-y-8 md:flex md:space-x-6 md:space-y-0 ${
          active ? "text-violet-200" : "hover:text-indigo-200"
        }`}
        to={to}
      >
        {children}
      </Link>
    </div>
  );
}
