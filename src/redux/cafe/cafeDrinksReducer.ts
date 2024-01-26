import { PayloadAction, createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import { Drink } from "../../../componentTypes";
import { fetchData } from "../fetchData";
import { RootState } from "../store";

interface CafeDrinks {
    drinks: Drink[];
}

const initialState: CafeDrinks = {
    drinks: []
};

export const fetchCafeDrinks = createAsyncThunk(
    'cafe/fetchCafeDrinks',
    async function ({ sessionId, cafeId }: { sessionId: string, cafeId: string }) {
        return fetchData({
            url: 'http://cafe.prox2.dex-it.ru/api/Product/GetProductsCafe',
            requestBody: { sessionId, cafeId }
        })
    });

export const cafeDrinksReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(fetchCafeDrinks.fulfilled, (state, action: PayloadAction<Drink[]>) => {
            state.drinks = action.payload;
        })
});

export const selectCafeDrinks = (state: RootState) => state.cafe.cafeDrinks.drinks;