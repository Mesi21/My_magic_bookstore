import React from 'react';
import PropTypes from 'prop-types';
import { filterOpt } from '../utils/Options';
import '../style/index.css';

const CategoryFilter = ({ handleFilterChange }) => {
  const handleChange = ({ currentTarget }) => {
    handleFilterChange(currentTarget.value);
  };

  return (
    <div className="filter">
      <p id="filt_id">
        Filter by:
        <select className="filterSelect" onChange={handleChange}>
          {filterOpt.map((c) => (
            <option key={c.id} value={c.name}>
              {c.name}
            </option>
          ))}
        </select>
      </p>
    </div>
  );
};

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
