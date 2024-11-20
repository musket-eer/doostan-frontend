import React from 'react';
import './SubmitButton.css';

const SubmitButton = ({ children, disabled = false }) => {
    return (
        <button
            type="submit"
            className="submit-button"
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default SubmitButton;
