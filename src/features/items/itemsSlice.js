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
    addItem: (state, action) => {
      state.value.push(action.payload);
    },
    deleteItem: (state, action) => {
      const newState = state.value.filter((val) => val.id !== action.payload);
      state.value = newState;
    },
    editItem: (state, action) => {
      const index = state.value.findIndex(
        (val) => val.id === action.payload.id
      );
      const newState = [...state.value];
      newState[index] = action.payload;
      return {
        ...state,
        value: newState,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setItems, addItem, editItem, deleteItem } = itemsSlice.actions;
export const menuItemsList = (state) => state.menuItems.value;

export default itemsSlice.reducer;
