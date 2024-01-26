import { PayloadAction, createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import { CafeList } from "../../../componentTypes";
import { fetchData } from "../fetchData";
import { RootState } from "../store";

interface CafeDetails {
    details: CafeList | null;
}

const initialState: CafeDetails = {
    details: null
};

export const fetchCafeDetails = createAsyncThunk(
    'cafe/fetchCafeDetails',
    async function ({ sessionId, cafeId }: { sessionId: string, cafeId: string }) {
        return fetchData({
            url: 'http://cafe.prox2.dex-it.ru/api/Cafe/GetCafe',
            requestBody: { sessionId, cafeId }
        })
    });

export const cafeDetailsReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(fetchCafeDetails.fulfilled, (state, action: PayloadAction<CafeList>) => {
            state.details = action.payload;
        })
});

export const selectCafeDetails = (state: RootState) => state.cafe.cafeDetails.details;