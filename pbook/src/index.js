import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import axios from 'axios'

// const promise = axios.get('http://localhost:3001/persons')
// console.log('toimiiko promise', promise)

// promise.then(response => {
//     console.log(response)
// })

 ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
