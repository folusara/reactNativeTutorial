/* eslint-disable prettier/prettier */
import http from './http';

export function getProducts () {
    return http.get('/products');
};

export function Register (data:object) {
    return http.get('/signup',data);
};
export function login (data:object) {
    return http.get('/login', data);
};