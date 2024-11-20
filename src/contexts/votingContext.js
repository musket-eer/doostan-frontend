import React, { createContext, useState, useContext } from 'react';

const VotingContext = createContext();

export const VotingProvider = ({ children }) => {
    const [votes, setVotes] = useState([]);

    const castVote = (voteData) => {
        setVotes((prev) => [...prev, voteData]);
    };

    const getVoteResults = (poolId) => {
        return votes.filter((vote) => vote.poolId === poolId);
    };

    return (
        <VotingContext.Provider value={{ votes, castVote, getVoteResults }}>
            {children}
        </VotingContext.Provider>
    );
};

export const useVoting = () => useContext(VotingContext);
