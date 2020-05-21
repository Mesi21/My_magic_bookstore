import React, { Component } from 'react';

const category = [
  { id: 1, name: 'Action' },
  { id: 2, name: 'Biography' },
  { id: 3, name: 'History' },
  { id: 4, name: 'Horror' },
  { id: 5, name: 'Kids' },
  { id: 6, name: 'Learning' },
  { id: 7, name: 'Sci-fi' },
];

class BooksForm extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="title">
            The Title of the Book
            <input
              type="text"
              placeholder="enter the title of the book"
              name="title"
              id="title"
            />
          </label>
          <label htmlFor="select">
            <select>
              {category.map(c => (
                <option key={c.id}>{c.name}</option>
              ))}
            </select>
          </label>
          <button type="submit" value="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default BooksForm;
