import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const itemsSlice = createSlice({
  name: "menuItems",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setItems } = itemsSlice.actions;
export const menuItemsList = (state) => state.menuItems.value;

export default itemsSlice.reducer;
