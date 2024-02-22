import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "../features/categories/categoriesSlice";
import itemsReducer from "../features/items/itemsSlice";

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    items: itemsReducer,
  },
});
