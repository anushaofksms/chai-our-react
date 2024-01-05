import { createContext } from "react";
import { useReducer } from "react";
export const TodoItemsContext = createContext({
  toDoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

const todoItemsReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currTodoItems,
      { name: action.payload.itemName, dueDate: action.payload.itemDueDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currTodoItems.filter(
      (item) => item.name !== action.payload.itemName
    );
  }
  return newTodoItems;
};

const TodoItemsContextProvider = ({ children }) => {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const addNewItem = (itemName, itemdate) => {
    const newActionItem = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemdate,
      },
    };
    dispatchToDoItems(newActionItem);
  };

  const deleteItem = (toDoitemName) => {
    const deleteActionItem = {
      type: "DELETE_ITEM",
      payload: {
        itemName: toDoitemName,
      },
    };
    dispatchToDoItems(deleteActionItem);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemsContextProvider;
