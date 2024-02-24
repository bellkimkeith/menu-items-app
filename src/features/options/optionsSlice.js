import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const optionsSlice = createSlice({
  name: "options",
  initialState,
  reducers: {
    setOptions: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setOptions } = optionsSlice.actions;
export const optionsList = (state) => state.options.value;

export default optionsSlice.reducer;
