import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CafeList } from "../../types";
import { RootState } from "./store";

interface CafeListState {
    data: CafeList[];
}

const initialState: CafeListState = {
    data: []
};

export const fetchList = createAsyncThunk(
    'cafeList/fetchList',
    async function (sessionId: string) {
        try {
            const response = await fetch('http://cafe.prox2.dex-it.ru/api/Cafe/GetAll', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json; charset=utf8',
                },
                body: JSON.stringify(sessionId)
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const responseJson = await response.json();
            return responseJson;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    });

export const cafeListSlice = createSlice({
    name: 'cafeList',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchList.fulfilled, (state, action: PayloadAction<CafeList[]>) => {
            state.data = action.payload;
        })
    }
});

export const selectCafes = (state: RootState) => state.cafes.data;
export default cafeListSlice.reducer;