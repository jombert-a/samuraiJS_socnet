import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';

ReactDOM.render(
  <App store={store} />,
  document.getElementById('root')
);

// rerenderTree(store.getState());

// store.subscribe(() => {
//   rerenderTree(store.getState());
// });

reportWebVitals();
