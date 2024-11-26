import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthProvider } from '../contexts/authContext';

const ProtectedRoute = ({ children }) => {
    const { user, loading } = useContext(AuthProvider);

    if (loading) return <p>Loading...</p>; // Show a loading state while checking authentication

    if (!user) return <Navigate to="/login" replace />; // Redirect to login if not authenticated

    return children; // Render the protected content if authenticated
};

export default ProtectedRoute;
