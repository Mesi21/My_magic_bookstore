import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createBook } from '../actions';

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
    // id: 0,
      title: '',
      category: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (ev) => {
    ev.preventDefault();
    const { choice } = ev.target;
    this.setState({ [choice]: ev.target.value });
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    const { title, category } = this.state;
    createBook({ title, category });

    this.setState({
      title: '',
      category: '',
    });
    ev.target.reset();
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
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="select">
            <select onChange={this.handleChange}>
              {category.map(c => (
                <option key={c.id}>{c.name}</option>
              ))}
            </select>
          </label>
          <button type="submit" onChange={this.handleSubmit} value="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  createBook: (book) => dispatch(createBook(book)),
});

export default connect(null, mapDispatchToProps)(BooksForm);
