import { configureStore, createSlice } from '@reduxjs/toolkit';

const LS_KEY = 'phonebook';

const myValueSlice = createSlice({
  name: 'myValue',
  initialState: JSON.parse(localStorage.getItem(LS_KEY)) ?? [],
  reducers: {
    addContact(state, action) {
      state.push(action.payload);
      localStorage.setItem(LS_KEY, JSON.stringify(state));
    },
    findContact(state, action) {
      const normalizedFilter = action.payload.toLowerCase();
      const filterState = [...state];
      return filterState.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    },
    delContact(state, action) {
      const newState = state.filter(contact => contact.id !== action.payload);
      localStorage.setItem(LS_KEY, JSON.stringify(newState));
      return newState;
    },
  },
});

export const { addContact, findContact, delContact } = myValueSlice.actions;

export const store = configureStore({
  reducer: { myValue: myValueSlice.reducer },
});
