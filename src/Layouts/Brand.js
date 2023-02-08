import { Link } from "react-router-dom";
import { FitnessLogo } from "../icons/FitnessLogo";

export default function Brand() {
  return (
    <div className="py-2">
      <Link className="">
        <FitnessLogo />
      </Link>
    </div>
  );
}
