import { createSlice } from '@reduxjs/toolkit';

export const notificationSlice = createSlice({
    name: 'contact',
    initialState: {
        value: 0,
    },
    reducers: {
        // increment: state => {
        //   state.value += 1;
        // },
    },
});

// export const { increment, decrement, incrementByAmount } = contactSlice.actions;
export default notificationSlice.reducer;
