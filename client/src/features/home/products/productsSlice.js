import { createSlice } from '@reduxjs/toolkit';

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
            __id: 1,
            title: 'Titre du vêtement',
            description: 'Parfait pour être classe',
            price: 5500,
            pathPicture: './landingPage/baghdad.png',
        },
        {
            __id: 1,
            title: 'Titre du vêtement',
            description: 'Parfait pour être classe',
            price: 5500,
            pathPicture: './landingPage/hamza.png',
        },
    ],
    statusProducts: false,
};

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: {},
});

// export const {} = productsSlice.actions;

export const selectProducts = state => state.products.products
export const selectStatusProducts = state => state.products.statusProducts

export default productsSlice.reducer;
