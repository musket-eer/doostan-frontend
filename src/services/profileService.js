import { fetchData, sendData } from './api';

// Fetch Profile Details
export const getProfileDetails = async () => {
    return await fetchData('/user/profile'); // Replace endpoint
};

// Update Profile Details
export const updateProfileDetails = async (updatedDetails) => {
    return await sendData('/user/profile/update', updatedDetails); // Replace endpoint
};

// Change Password
export const changePassword = async (oldPassword, newPassword) => {
    return await sendData('/user/change-password', { oldPassword, newPassword }); // Replace endpoint
};
