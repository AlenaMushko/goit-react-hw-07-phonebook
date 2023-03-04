import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { FilterContacts } from './Filter';
import { Container, ContactsTitle, Title } from './App.styled';

export const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      {contacts.length > 0 && <ContactsTitle>Contacts</ContactsTitle>}
      {contacts.length > 0 && <FilterContacts />}
      {contacts.length > 0 && <ContactList />}
    </Container>
  );
};
