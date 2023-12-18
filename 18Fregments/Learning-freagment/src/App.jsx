import "./App.css";

function App() {
  // return (
  //   <div>
  //     <ul class="list-group">
  //       <div>Healthy Food</div>
  //       <li class="list-group-item">Daal</li>
  //       <li class="list-group-item">Roti</li>
  //       <li class="list-group-item">Salad</li>
  //       <li class="list-group-item">Milk</li>
  //       <li class="list-group-item">Veggies</li>
  //     </ul>
  //   </div>
  // );

  let foodItem = [];
  // let foodItem = ["Daal", "Roti", "Salad", "Milk", "Veggies", "Ghee"];

  // if (foodItem.length === 0) {    it will hide all ui not good practise bcz we want to show header then error
  //   return <h3>I am still hungry</h3>;
  // }
  return (
    <div>
      <ul className="list-group">
        <div>Healthy Food</div>
        {foodItem.length === 0 ? <h3>I am still hungry</h3> : null}
        {foodItem.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
