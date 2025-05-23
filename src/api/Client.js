import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:8080/api';

const apiClient = axios.create({
  baseURL: API_BASE,
});


apiClient.interceptors.request.use(config => {
  const storedAuth = localStorage.getItem('basicAuth');
  if (storedAuth) {
    config.headers.Authorization = storedAuth;
  }
  return config;
});

export default apiClient;
