import React from 'react';
import { useDispatch } from 'react-redux';
import { addFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const changeFilter = e => {
    let value = e.currentTarget.value;
    dispatch(addFilter(value));
  };

  return (
    <div>
      <h3>Find contacts by name</h3>
      <input onChange={changeFilter}></input>
    </div>
  );
};
