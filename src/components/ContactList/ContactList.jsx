import { useSelector } from 'react-redux';
import { selectContacts} from 'redux/selectors';
import { ContactEl } from 'components/ContactEl';
import { List, Item } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);

  return (
    <List>
      {contacts.map(contact => (
        <Item key={contact.id}>
          <ContactEl contact={contact} />
        </Item>
      ))}
    </List>
  );
};
