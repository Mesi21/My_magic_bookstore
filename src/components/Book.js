import React from 'react';
import PropTypes from 'prop-types';
import '../style/Book.css';

const Book = (
  {
    id, title, category, clickHandler,
  },
) => (
  <div className="panel">
    <div className="col col-md-10">
      <span id="id">{id}</span>
      <span id="categ">{category}</span>
      <span id="title">{title}</span>
      <span id="author">Author&apos;s Name</span>
    </div>
    <div className="col col-md-2">
      <button className="btn btn-info" type="button" onClick={() => clickHandler(id)}>
        Remove book
      </button>
    </div>
  </div>
);

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Book;
