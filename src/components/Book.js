import React from 'react';
import PropTypes from 'prop-types';

class Book extends React.Component {
  render() {
    const { id, title, category } = this.props;
    return (
      <tr>
        <td>{id}</td>
        <td>{title}</td>
        <td>{category}</td>
      </tr>
    );
  }
}

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
