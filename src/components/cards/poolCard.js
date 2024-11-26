import React from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
import './poolCard.css';

const PoolCard = ({ name, total }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/pool/${name.toLowerCase().replace(/\s+/g, '-')}`);
    };

    return (
        <div className="pool-card" onClick={handleClick}>
            <h3>{name}</h3>
            <p>Total Contributions: ${total}</p>
        </div>
    );
};

export default PoolCard;
