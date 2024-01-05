import styles from "./WelcomeMessage.module.css";
import React from "react";
import { TodoItemsContext } from "../Store/todo-item-store";
import { useContext } from "react";

function WelcomeMessage() {
  const { toDoItems } = useContext(TodoItemsContext);
  return (
    toDoItems.length === 0 && <p className={styles.welcome}>Enjoy Your Day</p>
  );
}

export default WelcomeMessage;
