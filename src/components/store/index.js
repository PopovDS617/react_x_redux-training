import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart-slice";
import itemsReducer from "./items-slice";

const store = configureStore({
  reducer: { cart: cartReducer, items: itemsReducer },
});

export default store;
