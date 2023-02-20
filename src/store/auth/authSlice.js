import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  isAuthorized: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.email = action.payload;
      state.isAuthorized = true;
    },
    logout(state) {
      return initialState;
    },
  },
});

export const authAction = authSlice.actions;
// export const authReduser = (state = initialState,action) => {
//    switch(action.type) {
//    case authActionTypes.LOG_IN:
//   return {
//     ...state,
//     email: action.payload,
//     isAuthorized: true,
//   }
//   case authActionTypes.LOG_OUT:
//     return initialState
//    default:
//      return state
//    }
// }
