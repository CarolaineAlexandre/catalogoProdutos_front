import axios from "axios";

export const api = axios.create({
    baseURL:'https://api-catalogo-pi.onrender.com'
})

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token"); // Substitua pelo seu token real  
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }  
    return config;
});
