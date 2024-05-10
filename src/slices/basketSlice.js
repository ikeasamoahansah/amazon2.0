import { createSlice } from "@reduxjs/toolkit";
// import formattedTotal from "../pages/checkout";
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
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(basketItem, id === action.payload.id);
      let newBasket = [...state.items];
      if (index >= 0) {
        // The item exists in the basket ... remove it (splice)
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove Product(id: ${action.payload.id}) as its not in the basket`
        );
      }
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;

// set price total with reduce
export const selectTotal = (state) =>
  state.basket.items.reduce((formattedTotal, item) => formattedTotal + item.price, 0);

export default basketSlice.reducer;
