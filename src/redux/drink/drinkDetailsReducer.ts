import { PayloadAction, createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import { DrinkDetails } from "../../../componentTypes";
import { RootState } from "../store";
import { fetchData } from "../fetchData";

interface DrinkDetailsState {
    details: DrinkDetails | null
}

const initialState: DrinkDetailsState = {
    details: null
};

export const fetchDrinkDetails = createAsyncThunk(
    'cafeList/fetchDrinkDetails',
    async function ({ sessionId, productId }: { sessionId: string, productId: string }) {
        return fetchData({
            url: 'http://cafe.prox2.dex-it.ru/api/Product/GetProduct',
            requestBody: { sessionId: sessionId, productId: productId }
        })
    });

export const drinkDetailsReducer = createReducer(initialState, (builder) => {
    builder.addCase(fetchDrinkDetails.fulfilled, (state, action: PayloadAction<DrinkDetails>) => {
        state.details = action.payload;
    })
});

export const selectDrinkDetails = (state: RootState) => state.drinkDetails.details;