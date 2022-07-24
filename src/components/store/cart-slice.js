import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  items: [],
  totalAmount: 0,
  changed: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    replaceCart(state, action) {
      state.totalAmount = action.payload.totalAmount;
      state.items = action.payload.items;
    },

    addToCart(state, action) {
      const updatedItems = [...state.items];
      const existedItemIndex = updatedItems.findIndex(
        (item) => item.title === action.payload.title
      );

      const existedItem = updatedItems[existedItemIndex];

      if (existedItem) {
        const updatedItem = {
          ...existedItem,
          quantity: existedItem.quantity + 1,
          total: existedItem.price * (existedItem.quantity + 1),
        };

        updatedItems[existedItemIndex] = updatedItem;
      }

      if (!existedItem) {
        updatedItems.push({
          title: action.payload.title,
          price: action.payload.price,

          quantity: 1,
          total: action.payload.price * 1,
        });
      }

      state.items = updatedItems;
      state.totalAmount++;
      state.changed = true;
    },

    increase(state, action) {
      const updatedItems = [...state.items];
      const existedItemIndex = updatedItems.findIndex(
        (item) => item.title === action.payload.title
      );

      const existedItem = updatedItems[existedItemIndex];

      const updatedItem = {
        ...existedItem,
        quantity: existedItem.quantity + 1,
        total: existedItem.price * (existedItem.quantity + 1),
      };
      updatedItems[existedItemIndex] = updatedItem;
      state.items = updatedItems;
      state.totalAmount++;
      state.changed = true;
    },

    decrease(state, action) {
      const updatedItems = [...state.items];
      const existedItemIndex = updatedItems.findIndex(
        (item) => item.title === action.payload.title
      );

      const existedItem = updatedItems[existedItemIndex];

      if (existedItem.quantity === 1) {
        updatedItems.splice([existedItemIndex], 1);
        state.totalAmount--;
        state.items = updatedItems;

        return;
      }

      const updatedItem = {
        ...existedItem,
        quantity: existedItem.quantity - 1,
        total: existedItem.price * (existedItem.quantity - 1),
      };
      updatedItems[existedItemIndex] = updatedItem;
      state.items = updatedItems;
      state.totalAmount--;
      state.changed = true;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
