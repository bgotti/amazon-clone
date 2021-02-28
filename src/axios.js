import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://us-central1-clone-afceb.cloudfunctions.net/api'
  //'http://localhost:5001/clone-afceb/us-central1/api'
});

export default instance;
