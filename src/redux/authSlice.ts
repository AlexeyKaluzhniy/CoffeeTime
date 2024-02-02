import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData } from "./fetchData";
import { RootState } from "./store";

export const fetchSessionId = createAsyncThunk(
    'cafe/fetchSessionId',
    async function ({ email, password, url }: { email: string, password: string, url: string }) {
        return fetchData({
            url: `http://cafe.prox2.dex-it.ru/api/User/${url}`,
            requestBody: { email, password }
        })
    });

interface SessionId {
    sessionId: string;
    loading: boolean;
    error: string | null;
}

const initialState: SessionId = {
    sessionId: '',
    loading: false,
    error: null
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        resetError: state => {
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSessionId.pending, state => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchSessionId.fulfilled, (state, action: PayloadAction<string>) => {
                state.sessionId = action.payload;
                state.loading = false;
                state.error = null;
            })
            .addCase(fetchSessionId.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Ошибка при регистрации';
            })
    }
});

export const authReducer = authSlice.reducer;
export const { resetError } = authSlice.actions;

export const selectSessionId = (state: RootState) => state.auth.sessionId;
export const selectRequestStatus = (state: RootState) => state.auth.loading;
export const selectRequestError = (state: RootState) => state.auth.error;