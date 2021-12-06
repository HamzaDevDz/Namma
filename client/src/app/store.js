import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/header/userSlice';
import shoppingCardReducer from '../features/shoppingCard/shoppingCardSlice'
import productsReducer from "../features/home/products/productsSlice"
import displayDressReducer from "../features/displayDress/displayDressSlice"
import commandReducer from "../features/command/commandSlice"

export const store = configureStore({
  reducer: {
    user: userReducer,
    shoppingCard: shoppingCardReducer,
    products: productsReducer,
    displayDress: displayDressReducer,
    command: commandReducer,
  },
});
