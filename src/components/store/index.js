import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart-slice";
import itemsReducer from "./items-slice";
import uiReducer from "./ui-slice";

const store = configureStore({
  reducer: { cart: cartReducer, items: itemsReducer, ui: uiReducer },
});

export default store;
