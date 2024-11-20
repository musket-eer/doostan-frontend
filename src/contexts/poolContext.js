import React, { createContext, useState, useContext } from 'react';

const PoolContext = createContext();

export const PoolProvider = ({ children }) => {
    const [pools, setPools] = useState([]);
    const [selectedPool, setSelectedPool] = useState(null);

    const addPool = (pool) => {
        setPools((prev) => [...prev, pool]);
    };

    const selectPool = (poolId) => {
        const pool = pools.find((p) => p.id === poolId);
        setSelectedPool(pool);
    };

    return (
        <PoolContext.Provider value={{ pools, selectedPool, addPool, selectPool }}>
            {children}
        </PoolContext.Provider>
    );
};

export const usePool = () => useContext(PoolContext);
