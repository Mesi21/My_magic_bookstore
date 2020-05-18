import React from 'react';
import '../style/App.css';
import BookList from '../containers/BookList';
import BooksForm from '../containers/BooksForm';

function App() {
  return (
    <div className="App">
      <BookList />
      <BooksForm />
    </div>
  );
}

export default App;
