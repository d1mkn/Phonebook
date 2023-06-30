import React from 'react';
import { useDispatch } from 'react-redux';
import { Form } from 'react-bootstrap';
import { addFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const changeFilter = e => {
    let value = e.currentTarget.value;
    dispatch(addFilter(value));
  };

  return (
    <Form>
      <Form.Group className="mb-3">
        <h2>Find contacts by name</h2>
        <Form.Label />
        <Form.Control as={'input'} onChange={changeFilter}></Form.Control>
      </Form.Group>
    </Form>
  );
};
