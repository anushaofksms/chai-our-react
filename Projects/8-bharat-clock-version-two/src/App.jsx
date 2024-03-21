import "./App.css";
import CloackHeading from "./Components/ClockHeading";
import CloackSlogan from "./Components/ClockSlogan";
import CurrentTime from "./Components/CurrentTime";

function App() {
  return (
    <div>
      <CloackHeading />
      <CloackSlogan />
      <CurrentTime />
    </div>
  );
}

export default App;
