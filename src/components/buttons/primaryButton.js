import React from 'react';
import './primaryButton.css';

const PrimaryButton = ({ onClick, children, type = 'button', disabled = false }) => {
    return (
        <button
            type={type}
            className="primary-button"
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default PrimaryButton;
