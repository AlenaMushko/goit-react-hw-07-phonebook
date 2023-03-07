import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';
import { ContactEl } from 'components/ContactEl';
import { List, Item } from './ContactList.styled';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <List>
      {filteredContacts.map(contact => (
        <Item key={contact.id}>
          <ContactEl contact={contact} />
        </Item>
      ))}
    </List>
  );
};
