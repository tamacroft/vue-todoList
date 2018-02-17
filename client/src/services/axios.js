import Axios from 'axios';

export default Axios.create({
  baseURL: 'http://192.168.100.28:8081',
  timeout: 3000,
});
