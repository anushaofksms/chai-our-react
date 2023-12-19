import styles from "./Display.module.css";

const Dispay = ({ displayValue }) => {
  return (
    <input
      className={styles["display"]}
      type="text"
      value={displayValue}
      readOnly
    />
  );
};

export default Dispay;
