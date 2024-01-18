import { configureStore } from "@reduxjs/toolkit";
import cafesReducer from './cafeListSlice';

export const store = configureStore({
    reducer: {
        cafes: cafesReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;