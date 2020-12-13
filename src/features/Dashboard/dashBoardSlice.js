import { createSlice } from '@reduxjs/toolkit';

export const dashBoardSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers: {
        // increment: state => {
        //   state.value += 1;
        // },
        // decrement: state => {
        //   state.value -= 1;
        // },
        // incrementByAmount: (state, action) => {
        //   state.value += action.payload;
        // },
    },
});

export const { increment, decrement, incrementByAmount } = dashBoardSlice.actions;

export const selectCount = (state) => state.counter.value;

export default dashBoardSlice.reducer;
