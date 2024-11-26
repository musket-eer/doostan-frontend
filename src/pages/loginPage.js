import React, {useState} from 'react';
import LoginForm from '../components/authentication/loginForm';
import SocialAuthButtons from '../components/authentication/socialAuthButtons';
import AuthHeader from '../components/authentication/authHeader';
import PrimaryButton from '../components/buttons/primaryButton';
import { login } from '../services/authService';


const LoginPage = () => {
    // Add login logic here
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const userData = await login(email, password);
            alert(`Welcome back, ${userData.name}!`);
            window.location.href = '/dashboard'; // Redirect to dashboard
        } catch (error) {
            alert('Failed to log in. Please check your credentials.');
        }

            
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
            <h1>Login</h1>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
         );
    };

export default LoginPage;