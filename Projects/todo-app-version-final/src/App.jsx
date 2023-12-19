import AddTodo from "./Components/AddTodo";
import Appname from "./Components/Appname";
import "./App.css";
import TodoItems from "./Components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./Components/WelcomeMessage";

function App() {
  const initialToDoItems = [
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
  // const [toDoItems, setToDOItem] = useState([]);    if initialToDoItems is empty we are showing welcomemeesage
  const [toDoItems, setToDOItem] = useState(initialToDoItems);
  const handleNewItem = (itemName, itemdate) => {
    const newToDoItem = [...toDoItems, { name: itemName, dueDate: itemdate }];
    setToDOItem(newToDoItem);
  };

  const consthandleDeleteItem = (toDoitemName) => {
    const newToDOItems = toDoItems.filter((item) => item.name !== toDoitemName);
    setToDOItem(newToDOItems);
  };
  return (
    <center className="todo-container">
      <Appname />
      <AddTodo onNewItem={handleNewItem} />
      {toDoItems.length === 0 && <WelcomeMessage />}
      <TodoItems todoItems={toDoItems} onDeleteClick={consthandleDeleteItem} />
    </center>
  );
}

export default App;
