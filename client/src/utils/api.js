import axios from 'axios';

const api = axios.create({
  baseURL: '/api', // با توجه به تنظیمات Vite proxy
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;