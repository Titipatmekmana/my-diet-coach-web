import { useLocation } from "react-router-dom";
import MenuItem from "./MenuItem";

const menuList = [
  {
    icon: <span>Main Page</span>,
    pathname: "/",
  },
  {
    icon: <span>Daliy</span>,
    pathname: "/daliySats",
  },
  {
    icon: <span>Profile User</span>,
    pathname: "/userProfile",
  },
];

export default function Menu() {
  const location = useLocation();
  return (
    <div className={"pb-3 mt-8 md:block md:pb-0 md:mt-0 flex"}>
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
  );
}
