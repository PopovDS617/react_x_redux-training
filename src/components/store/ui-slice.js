import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { notification: null, isShowCart: false },
  reducers: {
    showCart(state) {
      state.isShowCart = !state.isShowCart;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
