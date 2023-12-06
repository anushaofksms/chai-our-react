import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0);
  let myObj={
    username:"Anusha",
    org:"hcl"
  }
  let arr=[1,2,3]
  return (
    <>
      <h1 className="bg-green-400 p-4 text-3xl font-bold underline mb-4">
      Hello world!
    </h1>
    <Card username='Chai Or Code' btnText="Click Me"/>
    <Card username="Anusha" btnText="Visit Me"/>
    <Card/>
    </>
  )
}

export default App
