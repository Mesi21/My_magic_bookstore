import React from "react";
import PropTypes from 'prop-types';

const Book = (props) => {
  <tr>
    <td>{props.id}</td>
    <td>{props.title}</td>
    <td>{props.category}</td>
  </tr>
}

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
