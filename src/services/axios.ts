import { API_URL } from '@/config';
import axios from 'axios';
export const axiosInterceptor = () => {
  axios.defaults.baseURL = API_URL;
  axios.defaults.headers.common.Authorization = 'AUTH TOKEN';
  axios.defaults.headers.post['Content-Type'] = 'application/json';
  axios.interceptors.request.use((request) => {
    console.log(request);
    return request;
  });

  axios.interceptors.response.use();
};
