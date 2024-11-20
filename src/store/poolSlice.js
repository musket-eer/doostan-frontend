import { createSlice } from '@reduxjs/toolkit';

const poolSlice = createSlice({
    name: 'pool',
    initialState: {
        pools: [],
        selectedPool: null,
    },
    reducers: {
        setPools(state, action) {
            state.pools = action.payload;
        },
        setSelectedPool(state, action) {
            state.selectedPool = action.payload;
        },
    },
});

export const { setPools, setSelectedPool } = poolSlice.actions;
export default poolSlice.reducer;
