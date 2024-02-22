import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
  checkedCategoryState: [],
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = categoriesSlice.actions;

export default categoriesSlice.reducer;
