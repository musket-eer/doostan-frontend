import { postRequest, getRequest } from './api';

const VOTING_URL = '/voting';

export const castVote = async (poolId, ruleId, vote) => {
    return await postRequest(`${VOTING_URL}/cast`, { poolId, ruleId, vote });
};

export const getVoteResults = async (poolId) => {
    return await getRequest(`${VOTING_URL}/results/${poolId}`);
};
