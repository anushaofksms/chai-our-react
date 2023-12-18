import AddTodo from "./Components/AddTodo";
import Appname from "./Components/Appname";
import "./App.css";
import TodoItems from "./Components/TodoItems";

function App() {
  const toDoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/2023",
    },
    {
      name: "Go to college",
      dueDate: "4/10/2023",
    },
    {
      name: "Line This",
      dueDate: "4/11/2023",
    },
  ];
  return (
    <center className="todo-container">
      <Appname />
      <AddTodo />
      <TodoItems todoItems={toDoItems} />
    </center>
  );
}

export default App;
