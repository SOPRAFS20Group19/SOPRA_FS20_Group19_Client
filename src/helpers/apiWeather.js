import axios from 'axios';

export const apiWeather = axios.create({
    baseURL: "http://api.openweathermap.org",
    headers: { 'Content-Type': 'application/json' }
  });