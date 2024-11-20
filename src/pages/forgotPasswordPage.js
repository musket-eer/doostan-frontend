import React from 'react';
import ForgotPasswordForm from '../components/authentication/forgotPasswordForm';
import AuthHeader from '../components/authentication/authHeader';

const ForgotPasswordPage = () => {
    const handleReset = (email) => {
        console.log('Password reset requested for:', email);
        // Add password reset logic here, e.g., sending a reset email
    };

    return (
        <div>
            <AuthHeader
                title="Forgot Password"
                subtitle="Enter your email to receive password reset instructions."
            />
            <ForgotPasswordForm onReset={handleReset} />
        </div>
    );
};

export default ForgotPasswordPage;
