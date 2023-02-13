import TodoContent from "./TodoContent";

export default function TodoItem(props) {
  console.log(props);
  return (
    <li className="mt-5  px-6 py-2 border-b border-gray-200 w-full rounded-t-lg bg-white text-purple-700">
      <TodoContent foodCal={props.foodCal} />
    </li>
  );
}
