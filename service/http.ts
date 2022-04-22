/* eslint-disable prettier/prettier */
import axios from 'react-native-axios';

var http = axios.create({
    baseURL: 'https://fakestoreapi.com',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'},
  });

export default http;