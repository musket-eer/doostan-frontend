import React, { useState } from 'react';
import PrimaryButton from '../components/buttons/primaryButton'; // Adjust import path
import '../styles/global.css';

const TransactionPage = () => {
    const [selectedGroup, setSelectedGroup] = useState('');
    const [amount, setAmount] = useState('');

    const groups = [
        'Family Vacation Fund',
        'Office Party Fund',
        'College Reunion Fund',
        'Community Charity',
    ]; // Replace this with dynamic data if available

    const handleDeposit = () => {
        if (!selectedGroup || !amount) {
            alert('Please select a group and enter an amount.');
            return;
        }

        alert(`You are about to contribute ${amount} to ${selectedGroup}`);
    };

    return (
        <div className="transaction-page">
            <h1>Make a Contribution</h1>
            <div className="transaction-form">
                {/* Group Selection */}
                <label htmlFor="group-select">Select a Group</label>
                <select
                    id="group-select"
                    value={selectedGroup}
                    onChange={(e) => setSelectedGroup(e.target.value)}
                    className="group-select"
                >
                    <option value="" disabled>
                        Choose a group
                    </option>
                    {groups.map((group, index) => (
                        <option key={index} value={group}>
                            {group}
                        </option>
                    ))}
                </select>

                {/* Amount Input */}
                <label htmlFor="amount-input">Contribution Amount</label>
                <input
                    type="number"
                    id="amount-input"
                    placeholder="Enter amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="amount-input"
                />

                {/* Deposit Button */}
                <PrimaryButton onClick={handleDeposit}>Deposit</PrimaryButton>
            </div>
        </div>
    );
};

export default TransactionPage;
