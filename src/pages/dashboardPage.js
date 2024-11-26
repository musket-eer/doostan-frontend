import React, { useState } from 'react';
import PrimaryButton from '../components/buttons/primaryButton'; // Adjust import path
import PoolCard from '../components/cards/poolCard'; // Pool cards for pools
import '../styles/global.css';

const DashboardPage = () => {
    const [totalContributions, setTotalContributions] = useState(1500); // Example total contribution amount
    const [pools] = useState([
        { id: 1, name: 'Family Vacation Fund', total: 500 },
        { id: 2, name: 'Office Party Fund', total: 300 },
        { id: 3, name: 'College Reunion Fund', total: 700 },
    ]); // Example pool data

    const [pendingLoans] = useState([
        { loanId: 1, group: 'Community Charity', dueDate: '2024-12-01' },
        { loanId: 2, group: 'Family Vacation Fund', dueDate: '2024-12-15' },
    ]); // Example pending loans

    const [dueReminders] = useState([
        { group: 'Office Party Fund', dueDate: '2024-11-30' },
        { group: 'College Reunion Fund', dueDate: '2024-12-05' },
    ]); // Example contribution due date reminders

    return (
        <div className="dashboard-page">
            <h1>Dashboard</h1>

            {/* Total Contributions Section */}
            <div className="total-contributions">
                <h2>Total Contributions: ${totalContributions}</h2>
            </div>

            {/* Pool Cards */}
            <div className="pool-cards">
                <h2>Your Pools</h2>
                {pools.map((pool) => (
                    <PoolCard key={pool.id} name={pool.name} total={pool.total} />
                ))}
            </div>

            {/* Pending Loans */}
            <div className="pending-loans">
                <h2>Pending Loans</h2>
                <ul>
                    {pendingLoans.map((loan) => (
                        <li key={loan.loanId}>
                            <strong>{loan.group}</strong> - Due: {loan.dueDate}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Contribution Due Dates Reminders */}
            <div className="due-reminders">
                <h2>Contribution Due Dates</h2>
                <ul>
                    {dueReminders.map((reminder, index) => (
                        <li key={index}>
                            <strong>{reminder.group}</strong> - Due: {reminder.dueDate}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Button to Add New Pool */}
            <div className="add-pool">
                <PrimaryButton onClick={() => alert('Redirect to Add Pool page')}>Add New Pool</PrimaryButton>
            </div>
        </div>
    );
};

export default DashboardPage;
