import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-ad114.firebaseio.com/'
});

export default instance;