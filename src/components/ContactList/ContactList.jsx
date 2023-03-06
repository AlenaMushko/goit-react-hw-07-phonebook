import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter} from 'redux/selectors';
import {  selectFilteredContacts } from 'redux/selectors';
import { ContactEl } from 'components/ContactEl';
import { List, Item } from './ContactList.styled';
import { deleteContact } from 'redux/operations';
import { useState } from 'react';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

// const [filter, setFilter] = useState('');
//   const visibleContacts = () => {
//     const normolizeFilter = filter.toLowerCase();
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normolizeFilter)
//     );
//   };
//   const changeFilter = e => {
//     setFilter(e.currentTarget.value);
//   };

  return (
    <List>
          {contacts.map(({ id, name, phone }) => (
      //  {visibleContacts.map(({ id, name, phone }) => ( 
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
