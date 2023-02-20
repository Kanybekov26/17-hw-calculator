import { useDispatch, useSelector } from "react-redux";
import { calculatorAction} from "../store/calculator/calculatorSlice";
import classes from "./Counter.module.css";

const Calculator = () => {
  const result = useSelector((state) => state.calculator.result);
  const dispatch = useDispatch();

  console.log(result);
  const addHandler = () => {
    dispatch(calculatorAction.add(5));
  };
  const subtractHandler = () => {
    dispatch(calculatorAction.SUBTRACT(10));
  };
  const divideHandler = () => {
    dispatch(calculatorAction.DIVIDE(4));
  };
  const multiplyHandler = () => {
    dispatch(calculatorAction.MULTIPLY(2));
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Calculator</h1>
      <div className={classes.value}>Result: {result}</div>
      <button onClick={addHandler}>+5</button>
      <button onClick={subtractHandler}>-10</button>
      <button onClick={multiplyHandler}>*2</button>
      <button onClick={divideHandler}>/4</button>
    </main>
  );
};

export default Calculator;
