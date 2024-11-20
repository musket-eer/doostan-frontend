import { getRequest, postRequest } from './api';

const POOL_URL = '/pools';

export const getAllPools = async () => {
    return await getRequest(POOL_URL);
};

export const getPoolById = async (poolId) => {
    return await getRequest(`${POOL_URL}/${poolId}`);
};

export const createPool = async (poolData) => {
    return await postRequest(POOL_URL, poolData);
};

export const joinPool = async (poolId, userId) => {
    return await postRequest(`${POOL_URL}/${poolId}/join`, { userId });
};
