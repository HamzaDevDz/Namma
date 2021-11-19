import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/header/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
