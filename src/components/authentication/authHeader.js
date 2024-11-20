import React from 'react';

const AuthHeader = ({ title, subtitle }) => {
    return (
        <header>
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </header>
    );
};

export default AuthHeader;
