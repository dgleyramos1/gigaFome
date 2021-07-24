import axios from 'axios';

const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/dgleyramos1/demo/produtos'
})

export default api;