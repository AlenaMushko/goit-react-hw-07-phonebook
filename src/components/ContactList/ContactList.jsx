import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { ContactEl } from 'components/ContactEl';
import { List, Item } from './ContactList.styled';
import { removeContact } from 'redux/contactsSlice';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const visibleContacts = () => {
    const normolizeFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normolizeFilter));
  };

  const visibleContactsOnPage = visibleContacts();

  return (
    <List>
      {visibleContactsOnPage.map(({ id, name, number }) => (
        <Item key={id}>
          <ContactEl
            name={name}
            number={number}
            onDelete={() => dispatch(removeContact(id))}
          />
        </Item>
      ))}
    </List>
  );
};
