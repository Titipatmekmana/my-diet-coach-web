export default function TodoContent(props) {
  console.log(props);
  return (
    <div className="flex justify-between">
      <div>
        <span>{props.foodCal.name}</span>
        <span>{props.foodCal.calories}</span>
      </div>

      <div
        className="inline-flex justify-end rounded-md shadow-sm"
        role="group"
      >
        <button className=" bg-red-600">
          <i className="fa-solid fa-repeat"></i>
        </button>
        <button className=" bg-red-600">
          <i className="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </div>
  );
}
