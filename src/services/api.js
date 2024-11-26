import axios from 'axios';

// Create an Axios instance with base configuration
const api = axios.create({
    baseURL: 'https://your-backend-api.com/api', // Replace with your base API URL
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add Authorization header if token exists
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('authToken'); // Replace with your token storage mechanism
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// Generic GET method
export const fetchData = async (endpoint, params = {}) => {
    try {
        const response = await api.get(endpoint, { params });
        return response.data;
    } catch (error) {
        handleApiError(error, endpoint);
        throw error; // Re-throw the error for caller to handle
    }
};

// Generic POST method
export const sendData = async (endpoint, data) => {
    try {
        const response = await api.post(endpoint, data);
        return response.data;
    } catch (error) {
        handleApiError(error, endpoint);
        throw error;
    }
};

// Generic PUT method
export const updateData = async (endpoint, data) => {
    try {
        const response = await api.put(endpoint, data);
        return response.data;
    } catch (error) {
        handleApiError(error, endpoint);
        throw error;
    }
};

// Generic DELETE method
export const deleteData = async (endpoint) => {
    try {
        const response = await api.delete(endpoint);
        return response.data;
    } catch (error) {
        handleApiError(error, endpoint);
        throw error;
    }
};

// Error handler
const handleApiError = (error, endpoint) => {
    if (error.response) {
        console.error(`API Error [${error.response.status}] at ${endpoint}:`, error.response.data);
    } else if (error.request) {
        console.error(`No response received from API at ${endpoint}:`, error.request);
    } else {
        console.error(`Error in API call to ${endpoint}:`, error.message);
    }
};
