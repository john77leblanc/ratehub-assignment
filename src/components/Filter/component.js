import React from 'react';

const Filter = ({ options }) => {
  return (
    <select>
      <option value="all">All</option>
      {!!options.length && options.map(option => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  );
};

export default Filter;
