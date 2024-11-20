import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/loginPage';
import SignupPage from '../pages/signUpPage';
import ForgotPasswordPage from '../pages/forgotPasswordPage';
import DashboardPage from '../pages/dashboardPage';
// Import other pages...

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginPage/>} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/forgot-password" element={<ForgotPasswordPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                {/* Add other routes */}
            </Routes>
        </Router>
    );
};

export default AppRoutes;
