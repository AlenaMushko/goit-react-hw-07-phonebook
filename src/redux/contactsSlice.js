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
    filter: '',
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,

    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts.push(action.payload);
    },
    [addContact.rejected]: handleRejected,

    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts = state.contacts.filter(
        item => item.id !== action.payload
      );
    },
    [deleteContact.rejected]: handleRejected,

    changeFilter: (state, action) => {
      state.filter = action.payload.toLowerCase();
    },
  },
});

    // changeFilter: (state, action) => {
    //   state.filter = action.payload.toLowerCase();
    // },


const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['filter'],
};

export const { changeFilter } = contactsSlice.actions;

export default contactsSlice.reducer;

export const persisteContactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
