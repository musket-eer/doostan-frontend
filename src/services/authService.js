import { postRequest } from './api';

const AUTH_URL = '/auth';

export const login = async (email, password) => {
    const response = await postRequest(`${AUTH_URL}/login`, { email, password });
    localStorage.setItem('token', response.token); // Store token
    return response.user;
};

export const logout = () => {
    localStorage.removeItem('token'); // Remove token
};

export const getToken = () => {
    return localStorage.getItem('token');
};
