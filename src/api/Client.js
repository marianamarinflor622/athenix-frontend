// src/api/client.js
import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:8080/api';

const storedAuth = localStorage.getItem('basicAuth');

// En caso de no haber login manual, usa .env
const username = import.meta.env.VITE_AUTH_USER || 'admin';
const password = import.meta.env.VITE_AUTH_PASS || '123456';
const fallbackAuth = 'Basic ' + btoa(`${username}:${password}`);

const apiClient = axios.create({
  baseURL: API_BASE,
  headers: {
    Authorization: storedAuth || fallbackAuth
  }
});

export default apiClient;
