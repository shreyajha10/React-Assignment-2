import { createSlice } from "@reduxjs/toolkit";
import Books from "./books";

const booksSlice = createSlice({
  name: "books",
  initialState: {
    bookList: Books,
  },
  reducers: {
    addBook: (state, action) => {
      state.bookList.push(action.payload);
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
