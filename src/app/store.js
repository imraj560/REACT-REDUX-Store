import { configureStore } from '@reduxjs/toolkit';
import  userReducer  from '../features/userSlice';
import moviesReducer from '../features/movieSlice';
import cartReducer from '../features/cartSlice';


export const store = configureStore({
  reducer: {
    
    user: userReducer,
    movies: moviesReducer,
    cart: cartReducer
  },
});
