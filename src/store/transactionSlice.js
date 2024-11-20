import { createSlice } from '@reduxjs/toolkit';

const transactionSlice = createSlice({
    name: 'transaction',
    initialState: {
        transactions: [],
    },
    reducers: {
        setTransactions(state, action) {
            state.transactions = action.payload;
        },
        addTransaction(state, action) {
            state.transactions.push(action.payload);
        },
    },
});

export const { setTransactions, addTransaction } = transactionSlice.actions;
export default transactionSlice.reducer;
