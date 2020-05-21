import { combineReducers } from 'redux';
import books from './books';

const mainReducer = combineReducers(
  { books },
);

export default mainReducer;
