import React from 'react';
import { PropTypes } from 'prop-types';
import { useStore } from '../TodoList/store';

import { StyledComponent } from './styledComponent';


const Filter = ({ options }) => {
  const store = useStore();

  const handleFilter = (tag) => {
    if (tag === 'all') store.setFilter(null);
    else store.setFilter(tag);
  };

  return (
    <StyledComponent>
      <select onChange={(e) => handleFilter(e.target.value)}>
        <option value="all">All</option>
        {!!options.length && options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </StyledComponent>
  );
};

Filter.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Filter;
