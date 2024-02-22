import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {},
};

export const itemsSlice = createSlice({
  name: "menuItems",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = itemsSlice.actions;

export default itemsSlice.reducer;
