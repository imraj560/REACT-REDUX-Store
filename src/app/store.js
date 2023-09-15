import { configureStore } from '@reduxjs/toolkit';
import  userReducer  from '../features/userSlice';
import moviesReducer from '../features/movieSlice';
import cartReducer from '../features/cartSlice';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import { combineReducers } from '@reduxjs/toolkit';

const persistConfig = {
  key:"root",
  verion:1,
  storage
};

const reducer = combineReducers({

  user: userReducer,
    movies: moviesReducer,
    cart: cartReducer

})

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer:persistedReducer
});
