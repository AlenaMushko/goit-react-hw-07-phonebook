import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.phoneBook.contacts;
export const selectIsLoading = state => state.phoneBook.isLoading;
export const selectError = state => state.phoneBook.error;
export const selectFilter = state => state.phoneBook.filter;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filterValue) =>
    contacts.filter(contact => contact.name.toLowerCase().includes(filterValue))
);
