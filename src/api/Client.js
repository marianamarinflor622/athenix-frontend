import axios from 'axios';

// Base URL for backend API
const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:3000/api';
const apiClient = axios.create({ baseURL: API_BASE });

// Admin login
export const adminLogin = async (username, password) => {
  const response = await apiClient.post('/admins/login', { username, password });
  localStorage.setItem('token', response.data.token);
  return response.data;
};

// Fetch resources (Projects / Labs)
export const fetchResources = async (page = 1, filter = null) => {
  const params = { page, ...(filter && { type: filter }) };
  const response = await apiClient.get('/resources', { params });
  return response.data;
};

// Upload a new resource (Web or Lab)
export const uploadResource = async (formData) => {
  const token = localStorage.getItem('token');
  return apiClient.post('/resources', formData, {
    headers: { Authorization: `Bearer ${token}` }
  });
};

// Comments
export const fetchComments = async (resourceId) => {
  const response = await apiClient.get('/comments', { params: { resourceId } });
  return response.data;
};
export const postComment = async (resourceId, text) => {
  return apiClient.post('/comments', { resourceId, text });
};

// Contact form via Formspree
export const sendContact = (formValues) => {
  return axios.post('https://formspree.io/f/tuFormId', formValues);
};

export default apiClient;