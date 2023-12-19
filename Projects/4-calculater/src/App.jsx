import "./App.css";
import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";
import Dispay from "./components/Display";

function App() {
  return (
    <div className={styles["calculater"]}>
      <Dispay />
      <ButtonsContainer />
    </div>
  );
}

export default App;
