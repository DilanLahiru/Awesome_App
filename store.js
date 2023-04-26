import {configureStore} from '@reduxjs/toolkit';
import dashboardReducer from './app/reducer/DashboardReducer';

export const store = configureStore({
  reducer: {
    loginUserData: dashboardReducer,
  },
});
