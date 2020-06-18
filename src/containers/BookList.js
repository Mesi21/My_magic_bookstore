import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { removeBook, changeFilter } from '../actions';
import { catFilt } from '../utils/Options';
import CategoryFilter from '../components/CategoryFilter';
import '../style/index.css';

const getBooksToDisplay = (state, books, filter) => {
  switch (filter) {
    case catFilt[0].all:
      return books;
    default:
      return books.filter(book => book.category === filter);
  }
};

const mapStateToProps = state => ({ books: getBooksToDisplay(state, state.books, state.filter) });

const mapDispatchToProps = dispatch => ({
  handleRemove: book => dispatch(removeBook(book)),
  handleFilterChange: filter => dispatch(changeFilter(filter)),
});

const BookList = ({ books, handleRemove, handleFilterChange }) => (
  <div className="book-list">
    <CategoryFilter handleFilterChange={(filter) => handleFilterChange(filter)} />
    <div className="books-rendered">
      {books.map(({ id, title, category }) => (
        <Book
          key={id}
          id={id}
          title={title}
          category={category}
          clickHandler={() => handleRemove({ id, title, category })}
        />
      ))}
    </div>
  </div>
);

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }),
  ).isRequired,
  handleRemove: PropTypes.func.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
