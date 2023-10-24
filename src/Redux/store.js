import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterSlice';

export const store = configureStore({
    reducer:{
//define reducer as key-value pair
counterReducer
    }
})