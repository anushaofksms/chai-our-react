import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
import { TodoItemsContext } from "../Store/todo-item-store";

function TodoItems() {
  const { toDoItems } = useContext(TodoItemsContext);
  return (
    <>
      <div className={styles["items-container"]}>
        {toDoItems.map((item) => (
          <TodoItem
            key={item.name}
            todoName={item.name}
            todoDate={item.dueDate}
          />
        ))}
      </div>
    </>
  );
}

export default TodoItems;
