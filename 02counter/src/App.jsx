import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(10)

  let addValue = (e) =>{
    if(counter > 19) {
      e.preventDefault();  //this will stop at 20 it will not go more than 20
    } else{
      setCounter(counter+1);
    }
  }

  let removeValue = (e) =>{
    if(counter < 1) {
      e.preventDefault();  //this will stop at 0 it will not go in negative
    } else{
      setCounter(counter-1);
    }
    
  }
  // function addValue() {
  //   setCounter(counter+1);
  // }
  return (
    <>
    <h1>Chai Or React</h1>
    <h1>Counter:{counter}</h1>

    <button onClick={addValue}>Add Value {counter}</button>
    <br/>
    <button onClick={removeValue}>Emove Value </button>
    <p>footer: {counter}</p>
    </>
  )
}

export default App
