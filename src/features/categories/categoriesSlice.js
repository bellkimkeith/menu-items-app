import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  checkedCategories: [],
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    addCategories: (state, action) => {
      console.log(action.payload);
    },
    deleteCategories: (state, action) => {
      console.log(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addCategories, deleteCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;
