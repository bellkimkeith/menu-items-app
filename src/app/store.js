import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "../features/categories/categoriesSlice";
import itemsReducer from "../features/items/itemsSlice";
import optionsReducer from "../features/options/optionsSlice";

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    menuItems: itemsReducer,
    options: optionsReducer,
  },
});
