import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const data = {
  postsData: [
    { id: 1, message: 'hello world!' },
    { id: 2, message: 'hello world!!' },
    { id: 3, message: 'hello world!!!' },
    { id: 4, message: 'hello world!!!!' },
  ],
  dialogsData: [
    { name: 'Me', id: 1 },
    { name: 'Mother', id: 2 },
    { name: 'Father', id: 3 },
    { name: 'Brother', id: 4 },
  ],
  messagesData: [
    { id: 1, text: 'test' },
    { id: 2, text: 'testing' },
    { id: 3, text: 'tests' }
  ]
}
ReactDOM.render(
  <React.StrictMode>
    <App data={data}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
