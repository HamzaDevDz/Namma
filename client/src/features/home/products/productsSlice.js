import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {serverPrefix} from "../../../ServerPrefix";
import axios from "axios"

const initialState = {
    products: [],
    loadProducts: true,
}

export const getProducts = createAsyncThunk(
    'products/download/all',
    async () => {
        const response = await axios.get(serverPrefix + "products/download/all");
        return response.data;
    }
);

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: {
        [getProducts.pending] : (state) => {
            state.loadProducts = true
        },
        [getProducts.fulfilled] : (state, action) => {
            state.products = action.payload
            state.loadProducts = false
        },
    },
});

// export const {} = productsSlice.actions;

export const selectProducts = state => state.products.products
export const selectStatusProducts = state => state.products.loadProducts

export default productsSlice.reducer;
