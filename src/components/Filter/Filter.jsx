import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { FilterInput, FilterContainer } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/contactsSlice';

export const FilterContacts = () => {
  const filterId = nanoid();
  const dispatch = useDispatch();

  const [FilterValue, setFilterValue] = useState('');
  const changeFilter = e => {
    setFilterValue(e.currentTarget.value);
    dispatch(filterContacts(e.currentTarget.value.toLowerCase()));
  };

  return (
    <FilterContainer>
      <label htmlFor={filterId}>
        Find contacts by name
        <FilterInput
          id={filterId}
          type="text"
          name="filter"
          value={FilterValue}
          onChange={changeFilter}
        />
      </label>
    </FilterContainer>
  );
};
