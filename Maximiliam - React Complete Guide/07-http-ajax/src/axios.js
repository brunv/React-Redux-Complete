import axios from 'axios';

/* AXIOS INTANCES:
    Being able to use instances can give you the flexibility you need in
    your application. It allows you to controle in detail in which part
    of yout app you want to use which default settings.    
*/

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN INSTANCE';

export default instance;