import React from 'react';
import './activityCard.css';

const ActivityCard = ({ group, description, date, type }) => {
    const getTypeIcon = () => {
        if (type === 'contribution') {
            return '💰'; // Contribution icon
        }
        if (type === 'join') {
            return '🤝'; // Joining group icon
        }
        return 'ℹ️'; // Default info icon
    };

    return (
        <div className="activity-card">
            <div className="activity-icon">{getTypeIcon()}</div>
            <div className="activity-details">
                <h3 className="activity-group">{group}</h3>
                <p className="activity-description">{description}</p>
                <p className="activity-date">{date}</p>
            </div>
        </div>
    );
};

export default ActivityCard;
