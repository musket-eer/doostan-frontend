import { postRequest, getRequest } from './api';

const TRANSACTION_URL = '/transactions';

export const getTransactions = async (poolId) => {
    return await getRequest(`${TRANSACTION_URL}/pool/${poolId}`);
};

export const depositFunds = async (poolId, amount, paymentMethod) => {
    return await postRequest(`${TRANSACTION_URL}/deposit`, {
        poolId,
        amount,
        paymentMethod,
    });
};

export const transferFunds = async (poolId, targetUserId, amount) => {
    return await postRequest(`${TRANSACTION_URL}/transfer`, {
        poolId,
        targetUserId,
        amount,
    });
};
