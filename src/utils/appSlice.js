import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    products: {},
    productsCount: [],
  },
  reducers: {
    addProducts: (state, action) => {
      state.products = action.payload;
    },
    addProductCount: (state, action) => {
      state.productsCount.push(action.payload);
    },
    reduceProductCount: (state, action) => {
      state.productsCount = state.productsCount.filter(
        (product) => product.id !== action.payload
      );
    },
  },
});

export const { addProducts, addProductCount, reduceProductCount } =
  appSlice.actions;

export default appSlice.reducer;
