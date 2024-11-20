import React from 'react';
import './SecondaryButton.css';

const SecondaryButton = ({ onClick, children, type = 'button', disabled = false }) => {
    return (
        <button
            type={type}
            className="secondary-button"
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default SecondaryButton;
