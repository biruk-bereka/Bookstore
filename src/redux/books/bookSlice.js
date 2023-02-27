import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducer: {
    addBook: (state, { payload }) => {
      const newBook = payload;
      return {
        ...state,
        books: newBook,
      };
    },
    removeBook: (state, { payload }) => {
      const bookId = payload;
      return {
        ...state,
        books: state.books.filter((book) => book.id !== bookId),
      };
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
