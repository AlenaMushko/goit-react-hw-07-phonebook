import { useDispatch, useSelector } from 'react-redux';
// import { selectContacts, selectFilter} from 'redux/selectors';
import {  selectFilteredContacts } from 'redux/selectors';
import { ContactEl } from 'components/ContactEl';
import { List, Item } from './ContactList.styled';
import { deleteContact } from 'redux/operations';

export const ContactList = () => {
  // const contacts = useSelector(selectContacts);
  // const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const visibleContactsOnPage = useSelector(selectFilteredContacts);
  // const visibleContacts = () => {
  //   const normolizeFilter = filter.toLowerCase();
  //   return contacts.filter(contact => contact.name.toLowerCase().includes(normolizeFilter));
  // };

  // const visibleContactsOnPage = visibleContacts();

  return (
    <List>
      {visibleContactsOnPage.map(({ id, name, phone }) => (
        <Item key={id}>
          <ContactEl
            name={name}
            phone={phone}
            onDelete={() => dispatch(deleteContact(id))}
          />
        </Item>
      ))}
    </List>
  );
};
