import React from 'react';
import './LinkButton.css';

const LinkButton = ({ onClick, children, disabled = false }) => {
    return (
        <button
            className="link-button"
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default LinkButton;
