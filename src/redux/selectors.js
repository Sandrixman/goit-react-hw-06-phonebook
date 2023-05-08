export const getFilter = state => state.phonebook.filter;
export const getContacts = state => state.phonebook.contacts;

export const getFilteredOutContacts = state =>
  state.phonebook.contacts.filter(contact =>
    contact.name.toLowerCase().includes(state.phonebook.filter.toLowerCase())
  );
