import { createSlice } from "@reduxjs/toolkit";

type Color = {
  color: string;
};

const initialState: Color = {
  color: "blue",
};

const colorPicker = createSlice({
  name: "color",
  initialState,
  reducers: {
    changeColor: (state, action) => {
      state.color = action.payload;
    },
  },
});

export const { changeColor } = colorPicker.actions;

export default colorPicker.reducer;
