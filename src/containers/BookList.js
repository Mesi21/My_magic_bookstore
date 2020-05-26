import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';

const handleRemove = id => {
  const { removeBook, title, category } = this.props;
  console.log(title);
  removeBook({ id, title, category });
};

const BookList = ({ books }) => (
  <table>
    <thead>
      <tr>
        <th> ID </th>
        <th> Title </th>
        <th> Category </th>
      </tr>
    </thead>
    <tbody>
      {books.map(({ id, title, category }) => (
        <Book key={id} id={id} title={title} category={category} clickHandler={handleRemove} />
      ))}
    </tbody>
  </table>
);

const mapStateToProps = state => {
  const { books } = state;
  return { books };
};

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default connect(mapStateToProps, null)(BookList);
