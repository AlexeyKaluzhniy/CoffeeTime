import { configureStore } from "@reduxjs/toolkit";
import { cafeListReducer } from "./cafe/cafeListReducer";
import { cafeDetailsReducer } from "./cafe/cafeDetailsReducer";
import { cafeDrinksReducer } from "./cafe/cafeDrinksReducer";
import { drinkDetailsReducer } from "./drink/drinkDetailsReducer";

export const store = configureStore({
    reducer: {
        cafes: cafeListReducer,
        cafeDetails: cafeDetailsReducer,
        cafeDrinks: cafeDrinksReducer,
        drinkDetails: drinkDetailsReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;