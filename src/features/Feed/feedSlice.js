import { createSlice } from '@reduxjs/toolkit';

export const feedSlice = createSlice({
    name: 'feed',
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

// export const { increment, decrement, incrementByAmount } = donateClothSlice.actions;

export const selectCount = (state) => state.counter.value;

export default feedSlice.reducer;
