import axios from 'axios';

export const api = axios.create({
    baseURL: "http://api.openweathermap.org",
    headers: { 'Content-Type': 'application/json' }
  });