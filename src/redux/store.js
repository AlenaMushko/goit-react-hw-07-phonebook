import { configureStore } from '@reduxjs/toolkit';
import { persisteContactsReducer } from './contactsSlice';

export const store = configureStore({
  reducer: {
    phoneBook: persisteContactsReducer,
  },
});

