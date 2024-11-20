import { createSlice } from '@reduxjs/toolkit';

const notificationSlice = createSlice({
    name: 'notification',
    initialState: {
        notifications: [],
        unreadCount: 0,
    },
    reducers: {
        setNotifications(state, action) {
            state.notifications = action.payload;
            state.unreadCount = action.payload.filter((n) => !n.read).length;
        },
        markAsRead(state, action) {
            const notification = state.notifications.find((n) => n.id === action.payload);
            if (notification) notification.read = true;
            state.unreadCount -= 1;
        },
    },
});

export const { setNotifications, markAsRead } = notificationSlice.actions;
export default notificationSlice.reducer;
