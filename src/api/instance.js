import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://q8javax.outsystemscloud.com/Ta2leefCMS/rest/Taleef',
});

export default axiosInstance;
