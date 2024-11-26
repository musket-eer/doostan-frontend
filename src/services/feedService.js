import { fetchData } from './apiService';

// Fetch User Feed
export const getUserFeed = async () => {
    return await fetchData('/user/feed'); // Replace endpoint
};
