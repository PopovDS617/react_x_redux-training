import { createSlice } from "@reduxjs/toolkit";

const initialitemsState = {
  list: [
    {
      title: "test1",
      price: 6,
      description: " this is a first product in our new line of products",
    },
    {
      title: "test2",
      price: 8,
      description: " this is a second product in our new line of products",
    },
  ],
};

const itemsSlice = createSlice({
  name: "items",
  initialState: initialitemsState,
  reducers: {},
});

export const itemsActions = itemsSlice.actions;

export default itemsSlice.reducer;
