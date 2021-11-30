import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    statusDisplayDress: true,
    displayDress: {
        __id: 1,
        title: 'Titre du vêtement',
        description: 'Parfait pour être classe',
        price: 5500,
        pathPictures: [
            '../landingPage/baghdad.png',
            '../landingPage/baghdad.png',
            '../landingPage/hamza.png',
            '../landingPage/hamza.png',
        ],
        sizesAndColors: [
            {
                title: 'S',
                colors: [
                    {title: 'Noir', code:"#000000", number: 5},
                    {title: 'Bleu',code:"#0000ff", number: 3},
                    {title: 'Rouge',code:"#ff0000", number: 2},
                ]
            },
            {
                title: 'M',
                colors: [
                    {title: 'Noir', code:"#000000", number: 5},
                    {title: 'Bleu',code:"#0000ff", number: 3},
                    {title: 'Rouge',code:"#ff0000", number: 2},
                ]
            },
            {
                title: 'L',
                colors: [
                    {title: 'Noir', code:"#000000", number: 5},
                    {title: 'Bleu',code:"#0000ff", number: 3},
                    {title: 'Rouge',code:"#ff0000", number: 2},
                ]
            },
        ],
    },
    selectedSize: "",
    selectedColor: "",
};

export const displayDressSlice = createSlice({
    name: 'displayDress',
    initialState,
    reducers: {
        setSelectedSize: (state, action) => {
            state.selectedSize = action.payload
        },
        setSelectedColor: (state, action) => {
            state.selectedColor = action.payload
        }
    },
    extraReducers: {},
});

export const {setSelectedSize, setSelectedColor} = displayDressSlice.actions;

export const selectDisplayDress = state => state.displayDress.displayDress
export const selectStatusDisplayDress = state => state.displayDress.statusDisplayDress
export const selectSelectedSize = state => state.displayDress.selectedSize
export const selectSelectedColor  = state => state.displayDress.selectedColor

export default displayDressSlice.reducer;
