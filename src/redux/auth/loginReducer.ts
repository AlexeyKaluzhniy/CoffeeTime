import { PayloadAction, createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import { fetchData } from "../fetchData";
import { RootState } from "../store";

export const fetchSessionId = createAsyncThunk(
    'cafe/fetchSessionId',
    async function ({ email, password }: { email: string, password: string }) {
        return fetchData({
            url: 'http://cafe.prox2.dex-it.ru/api/User/Authorization',
            requestBody: { email, password }
        })
    });

interface SessionId {
    sessionId: string;
}

const initialState: SessionId = {
    sessionId: '',
};

export const authReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(fetchSessionId.fulfilled, (state, action: PayloadAction<string>) => {
            state.sessionId = action.payload;
        })
});

export const selectSessionId = (state: RootState) => state.auth.sessionId;