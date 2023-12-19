import AddTodo from "./Components/AddTodo";
import Appname from "./Components/Appname";
import TodoItem1 from "./Components/TodoItem1";
import TodoItem2 from "./Components/TodoItem2";
import "./App.css";

function App() {
  return (
    <center class="todo-container">
      <Appname />
      <AddTodo />
      <div class="items-container">
        <TodoItem1 />
        <TodoItem2 />
      </div>
      <todo />
    </center>
  );
}

export default App;
