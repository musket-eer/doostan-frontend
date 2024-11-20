import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import poolReducer from './poolSlice';
import transactionReducer from './transactionSlice';
import notificationReducer from './notificationSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        pool: poolReducer,
        transaction: transactionReducer,
        notification: notificationReducer,
    },
});

export default store;
