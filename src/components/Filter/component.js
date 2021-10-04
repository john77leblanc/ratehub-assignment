import React from 'react';
import { useStore } from '../TodoList/store';

const Filter = ({ options }) => {
  const store = useStore();

  const handleFilter = (tag) => {
    if (tag === "all") store.setFilter(null);
    else store.setFilter(tag);
  };

  return (
    <select onChange={(e) => handleFilter(e.target.value)}>
      <option value="all">All</option>
      {!!options.length && options.map(option => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  );
};

export default Filter;
