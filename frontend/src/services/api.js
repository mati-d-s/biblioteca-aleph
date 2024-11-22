import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000', // Cambia según la URL de tu backend
});

export default api;
