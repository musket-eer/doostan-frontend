import React from 'react';
import SignupForm from '../components/authentication/signUpForm';
import AuthHeader from '../components/authentication/authHeader';
import PrimaryButton from '../components/buttons/primaryButton';

const SignupPage = () => {
    const handleSignup = (userData) => {
        console.log('Signing up with:', userData);
        // Add signup logic here
    };

    return (
        <div>
            <AuthHeader
                title="Sign Up"
                subtitle="Create an account to start pooling funds with your friends."
            />
            <SignupForm onSignup={handleSignup}>
                <PrimaryButton type="submit">Sign Up</PrimaryButton>
            </SignupForm>
        </div>
    );
};

export default SignupPage;

