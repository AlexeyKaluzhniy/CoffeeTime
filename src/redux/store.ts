import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { cafeListReducer } from "./cafe/cafeListReducer";
import { cafeDetailsReducer } from "./cafe/cafeDetailsReducer";
import { cafeDrinksReducer } from "./cafe/cafeDrinksReducer";
import { drinkDetailsReducer } from "./drink/drinkDetailsReducer";
import { favoriteReducer } from "./favorite/favoriteReducer";

export const store = configureStore({
    reducer: {
        cafe: combineReducers({
            cafeList: cafeListReducer,
            cafeDetails: cafeDetailsReducer,
            cafeDrinks: cafeDrinksReducer
        }),
        drinkDetails: drinkDetailsReducer,
        favorite: favoriteReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;