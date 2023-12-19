import React from "react";
import styles from "./ButtonsContainer.module.css";

function ButtonsContainer({ onButtonClick }) {
  const buttonsName = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles["buttons-container"]}>
      {buttonsName.map((btn) => (
        <button
          key={btn}
          className={styles["buttons"]}
          onClick={() => onButtonClick(btn)}
        >
          {btn}
        </button>
      ))}
    </div>
  );
}

export default ButtonsContainer;
