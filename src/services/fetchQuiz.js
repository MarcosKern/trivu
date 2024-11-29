import axios from 'axios';

const PROTOCOL = 'https'
const MYSQLHOST = 'trivuapi.onrender.com';

const fetch = axios.create({
  baseURL: `${PROTOCOL}://${MYSQLHOST}`,
  timeout: 10000,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

const getQuiz = async (method, endpoint, body) => fetch
  .request({ method, url: endpoint, data: body })
    .then(({ status, data }) => ({ status, data }));

export default getQuiz;