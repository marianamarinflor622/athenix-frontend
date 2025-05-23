// src/api/services.js
import apiClient from './client';
import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:8080/api';

export const adminLogin = async (username, password) => {
  const basicAuth = 'Basic ' + btoa(`${username}:${password}`);

  try {
    // Probar login con endpoint protegido
    await axios.get(`${API_BASE}/contents`, {
      headers: { Authorization: basicAuth }
    });

    // Guardar credenciales para futuras peticiones
    localStorage.setItem('basicAuth', basicAuth);
    return { success: true };
  } catch {
    throw new Error('Credenciales inválidas');
  }
};

export const fetchResources = async (page = 1, filter = null) => {
  const params = { page, ...(filter && { type: filter }) };
  const response = await apiClient.get('/resources', { params });
  return response.data;
};

export const uploadResource = async (formData) => {
  return apiClient.post('/resources/upload', formData);
};

export const fetchComments = async (resourceId) => {
  const response = await apiClient.get('/comments', {
    params: { resourceId }
  });
  return response.data;
};

export const postComment = async (resourceId, text) => {
  return apiClient.post('/comments', { resourceId, text });
};

export const sendContact = (formValues) => {
  return apiClient.post('/contact', formValues);
};
