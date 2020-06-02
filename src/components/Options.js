import React from 'react';
import PropTypes from 'prop-types';
import { filterOpt } from './CategoryFilter';

const Option = ({ handleFilterChange }) => {
  const handleChange = ({ currentTarget }) => {
    handleFilterChange(currentTarget.value);
  };

  return (
    <select onChange={handleChange}>
      {filterOpt.map((c) => (
        <option key={c.id} value={c.name}>
          {c.name}
        </option>
      ))}
    </select>
  );
};

Option.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default Option;
