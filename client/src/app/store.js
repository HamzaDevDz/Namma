import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/header/userSlice';
import shoppingCardReducer from '../features/home/shoppingCard/shoppingCardSlice'
import productsReducer from "../features/home/products/productsSlice"

export const store = configureStore({
  reducer: {
    user: userReducer,
    shoppingCard: shoppingCardReducer,
    products: productsReducer,
  },
});
