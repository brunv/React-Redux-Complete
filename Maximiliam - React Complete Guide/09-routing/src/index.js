import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

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

/* REMOVING INTERCEPTORS:
    You learned how to add an interceptor, getting rid of one is also easy.
    Simply store the reference to the interceptor in a variable and call
    eject  with that reference as an argument, to remove it (more info: 
    https://github.com/axios/axios#interceptors):

    var myInterceptor = axios.interceptors.request.use(function () {...});
    axios.interceptors.request.eject(myInterceptor);
*/

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
