import axios from 'axios';

// Create axios instance with default config
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'https://banking-app-backend-tdou.vercel.app',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;