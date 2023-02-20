import { createSlice } from "@reduxjs/toolkit";

export const CalculatorActionypes = {
  ADD: "ADD",
  SUBTRACT: "SUBTRACT",
  DIVIDE: "DIVIDE",
  MULTIPLY: "MULTIPLY",
};

const initialState = {
  result: 0,
};

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    add(state, action) {
      state.result = state.result + action.payload;
    },
    SUBTRACT(state, action) {
      state.result = state.result - action.payload;
    },
    DIVIDE(state, action) {
      state.result = state.result / action.payload;
    },
    MULTIPLY(state, action) {
      state.result = state.result * action.payload;
    },
  },
});

export const calculatorAction = calculatorSlice.actions;

// export const CalculatorReduser = (state = initialState, action) => {
//   switch (action.type) {
//     case CalculatorActionypes.ADD:
//       return {
//         ...state,
//         result: state.result + action.payload,
//       };
//     case CalculatorActionypes.SUBTRACT:
//       return {
//         ...state,
//         result: state.result - action.payload,
//       };
//     case CalculatorActionypes.DIVIDE:
//       return {
//         ...state,
//         result: state.result / action.payload,
//       };
//     case CalculatorActionypes.MULTIPLY:
//       return {
//         ...state,
//         result: state.result * action.payload,
//       };
//       default:return state
//   }
// };
