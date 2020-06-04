import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import mainReducer from './reducers';
import idGen from './helpers/helper';
import { catFilt } from './utils/Options';


const stateInit = {
  books: [{ id: idGen(), title: 'The Da Vinci Code', category: 'Action' },
    { id: idGen(), title: 'Shogun', category: 'History' },
    { id: idGen(), title: 'The Way of the Peaceful Warrior', category: 'Biography' },
    { id: idGen(), title: 'The A.B.C. Murders ', category: 'Action' }],
  filter: catFilt.all,
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
