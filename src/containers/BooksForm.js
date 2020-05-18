import React from 'react';

const category = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-fi',
];
class BooksForm extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="title">
            The Title of the Book
            <input
              type="text"
              placeholder="enter the title"
              name="title"
              id="title"
            />
          </label>
          { category.map(cat => (<option>{cat}</option>))}
        </form>
      </div>
    );
  }
}

export default BooksForm;
