import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  items: [],
  totalAmount: 0,
  isShowCart: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    showCart(state) {
      state.isShowCart = !state.isShowCart;
    },

    addToCart(state, action) {
      const updatedItems = [...state.items];
      const existedItemIndex = updatedItems.findIndex(
        (item) => item.key === action.payload.key
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
    },

    increase(state, action) {
      const updatedItems = [...state.items];
      const existedItemIndex = updatedItems.findIndex(
        (item) => item.key === action.payload.key
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
    },

    decrease(state, action) {
      const updatedItems = [...state.items];
      const existedItemIndex = updatedItems.findIndex(
        (item) => item.key === action.payload.key
      );

      const existedItem = updatedItems[existedItemIndex];

      if (existedItem.quantity === 1) {
        updatedItems.splice([existedItemIndex], 1);
        state.totalAmount--;
        state.items = updatedItems;
        console.log(updatedItems);
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
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
