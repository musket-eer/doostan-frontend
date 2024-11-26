import { fetchData, sendData } from './api';

// Fetch Transactions
export const getTransactions = async () => {
    return await fetchData('/transactions'); // Replace endpoint
};

// Add Contribution
export const addContribution = async (groupId, amount) => {
    return await sendData('/transactions/contribute', { groupId, amount }); // Replace endpoint
};

// Fetch Pending Loans
export const getPendingLoans = async () => {
    return await fetchData('/transactions/loans'); // Replace endpoint
};

// Fetch Due Dates for Contributions
export const getContributionReminders = async () => {
    return await fetchData('/transactions/reminders'); // Replace endpoint
};
