/* eslint-disable prettier/prettier */
import http from './http';

export function getProducts () {
    return http.get('/products')
};