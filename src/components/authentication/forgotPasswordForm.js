import React, { useState } from 'react';

const ForgotPasswordForm = ({ onReset }) => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onReset(email);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Forgot Password</h2>
            <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <button type="submit">Reset Password</button>
        </form>
    );
};

export default ForgotPasswordForm;
