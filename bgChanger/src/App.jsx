import { useState } from "react"


function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="width-100"
    style={{backgroundColor: color}}
    >
    hiiiii

    </div>
  )
}

export default App