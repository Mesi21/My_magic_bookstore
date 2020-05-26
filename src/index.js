import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import mainReducer from './reducers';

const idGen = () => Math.floor(Math.random() * 100);

const stateInit = {
  books: [{ id: idGen(), title: 'The Da Vinci Code', category: 'Action' },
    { id: idGen(), title: 'Shogun', category: 'History' },
    { id: idGen(), title: 'The Way of the Peaceful Warrior', category: 'Biography' },
    { id: idGen(), title: 'The A.B.C. Murders ', category: 'Action' }],
};

/* eslint-disable no-underscore-dangle */
const store = createStore(mainReducer, stateInit,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
/* eslint-enable */

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
