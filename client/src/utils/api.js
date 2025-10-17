import axios from 'axios';

const api = axios.create({
  baseURL: '/api', // این مسیر باید با /api شروع شود
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;