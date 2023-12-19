import "./App.css";
import ErrorMessage from "./Components/ErrorMessage";
import FoodItems from "./Components/FoodItems";
import Container from "./Components/Container";
import FoodInput from "./Components/FoodInput";
function App() {
  // let foodItems = [];
  let foodItems = ["Sabji", "Roti", "Salad", "Milk", "Veggies", "Ghee"];

  // if (foodItem.length === 0) {    it will hide all ui not good practise bcz we want to show header then error
  //   return <h3>I am still hungry</h3>;
  // }
  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodInput />
        <FoodItems items={foodItems}></FoodItems>
      </Container>

      <Container>
        <p>Above is the Healthy food which is good for your health</p>
      </Container>
    </>
  );
}

export default App;
