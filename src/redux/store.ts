import { configureStore } from "@reduxjs/toolkit";
import { drinkDetailsReducer } from "./drinkDetailsReducer";
import { favoriteReducer } from "./favoriteReducer";
import { cafeReducer } from "./cafeReducer";
import { authReducer } from "./authSlice";

export const store = configureStore({
    reducer: {
        cafe: cafeReducer,
        drinkDetails: drinkDetailsReducer,
        favorite: favoriteReducer,
        auth: authReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;