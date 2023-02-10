import TodoForm from "../components/TodoForm";

export default function FoodPage() {
  // const createTodo = (foodName) => {
  //   const newTodo = {
  //     name: InitialTodos.name,
  //     group: InitialTodos.group,
  //     calories: InitialTodos.calories,
  //     carbs: InitialTodos.carbs,
  //     fat: InitialTodos.fat,
  //     protein: InitialTodosprotein,
  //   };

  return (
    <>
      <div className="flex flex-col mt-5 items-center justify-center">
        <TodoForm />
      </div>
    </>
  );
}
