/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {Navigation} from '../navigation/SideMenu/RootNavigation';

const axiosInstance = axios.create({
  baseURL: 'https://contact-backenf-api.onrender.com/api',
});

axiosInstance.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);
axiosInstance.interceptors.response.use(
  response => new Promise((resolve, reject) => resolve(response)),
  error => {
    console.log(error.response.data);
    if (!error.response) {
      return new Promise((resolve, reject) => reject(error));
    }
    if (error.response.status === 403) {
      Navigation('LOGOUT', {ExpiredToken: true});
    } else {
      return new Promise((resolve, reject) => reject(error));
    }
  },
);

export default axiosInstance;
