import React from 'react';
import PropTypes from 'prop-types';

export const Filter = ({ onChange }) => {
  const setFilterValue = e => {
    let value = e.currentTarget.value;
    onChange(value);
  };

  return (
    <div>
      <h3>Find contacts by name</h3>
      <input onChange={setFilterValue}></input>
    </div>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
