import axios from 'axios';

const API_BASE_URL = 'https://api.example.com'; // Replace with your backend URL

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// GET Request
export const getRequest = async (url) => {
    try {
        const response = await api.get(url);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

// POST Request
export const postRequest = async (url, data) => {
    try {
        const response = await api.post(url, data);
        return response.data;
    } catch (error) {
        console.error('Error posting data:', error);
        throw error;
    }
};

// PUT Request
export const putRequest = async (url, data) => {
    try {
        const response = await api.put(url, data);
        return response.data;
    } catch (error) {
        console.error('Error updating data:', error);
        throw error;
    }
};

// DELETE Request
export const deleteRequest = async (url) => {
    try {
        const response = await api.delete(url);
        return response.data;
    } catch (error) {
        console.error('Error deleting data:', error);
        throw error;
    }
};
