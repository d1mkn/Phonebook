import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Filter extends Component {
  setFilterValue = e => {
    let value = e.currentTarget.value;
    this.props.onChange(value);
  };

  render() {
    return (
      <div>
        <h3>Find contacts by name</h3>
        <input onChange={this.setFilterValue}></input>
      </div>
    );
  }
}

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
