import axios from 'axios';

const your_ip = "http://192.168.0.10";
const port = 3333;

const api = axios.create({
  baseURL: `${your_ip}:${port}`
});

export default api;