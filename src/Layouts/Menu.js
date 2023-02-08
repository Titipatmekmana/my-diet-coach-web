import { useLocation } from "react-router-dom";
import MenuItem from "./MenuItem";

const menuList = [
  {
    icon: <i className="fa-solid fa-dumbbell" />,
    pathname: "/",
  },
  {
    icon: <i className="fa-solid fa-utensils" />,
    pathname: "/food",
  },
  {
    icon: <i className="fa-solid fa-person-walking" />,
    pathname: "/excercises",
  },
];

export default function Menu() {
  const location = useLocation();
  console.log(location);
  return (
    <div className="flex-col">
      <div className={"flex-col	 pb-3 mt-8 md:block md:pb-0 md:mt-0 block"}>
        {menuList.map((el) => (
          <MenuItem
            key={el.pathname}
            to={el.pathname}
            active={location.pathname === el.pathname}
          >
            {el.icon}
          </MenuItem>
        ))}
      </div>
    </div>
  );
}
