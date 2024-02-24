import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
  checkedCategoryState: [],
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCategories } = categoriesSlice.actions;
export const categoriesList = (state) => state.categories.value;

export default categoriesSlice.reducer;
