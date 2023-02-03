import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
// import * as Progress from "react-native-progress";

export default function MainPage() {
  const value = 50;
  return (
    <div>
      <img></img>
      <div className="flex justify-between">
        <div className="mx-auto w-[200px] h-[200px]">
          <CircularProgressbar
            value={value}
            text={`${value}`}
            styles={buildStyles({
              backgroundColor: "#f66",
            })}
          />
          ;
        </div>
      </div>
    </div>
  );
}
