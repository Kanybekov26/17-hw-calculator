export const CalculatorActionypes = {
    ADD: "ADD",
    SUBTRACT: "SUBTRACT",
    DIVIDE: "DIVIDE",
    MULTIPLY: "MULTIPLY",
  };
  
  const initialState = {
    result: 0,
  };
  
  export const CalculatorReduser = (state = initialState, action) => {
    switch (action.type) {
      case CalculatorActionypes.ADD:
        return {
          ...state,
          result: state.result + action.payload,
        };
      case CalculatorActionypes.SUBTRACT:
        return {
          ...state,
          result: state.result - action.payload,
        };
      case CalculatorActionypes.DIVIDE:
        return {
          ...state,
          result: state.result / action.payload,
        };
      case CalculatorActionypes.MULTIPLY:
        return {
          ...state,
          result: state.result * action.payload,
        };
        default:return state
    }
  };
  