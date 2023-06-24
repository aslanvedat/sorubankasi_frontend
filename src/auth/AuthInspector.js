import axios from "axios";

console.log('test');
axios.interceptors.request.use((config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
        config.headers.Authorization = 'Bearer ' + token;
    }
    return config;
});


