import React from 'react';

const SocialAuthButtons = ({ onGoogleLogin, onFacebookLogin }) => {
    return (
        <div>
            <h3>Or Login with</h3>
            <button onClick={onGoogleLogin}>Login with Google</button>
            <button onClick={onFacebookLogin}>Login with Facebook</button>
        </div>
    );
};

export default SocialAuthButtons;
