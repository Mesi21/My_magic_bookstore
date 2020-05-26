import React from 'react';
import PropTypes from 'prop-types';

const Book = (
  {
    id, title, category, clickHandler,
  },
) => (
  <tr>
    <td>{id}</td>
    <td>{title}</td>
    <td>{category}</td>
    <td><button type="button" onClick={() => clickHandler(id)}>Remove book</button></td>
  </tr>
);

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Book;
