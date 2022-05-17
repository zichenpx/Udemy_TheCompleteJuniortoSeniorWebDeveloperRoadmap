import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// https://reactjs.org/docs/code-splitting.html
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
