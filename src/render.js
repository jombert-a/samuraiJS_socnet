import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export let rerenderTree = (state, addMessage) => {
    ReactDOM.render(
        <React.StrictMode>
            <App data={state} func={addMessage} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

