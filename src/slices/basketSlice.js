import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
// import { selectItems } from "@/slices/basketSlice";
import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "@/slices/basketSlice";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket", // Name of the slice
  initialState,
  reducers: {
    // Actions
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {},
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;

export default basketSlice.reducer;
