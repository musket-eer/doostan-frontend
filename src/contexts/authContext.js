import React, { createContext, useState, useContext } from 'react';

// Create the context
const AuthContext = createContext();

// Provide context
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (userData) => {
        setUser(userData);
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook for accessing auth context
export const useAuth = () => useContext(AuthContext);
