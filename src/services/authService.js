import { sendData } from './api';

// Login Service
export const login = async (email, password) => {
    const data = await sendData('/auth/login', { email, password }); // Replace endpoint
    localStorage.setItem('authToken', data.token); // Save token
    return data;
};

// Signup Service
export const signup = async (name, email, password) => {
    return await sendData('/auth/signup', { name, email, password }); // Replace endpoint
};

// Forgot Password Service
export const forgotPassword = async (email) => {
    return await sendData('/auth/forgot-password', { email }); // Replace endpoint
};
