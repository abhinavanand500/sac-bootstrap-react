/* eslint-disable import/no-named-as-default */
import { configureStore } from '@reduxjs/toolkit';
import notificationSlice from '../features/Notification/notificationSlice';
import dashboardSlice from '../features/Dashboard/dashBoardSlice';
import feedSlice from '../features/Feed/feedSlice';
import userSlice from '../features/components/userSlice';

export default configureStore({
    reducer: {
        user: userSlice,
        feed: feedSlice,
        notification: notificationSlice,
        dashboard: dashboardSlice,
    },
});
