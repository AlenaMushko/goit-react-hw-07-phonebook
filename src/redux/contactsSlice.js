import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { fetchContacts, addContact, deleteContact } from './operations';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const contactsSlice = createSlice({
  name: 'phoneBook',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
    initialContacts: [],
  },
  reducers: {
    filterContacts: (state, action) => {
      if (action.payload === '') {
        state.contacts = state.initialContacts;
      } else {
        state.contacts = state.initialContacts.filter(item =>
          item.name.toLowerCase().includes(action.payload.toLowerCase())
        );
      }
    },
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.contacts = action.payload;
      state.initialContacts = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,

    [addContact.pending]: handlePending,
    [addContact.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.contacts.push(action.payload);
    },
    [addContact.rejected]: handleRejected,

    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      const contactId = state.contacts.findIndex(
        item => item.id === action.payload.id
      );
      state.contacts.splice(contactId, 1);
    },
    [deleteContact.rejected]: handleRejected,
  },
});

const persistConfig = {
  key: 'root',
  storage,
};

export const { filterContacts } = contactsSlice.actions;

export default contactsSlice.reducer;

export const persisteContactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
