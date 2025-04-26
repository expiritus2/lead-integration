import axios from 'axios';

const providerApi = axios.create({
  baseURL: process.env.PROVIDER_BASE_URL || 'http://localhost:8000',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export default providerApi;
