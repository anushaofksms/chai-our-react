import styles from "./FoodInput.module.css";

const FoodInput = () => {
  const handleOnchangeEvent = (event) => {
    console.log(event.target.value);
  };
  return (
    <input
      type="text"
      className={styles.foodInput}
      placeholder="Enter Food Item Here"
      onChange={handleOnchangeEvent}
    />
  );
};

export default FoodInput;
