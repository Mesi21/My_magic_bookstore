import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { removeBook, changeFilter } from '../actions';
import catFilt from '../components/CategoryFilter';

const BookList = ({ books, handleRemove }) => (
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
        <Book
          key={id}
          id={id}
          title={title}
          category={category}
          clickHandler={() => handleRemove({ id, title, category })}
        />
      ))}
    </tbody>
  </table>
);

const handleFilterChange = (state, books, filter) => {
  switch (filter) {
    case catFilt.all:
      return books;
    default:
      return books.filter(book => book.category === filter);
  }
};

const mapStateToProps = state => {
  const { books } = state;
  return { books: handleFilterChange(state, books, state.filter) };
};

const mapDispatchToProps = dispatch => ({
  handleRemove: book => dispatch(removeBook(book)),
  handleFilterChange: filter => dispatch(changeFilter(filter)),
});

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }),
  ).isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
