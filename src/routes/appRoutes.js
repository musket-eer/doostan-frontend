import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/loginPage';
import SignupPage from '../pages/signUpPage';
import HomePage from '../pages/homePage';
import ForgotPasswordPage from '../pages/forgotPasswordPage';
import DashboardPage from '../pages/dashboardPage';
import NavigationBar from '../components/navigationBar/navigationBar';
import FeedPage from '../pages/feedPage';
import TransactionPage from '../pages/transactionsPage';
import ProfilePage from '../pages/profilePage'; // Import ProfilePage
import ProtectedRoute from '../routes/protectedRoute'; // Adjust the path based on your folder structure
import { AuthProvider } from '../contexts/authContext';

const AppRoutes = () => {
    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignupPage />} />
                    <Route
                        path="/dashboard"
                        element={
                            <ProtectedRoute>
                                <DashboardPage />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/feed"
                        element={
                            <ProtectedRoute>
                                <FeedPage />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/transaction"
                        element={
                            <ProtectedRoute>
                                <TransactionPage />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/profile"
                        element={
                            <ProtectedRoute>
                                <ProfilePage />
                            </ProtectedRoute>
                        }
                    />
                </Routes>
            </AuthProvider>
        </Router>
    );
};

export default AppRoutes;
