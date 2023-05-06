import { configureStore } from '@reduxjs/toolkit';
import { phonebookSlice } from './phonebookSlice/slice';
import { loginSlice } from './loginSlice/slice';

export const store = configureStore({
  reducer: {
    phonebook: phonebookSlice.reducer,
    login: loginSlice.reducer,
  },
});
