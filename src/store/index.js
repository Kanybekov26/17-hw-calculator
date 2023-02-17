import { combineReducers, createStore } from "redux";
import { authReduser } from "./auth/authReduser";
import { CalculatorReduser } from "./calculator/calculatorReduser";

const rootReducer = combineReducers({
  calculator: CalculatorReduser,
  auth:authReduser,

})
export const store = createStore(rootReducer);

store.subscribe(() => {
    console.log(store.getState());
})
