import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    name: "",
    category: "",
    amount: 0,
  },
];

const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    addItem: () => {},
    removeItem: () => {},
  },
});

export const { addItem, removeItem } = expenseSlice.actions;

export default expenseSlice.caseReducers;
