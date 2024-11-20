import React from 'react';
import LoginForm from '../components/authentication/loginForm';
import SocialAuthButtons from '../components/authentication/socialAuthButtons';
import AuthHeader from '../components/authentication/authHeader';
import PrimaryButton from '../components/buttons/primaryButton';


const LoginPage = () => {
    const handleLogin = (credentials) => {
        console.log('Logging in with:', credentials);
        // Add login logic here
    };

    const handleGoogleLogin = () => {
        console.log('Logging in with Google');
        // Add Google login logic here
    };

    const handleFacebookLogin = () => {
        console.log('Logging in with Facebook');
        // Add Facebook login logic here
    };

    return (
        <div>
            <AuthHeader title="Login" subtitle="Welcome back! Please log in to your account." />
            <LoginForm onLogin={handleLogin}>
                <PrimaryButton type="submit">Login</PrimaryButton>
            </LoginForm>
            <SocialAuthButtons
                onGoogleLogin={handleGoogleLogin}
                onFacebookLogin={handleFacebookLogin}
            />
        </div>
    );
};

export default LoginPage;
