import React from 'react';
import '../styles/global.css';
import ActivityCard from '../components/cards/activityCard';

const FeedPage = () => {
    // Mock data for feed activities
    const activities = [
        {
            id: 1,
            group: 'Family Vacation Fund',
            description: 'You contributed $100',
            date: '2024-11-18 14:35',
            type: 'contribution', // Type of activity
        },
        {
            id: 2,
            group: 'Office Party Fund',
            description: 'John Doe contributed $50',
            date: '2024-11-18 13:22',
            type: 'contribution',
        },
        {
            id: 3,
            group: 'College Reunion Fund',
            description: 'You joined the group',
            date: '2024-11-17 10:15',
            type: 'join',
        },
        {
            id: 4,
            group: 'Community Charity',
            description: 'You contributed $200',
            date: '2024-11-16 09:00',
            type: 'contribution',
        },
    ];

    return (
        <div className="feed-page">
            <header className="feed-header">
                <h1>Feed</h1>
            </header>
            <section className="feed-content">
                {activities.map((activity) => (
                    <ActivityCard
                        key={activity.id}
                        group={activity.group}
                        description={activity.description}
                        date={activity.date}
                        type={activity.type}
                    />
                ))}
            </section>
        </div>
    );
};

export default FeedPage;
