/*
* author: mamingyang@baofeng.com
* date: 2019/2/25
*/

import axios from 'axios';

axios.defaults.baseURL = '';

const request = axios.create({ xsrfCookieName: 'xsrf-token' });

request.interceptors.request.use(config => config, error => Promise.reject(error));

request.interceptors.response.use(res => res.data, error => Promise.reject(error));

export default request;
