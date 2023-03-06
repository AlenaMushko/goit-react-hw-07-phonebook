import React, { useState } from 'react';
import { nanoid } from 'nanoid';
// import PropTypes from 'prop-types';
import { FilterInput, FilterContainer } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';

export const FilterContacts = () => {
  const filterId = nanoid();
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const [filterValue, setFilterValue] = useState('');

  const changeFilter = e => {
    setFilterValue(e.currentTarget.value);
  };
  //     const changeFilter = e => {
  //   setFilter(e.currentTarget.value);
  // };
    console.log(filterValue);

  console.log(contacts);

  // const visibleContacts = () => {
  //   const normolizeFilter = filter.toLowerCase();
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normolizeFilter)
  //   );
  // };

  // };
  return (
    <FilterContainer>
      <label htmlFor={filterId}>
        Find contacts by name
        <FilterInput
          id={filterId}
          type="text"
          name="filter"
          // value={filterValue}
          // onChange={onChange}
        />
      </label>
    </FilterContainer>
  );
};

// FilterContacts.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
