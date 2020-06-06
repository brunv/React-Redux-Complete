import axios from 'axios';

const KEY = 'AIzaSyBiltPrK7OHSZqjV_cTgUEfb8XMqVHp1yU';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});