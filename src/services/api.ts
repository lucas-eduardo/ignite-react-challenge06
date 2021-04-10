import axios from 'axios';

export const unsplash = axios.create({
  baseURL: 'https://api.unsplash.com',
  params: {
    client_id: process.env.UNSPLASH_API_KEY
  }
});

export const api = axios.create({
  baseURL: '/api'
});