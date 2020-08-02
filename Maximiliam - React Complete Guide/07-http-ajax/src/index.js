import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

// The idea behind interceptors is that you cand edit the request
// config. You can add header, auth and stuff like that.
axios.interceptors.request.use(request => {
    console.log(request);
    // You must return the request otherwise you're blocking it:
    return request;
}, error => {
    console.log(error);
    // We reject the error (promise) here so we can still handle
    // them in the catch block locally in a component:
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    console.log(response);
    return response;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
