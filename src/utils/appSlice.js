import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    products: {},
    buttonCount: 0,
  },
  reducers: {
    addProducts: (state, action) => {
      state.products = action.payload;
    },
    addButtonCount: (state) => {
      state.buttonCount = state.buttonCount + 1;
    },
    reduceButtonCount: (state) => {
      state.buttonCount = state.buttonCount - 1;
    },
  },
});

export const { addProducts, addButtonCount, reduceButtonCount } =
  appSlice.actions;

export default appSlice.reducer;
