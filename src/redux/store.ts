import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { cafeListReducer } from "./cafe/cafeListReducer";
import { cafeDetailsReducer } from "./cafe/cafeDetailsReducer";
import { cafeDrinksReducer } from "./cafe/cafeDrinksReducer";
import { drinkDetailsReducer } from "./drink/drinkDetailsReducer";
import { favoriteReducer } from "./favorite/favoriteReducer";
import { authReducer } from "./auth/authReducer";

export const store = configureStore({
    reducer: {
        cafe: combineReducers({
            cafeList: cafeListReducer,
            cafeDetails: cafeDetailsReducer,
            cafeDrinks: cafeDrinksReducer
        }),
        drinkDetails: drinkDetailsReducer,
        favorite: favoriteReducer,
        auth: authReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;