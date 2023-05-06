import { createSlice } from '@reduxjs/toolkit';

export const phonebookSlice = createSlice({
  name: 'phonebookValue',
  initialState: [],
  reducers: {
    addContact(state, action) {
      state.push(action.payload);
    },
    findContact(state, action) {
      const normalizedFilter = action.payload.toLowerCase();
      return state.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    },
    delContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, findContact, delContact } = phonebookSlice.actions;
