import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

import { Discuss } from 'react-loader-spinner';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { FilterContacts } from './Filter';
import { Container, ContactsTitle, Title, Error } from './App.styled';

export const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      {isLoading && <Discuss />}
      {error && <Error>Sorry, something went wrong. Try again</Error>}
      {contacts.length > 0 && <ContactsTitle>Contacts</ContactsTitle>}
      <FilterContacts />
      {contacts.length > 0 && <ContactList />}
    </Container>
  );
};
