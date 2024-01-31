import { PayloadAction, createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import { Cafe } from "../../../componentTypes";
import { RootState } from "../store";
import { fetchData } from "../fetchData";

interface CafeListState {
    data: Cafe[];
}

const initialState: CafeListState = {
    data: []
};

export const fetchCafeList = createAsyncThunk(
    'cafeList/fetchCafeList',
    async function (sessionId: string) {
        return fetchData({ url: 'http://cafe.prox2.dex-it.ru/api/Cafe/GetAll', requestBody: sessionId })
    });

export const cafeListReducer = createReducer(initialState, (builder) => {
    builder.addCase(fetchCafeList.fulfilled, (state, action: PayloadAction<Cafe[]>) => {
        state.data = action.payload;
    })
});

export const selectCafes = (state: RootState) => state.cafe.cafeList.data;