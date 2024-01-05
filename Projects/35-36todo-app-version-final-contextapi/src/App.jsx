import AddTodo from "./Components/AddTodo";
import Appname from "./Components/Appname";
import "./App.css";
import TodoItems from "./Components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./Components/WelcomeMessage";
import { TodoItemsContext } from "./Store/todo-item-store";

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

  const addNewItem = (itemName, itemdate) => {
    setToDOItem((currValue) => [
      ...currValue,
      { name: itemName, dueDate: itemdate },
    ]);
  };

  const deleteItem = (toDoitemName) => {
    const newToDOItems = toDoItems.filter((item) => item.name !== toDoitemName);
    setToDOItem(newToDOItems);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        toDoItems,
        addNewItem,
        deleteItem,
      }}
    >
      <center className="todo-container">
        <Appname />
        <AddTodo />
        <WelcomeMessage />
        <TodoItems />
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
