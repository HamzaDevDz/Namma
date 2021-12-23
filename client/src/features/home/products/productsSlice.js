import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {serverPrefix} from "../../../ServerPrefix";
import axios from "axios"

const initialState = {
    products: [
        {
            __id: 1,
            title: 'Titre du vêtement',
            description: 'Parfait pour être classe',
            price: 5500,
            pathPicture: './landingPage/baghdad.png',
        },
        {
            __id: 2,
            title: 'Titre du vêtement',
            description: 'Parfait pour être classe',
            price: 5500,
            pathPicture: './landingPage/hamza.png',
        },
        {
            __id: 3,
            title: 'Titre du vêtement',
            description: 'Parfait pour être classe',
            price: 5500,
            pathPicture: './landingPage/baghdad.png',
        },
        {
            __id: 4,
            title: 'Titre du vêtement',
            description: 'Parfait pour être classe',
            price: 5500,
            pathPicture: './landingPage/baghdad.png',
        },
        {
            __id: 5,
            title: 'Titre du vêtement',
            description: 'Parfait pour être classe',
            price: 5500,
            pathPicture: './landingPage/hamza.png',
        },
    ],
    loadProducts: true,
};

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
        },
        [getProducts.rejected] : (state, action) => {
            console.log(action.payload)
        }
    },
});

// export const {} = productsSlice.actions;

export const selectProducts = state => state.products.products
export const selectStatusProducts = state => state.products.loadProducts

export default productsSlice.reducer;
