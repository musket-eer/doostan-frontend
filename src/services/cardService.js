import { postRequest, getRequest } from './api';

const CARD_URL = '/cards';

export const generateCard = async (type, poolId = null) => {
    return await postRequest(`${CARD_URL}/generate`, { type, poolId });
};

export const getCards = async (userId) => {
    return await getRequest(`${CARD_URL}/user/${userId}`);
};
