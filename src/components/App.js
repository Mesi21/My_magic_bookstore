import React from 'react';
import '../style/App.css';
import BookList from '../containers/BookList';
import BooksForm from '../containers/BooksForm';

function App() {
  return (
    <div className="main">
      <div className="nav">
        <h1 className="Bookstore-CMS">Bookstore CMS</h1>
        <h4 className="menu">Books</h4>
        <h4 className="menu">Categories</h4>
      </div>
      <div className="container">
        <BookList />
        <BooksForm />
      </div>
    </div>
  );
}

export default App;
