import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../actions';
import idGen from '../helpers/helper';
import '../style/index.css';


const category = [
  { id: 0, name: '' },
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
      title: '',
      category: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (ev) => {
    ev.preventDefault();
    const { value, name } = ev.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    const { title, category } = this.state;
    const id = idGen();
    const { createBook } = this.props;
    createBook({ id, title, category });

    this.setState({
      title: '',
    });
    ev.target.reset();
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">
            Add a New Book
            <input
              type="text"
              placeholder="enter the title of the book"
              value={title}
              name="title"
              id="title"
              onChange={this.handleChange}
              required
            />
          </label>
          <label htmlFor="select">
            <select name="category" onChange={this.handleChange}>
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

const mapDispatchToProps = (dispatch) => ({
  createBook: (book) => dispatch(createBook(book)),
});

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};


export default connect(null, mapDispatchToProps)(BooksForm);
