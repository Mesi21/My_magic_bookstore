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
          { category.map(c => (<option>{c}</option>))}
          <button type="submit" value="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default BooksForm;
