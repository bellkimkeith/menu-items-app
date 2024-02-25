import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
  categoryFilter: [],
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.value = action.payload;
    },
    addCategoryFilter: (state, action) => {
      state.categoryFilter.push(action.payload);
    },
    removeCategoryFilter: (state, action) => {
      const newFilter = state.categoryFilter.filter(
        (cat) => cat !== action.payload
      );
      state.categoryFilter = newFilter;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCategories, addCategoryFilter, removeCategoryFilter } =
  categoriesSlice.actions;
export const categoriesList = (state) => state.categories.value;
export const filter = (state) => state.categories.categoryFilter;

export default categoriesSlice.reducer;
