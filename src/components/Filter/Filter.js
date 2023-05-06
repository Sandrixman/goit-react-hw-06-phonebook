import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { findContact } from 'redux/phonebookSlice/slice';
import { nanoid } from 'nanoid';
import { FilterWrapper } from './Filter.styled';

const id = nanoid();

const Filter = () => {
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
    dispatch(findContact(e.currentTarget.value));
  };

  return (
    <FilterWrapper>
      <label htmlFor={id}>Find contacts by name</label>
      <input id={id} type="text" onChange={changeFilter} value={filter} />
    </FilterWrapper>
  );
};

export default Filter;
