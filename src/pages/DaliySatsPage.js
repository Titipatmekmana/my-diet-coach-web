export default function DaliySatsPage() {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const d = new Date("2021-03-25");
  let day = days[d.getDay()];

  return (
    <div>
      <div className="flex flex-row flex-auto justify-around p-10 ">
        <div className="flex flex-col  text-2xl font-bold p-5">
          <span className="flex">{day}</span>
          <span className="flex text-center ">{new Date().getDate()}</span>
        </div>
      </div>
    </div>
  );
}
