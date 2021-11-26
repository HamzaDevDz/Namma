import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/header/userSlice';
import shoppingCardReducer from '../features/home/shoppingCart/shoppingCardSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    shoppingCard: shoppingCardReducer,
  },
});
