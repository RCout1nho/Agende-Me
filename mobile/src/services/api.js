import axios from 'axios';

const your_ip = "http://192.168.0.10";

const api = axios.create({
  baseURL: `${your_ip}:3333`
});

export default api;