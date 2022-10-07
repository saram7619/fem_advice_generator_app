import axios from 'axios';
const BASE_URL = 'https://api.adviceslip.com';

export default axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});