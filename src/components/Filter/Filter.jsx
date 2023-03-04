import React from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { FilterInput, FilterContainer } from './Filter.styled';
import { changeFilter } from 'redux/contactsSlice';

export const FilterContacts = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filterId = nanoid();

  const changePageFilter = e => {
    dispatch(changeFilter(e.currentTarget.value));
  };
  return (
    <FilterContainer>
      <label htmlFor={filterId}>
        Find contacts by name
        <FilterInput
          id={filterId}
          type="text"
          name="filter"
          value={filter}
          onChange={changePageFilter}
        />
      </label>
    </FilterContainer>
  );
};
