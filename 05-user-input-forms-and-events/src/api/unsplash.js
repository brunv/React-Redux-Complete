import axios from 'axios';

/**
 * This method will create an instance of the axios client with a couple
 * defaulted properties.
 */
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 0f9fa1f89e79e9b3ec5667e9484daf24ecb2204a8359856dd76cc80deee4cdaf'
    }
});