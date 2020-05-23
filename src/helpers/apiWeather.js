import axios from 'axios';

export const apiWeather = axios.create({
    baseURL: "https://api.openweathermap.org",
    headers: {'Content-Type': 'application/json'}
});