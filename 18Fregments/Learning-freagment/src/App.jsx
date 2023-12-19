import "./App.css";
import ErrorMessage from "./Components/ErrorMessage";
import FoodItems from "./Components/FoodItems";
import Container from "./Components/Container";
import FoodInput from "./Components/FoodInput";
import { useState } from "react";

function App() {
  // let foodItems = [];
  // let foodItems = ["Sabji", "Roti", "Salad", "Milk", "Veggies", "Ghee"];

  let [foodItems, setFoodItems] = useState(["Sabji", "Roti", "Salad", "Milk"]);

  // if (foodItem.length === 0) {    it will hide all ui not good practise bcz we want to show header then error
  //   return <h3>I am still hungry</h3>;
  // }
  // let textStateArr = useState("Food enter buy user");
  // let textToSHow = textStateArr[0];
  // let setTextState = textStateArr[1];
  // console.log(`current value of tesSate:${textToSHow}`);

  let [textToSHow, setTextState] = useState("Food enter buy user");
  // This is for when we hit enter keyboard we can use event.key
  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
      // console.log(event.target.value);
    }
    // console.log(event);
    setTextState(event.target.value);
  };
  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodInput handleKeyDown={onKeyDown} />
        <p>{textToSHow}</p>
        <FoodItems items={foodItems}></FoodItems>
      </Container>

      <Container>
        <p>Above is the Healthy food which is good for your health</p>
      </Container>
    </>
  );
}

export default App;
