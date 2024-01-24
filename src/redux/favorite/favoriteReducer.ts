import { createAsyncThunk, createReducer, createSelector } from "@reduxjs/toolkit";
import { fetchData } from "../fetchData";
import { Drink } from "../../../componentTypes";
import { RootState } from "../store";

export const fetchAllProducts = createAsyncThunk(
    'favorite/fetchAllProducts',
    async function (sessionId: string) {
        return fetchData({
            url: 'http://cafe.prox2.dex-it.ru/api/Product/GetAll',
            requestBody: sessionId
        })
    });

export const setFavoriteServer = createAsyncThunk(
    'favorite/setFavoriteServer',
    async function ({ sessionId, productId }: { sessionId: string, productId: string }) {
        fetchData({
            url: 'http://cafe.prox2.dex-it.ru/api/Favorite/Set',
            requestBody: { sessionId: sessionId, productId: productId }
        });
        return productId;
    });

export const unsetFavoriteServer = createAsyncThunk(
    'favorite/unsetFavoriteServer',
    async function ({ sessionId, productId }: { sessionId: string, productId: string }) {
        fetchData({
            url: 'http://cafe.prox2.dex-it.ru/api/Favorite/Unset',
            requestBody: { sessionId: sessionId, productId: productId }
        });
        return productId;
    });

interface FavoriteState {
    products: Drink[],
    favorites: string[],
}

const initialState: FavoriteState = {
    products: [],
    favorites: [],
};

export const favoriteReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(fetchAllProducts.fulfilled, (state, action) => {
            state.products = action.payload;
        })
        .addCase(setFavoriteServer.fulfilled, (state, action) => {
            if (!state.favorites.includes(action.payload)) {
                state.favorites.push(action.payload);
            }
        })
        .addCase(unsetFavoriteServer.fulfilled, (state, action) => {
            state.favorites = state.favorites.filter(id => id !== action.payload);
        })
});

export const selectFavorite = (productId: string) => (state: RootState) => {
    return state.favorite.favorites.includes(productId);
}

const selectFavoriteIds = (state: RootState) => state.favorite.favorites;
const selectProducts = (state: RootState) => state.favorite.products;

export const selectAllFavorites = createSelector(
    [selectFavoriteIds, selectProducts],
    (favoriteIds, products) => {
        return products.filter(product => favoriteIds.includes(product.id));
    }
);