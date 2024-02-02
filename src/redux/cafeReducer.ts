import { PayloadAction, createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import { Cafe, Drink } from "../../componentTypes";
import { fetchData } from "./fetchData";
import { RootState } from "./store";

interface CafeList {
    cafes: Cafe[];
    drinks: Drink[];
    details: Cafe | null;
}

const initialState: CafeList = {
    cafes: [],
    drinks: [],
    details: null,
};

export const fetchCafeDetails = createAsyncThunk(
    'cafe/fetchCafeDetails',
    async function ({ sessionId, cafeId }: { sessionId: string, cafeId: string }) {
        return fetchData({
            url: 'http://cafe.prox2.dex-it.ru/api/Cafe/GetCafe',
            requestBody: { sessionId, cafeId }
        })
    });

export const fetchCafeDrinks = createAsyncThunk(
    'cafe/fetchCafeDrinks',
    async function ({ sessionId, cafeId }: { sessionId: string, cafeId: string }) {
        return fetchData({
            url: 'http://cafe.prox2.dex-it.ru/api/Product/GetProductsCafe',
            requestBody: { sessionId, cafeId }
        })
    });

export const fetchCafeList = createAsyncThunk(
    'cafeList/fetchCafeList',
    async function (sessionId: string) {
        return fetchData({ url: 'http://cafe.prox2.dex-it.ru/api/Cafe/GetAll', requestBody: sessionId })
    });

export const cafeReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(fetchCafeDetails.fulfilled, (state, action: PayloadAction<Cafe>) => {
            state.details = action.payload;
        })
        .addCase(fetchCafeDrinks.fulfilled, (state, action: PayloadAction<Drink[]>) => {
            state.drinks = action.payload;
        })
        .addCase(fetchCafeList.fulfilled, (state, action: PayloadAction<Cafe[]>) => {
            state.cafes = action.payload;
        })
});

export const selectCafeDetails = (state: RootState) => state.cafe.details;
export const selectCafeDrinks = (state: RootState) => state.cafe.drinks;
export const selectCafes = (state: RootState) => state.cafe.cafes;