import React from 'react';
import './IconButton.css';

const IconButton = ({ onClick, icon, label, type = 'button', disabled = false }) => {
    return (
        <button
            type={type}
            className="icon-button"
            onClick={onClick}
            disabled={disabled}
            aria-label={label}
        >
            {icon}
        </button>
    );
};

export default IconButton;
