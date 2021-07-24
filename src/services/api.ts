import axios from 'axios';

const api = axios.create({
  baseURL: 'https://github.com/dgleyramos1/demo/blob/master/db.json'
})

export default api;