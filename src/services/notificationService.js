import { getRequest } from './api';

const NOTIFICATION_URL = '/notifications';

export const getNotifications = async (userId) => {
    return await getRequest(`${NOTIFICATION_URL}/user/${userId}`);
};

export const markNotificationAsRead = async (notificationId) => {
    return await getRequest(`${NOTIFICATION_URL}/read/${notificationId}`);
};
