import "./App.css";
import ErrorMessage from "./Components/ErrorMessage";
import FoodItems from "./Components/FoodItems";

function App() {
  let foodItems = [];
  // let foodItems = ["sabji", "Roti", "Salad", "Milk", "Veggies", "Ghee"];

  // if (foodItem.length === 0) {    it will hide all ui not good practise bcz we want to show header then error
  //   return <h3>I am still hungry</h3>;
  // }
  return (
    <div>
      <div>Healthy Food</div>
      <ErrorMessage items={foodItems}></ErrorMessage>
      <FoodItems items={foodItems}></FoodItems>
    </div>
  );
}

export default App;
